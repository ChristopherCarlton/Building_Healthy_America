import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import fulfillCheckout from "./fulfill-Checkout"; // Ensure this path is correct

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export const config = {
  api: {
    bodyParser: false, // This is crucial for raw body access
  },
};

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET as string;

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  let event: Stripe.Event;
  
  try {
    // Capture the raw body for signature verification
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;

    // Log the raw body and signature for debugging
    console.log("Received raw body:", buf.toString());
    console.log("Received Stripe signature:", sig);

    // Verify the event by constructing it with the raw body
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);

    // Log the constructed event for debugging
    console.log("Constructed Stripe event:", event);
  } catch (err) {
    // Handle signature verification errors
    if (err instanceof Stripe.errors.StripeSignatureVerificationError) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    } else {
      console.error("Webhook error:", err);
      return res.status(400).send("Webhook Error: Invalid payload");
    }
  }

  // Handle the event types
  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session;
        req.body = { session_id: session.id };
        await fulfillCheckout(req, res);
        break;
      }
      case "capability.updated": {
        const capability = event.data.object as Stripe.Capability;
        console.log(`Capability ${capability.id} was updated`);
        res.status(200).json({ received: true });
        break;
      }
      default: {
        console.log(`Unhandled event type ${event.type}`);
        res.status(200).json({ received: true });
        break;
      }
    }
  } catch (err) {
    console.error("Error handling webhook event:", err);
    return res.status(500).send("Internal Server Error");
  }
};

export default webhookHandler;



// import { NextApiRequest, NextApiResponse } from "next";

// import Stripe from "stripe";
// import { buffer } from "micro";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2024-06-20", // Update to the expected API version
// });

// export const config = {
//   api: {
//     bodyParser: false, // Stripe requires the raw body to construct the event
//   },
// };

// const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET as string;

// const fulfillCheckout = async (session_id: string) => {
//   // Implement the fulfillment logic here
//   console.log(`Fulfilling Checkout Session ${session_id}`);
//   // TODO: Retrieve the session and perform fulfillment (e.g., send order, update database)
// };

// const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     const buf = await buffer(req);
//     const sig = req.headers["stripe-signature"] as string;

//     let event: Stripe.Event;

//     try {
//       event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
//     } catch (err) {
//       if (err instanceof Error) {
//         console.error(`Webhook signature verification failed.`, err.message);
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//       } else {
//         console.error("Unknown error occurred during webhook signature verification.");
//         return res.status(400).send("Webhook Error: An unknown error occurred.");
//       }
//     }

//     // Handle the event types you're interested in
//     if (event.type === "checkout.session.completed" ||
//         event.type === "checkout.session.async_payment_succeeded") {
//       const session = event.data.object as Stripe.Checkout.Session;
//       // Trigger the fulfillment function
//       await fulfillCheckout(session.id);
//     }

//     // Handle other event types as needed

//     // Respond with a 200 status to acknowledge receipt of the event
//     res.status(200).json({ received: true });
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// };

// export default webhookHandler;