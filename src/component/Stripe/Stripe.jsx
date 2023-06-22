import React from 'react'

function Stripe() {

    const checkout = ()=> {
        
        fetch('http://localhost:8000/stripe-checkout', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
               items: [{
                    id:1,
                    quantity: 1,
                    price: 100,
                    name: "NiDhin"
               }]
            })
        
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({url}) => {
                window.location = url;
        }).catch(e => {
            console.log(e.error);
        })
    }

  return (
      <button onClick={checkout}>Pay</button>
  )
}

export default Stripe