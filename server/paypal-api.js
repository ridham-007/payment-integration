import fetch from "node-fetch";
import 'dotenv/config';

const { CLIENT_ID, APP_SECRET } = process.env;
const baseURL = {sandbox: "https://api-m.sandbox.paypal.com"}

// use the orders api to create an order
export async function createOrder(data1) {
    
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: data1.product.cost,
                    },
                },
            ],
        }),
    });

    const data = await response.json();
    return data;    
}

// use the orders api to capture payment for an order
export async function capturePayment(orderId) {
    const accessToken = await generateAccessToken();
    const url = `${baseURL.sandbox}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
    
    const data = await response.json();
    return data;
}

// generate an access token using client id and app secret
export async function generateAccessToken() {
    const auth = Buffer.from(CLIENT_ID+ ":" + APP_SECRET).toString("base64")
    const response = await fetch(`${baseURL.sandbox}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const data = await response.json();
    return data.access_token;
}
