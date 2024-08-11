import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20", // Replace with the latest API version
});

const fulfillCheckout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { session_id } = req.body;

    try {
      console.log(`Fulfilling Checkout Session ${session_id}`);

      // Retrieve the Checkout Session from the API with line_items expanded
      const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items"],
      });

      // Check the Checkout Session's payment_status property to determine if fulfillment should be performed
      if (checkoutSession.payment_status !== "unpaid") {
        // TODO: Perform fulfillment of the line items
        console.log("Payment status is not unpaid. Proceeding with fulfillment.");

        // Example: Fulfillment logic (e.g., update database, send confirmation email)
        // fulfillOrder(checkoutSession.line_items);

        // TODO: Record/save fulfillment status for this Checkout Session
        console.log("Fulfillment completed for session", session_id);
      } else {
        console.log("Payment status is unpaid. Fulfillment will not proceed.");
      }

      res.status(200).json({ received: true });
    } catch (err) {
      console.error("Error fulfilling checkout session:", err);
      res.status(500).json({ error: "Failed to fulfill checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default fulfillCheckout;
