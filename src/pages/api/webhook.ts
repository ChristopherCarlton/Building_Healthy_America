import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import fulfillCheckout from "./fullfill-checkout"; // Import the fulfillCheckout function

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export const config = {
  api: {
    bodyParser: false, // Stripe requires the raw body to construct the event
  },
};

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET as string;

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      } else {
        console.error("Unknown error occurred during webhook signature verification.");
        return res.status(400).send("Webhook Error: An unknown error occurred.");
      }
    }

    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        const session = event.data.object as Stripe.Checkout.Session;
        // Pass the session_id to the fulfillCheckout function
        req.body = { session_id: session.id };
        await fulfillCheckout(req, res);
        break;

      case "capability.updated":
        const capability = event.data.object as Stripe.Capability;
        console.log(`Capability ${capability.id} was updated`);
        // Implement your logic for handling capability updates
        res.status(200).json({ received: true });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
        res.status(200).json({ received: true });
        break;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;
