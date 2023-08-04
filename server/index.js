
import express from "express";
import * as paypal from "./paypal-api.js";
import cors from "cors";
import 'dotenv/config';
import stripe from "stripe";

const {PORT = 8000} = process.env;


const app = express();

app.use(cors())
app.use(express.json());

// create a new order
app.post("/create-paypal-order", async (req, res) => {
    try{
    const order = await paypal.createOrder(req.body);
    res.json(order);
    }catch(err){
        res.status(500).send(err.message);
    }
});

// capture payment & store order information or fullfill order
app.post("/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    try {
    const captureData = await paypal.capturePayment(orderID);
    // TODO: store payment information such as the transaction ID
    res.json(captureData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Stripe Payment

let stripeGateway = stripe(process.env.STRIPE_KEY_SECRET);

app.post("/stripe-checkout", async (req, res) => {
    try{
    const session = await stripeGateway.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["IN"] },
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.items.map(item => {
            return{
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name
                    },
                    unit_amount: (item.price) * 100
                },
                quantity: item.quantity
            }
        }),
        success_url: "http://localhost:3000/success",
    })
    res.json({url: session.url})
    }catch(e){
        res.status(500).json({error:e.message})
    }
});

app.listen(PORT, ()=> {
    console.log(`Server Listening on http://localhost:${PORT}/`);
})