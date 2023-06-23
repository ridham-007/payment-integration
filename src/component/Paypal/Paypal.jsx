import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPal() {

    const { amount } = useParams();
    const navigate = useNavigate();

    const serverUrl = "http://localhost:8000";

    const initialOptions = {
        clientId: "AXWg6tUpt1TSj6FsndkLI8CfYLiIwvr5XtVjq1Fb0fMFfJC0AuLHOmyPqPgBV-s268Yz42hX2eG2XyYJ",
        currency: "USD",
        intent: "capture",
    };

    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch(`${serverUrl}/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                product: {
                    description: "",
                    cost: String(amount)
                }
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        // Order is captured on the server and the response is returned to the browser
        return fetch(`${serverUrl}/capture-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            if (data.status === "COMPLETED") {
                navigate("/");
            }
        })
    };


    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)} />
        </PayPalScriptProvider>
    )
}