import React from 'react'

function Razorpay() {

    const initPayment = () => {

        var options = {
            key: "rzp_test_eRccywYEdfPPxc",
            amount: 10 * 100,
            // order_id: orderId,
            currency: "INR",
            name: "NDT and Quality",
            description: "for testing purpose",
            image: "",
            handler: async function (response) {
                alert(response.response.razorpay_payment_id);
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

  return (
     <button onClick={initPayment}>Pay</button>
  )
}

export default Razorpay