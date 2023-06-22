import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import PayPal from "../Paypal/Paypal";
import Razorpay from "../Razorpay/Razorpay";
import Stripe from "../Stripe/Stripe";
import { useNavigate } from "react-router-dom";
import { Header, Wrapper, WrapperMain, WrapperCard, WrapperDiv, WrapperDiv1, WrapperDiv2 } from "./Home.styles";
import payment from "../../assest/payment.png";
import stripe from "../../assest/stripe.png";
import razorpay1 from "../../assest/razorpay1.png";
import stripe1 from "../../assest/stripe1.png";
import paypal1 from "../../assest/paypal1.png";
import paypal from "../../assest/paypal.png";
import razorpay from "../../assest/razorpay.png";
import tick from "../../assest/tick.png";
import { toast } from "react-toastify";

function Home() {

    const [checkRazorpay, setCheckedRazorpay] = React.useState(false);
    const [checkStripe, setCheckedStripe] = React.useState(false);
    const [checkPaypal, setCheckedPaypal] = React.useState(false);
    const [checkoutP, setCheckOutP] = React.useState(false);
    const [checkoutR, setCheckOutR] = React.useState(false);
    const [checkoutS, setCheckOutS] = React.useState(false);

    const navigate = useNavigate();

    const handleRazorpay = ()=> {
        setCheckOutR(true);
        setCheckOutP(false);
        setCheckOutS(false)
    }

    const handleStripe = () => {
        setCheckOutS(true);
        setCheckOutP(false);
        setCheckOutR(false);
    }

    const handlePaypal = () => {
        setCheckOutP(true);
        setCheckOutR(false);
        setCheckOutS(false)
    }

    const handleContinue = () => {
        if (checkoutP || checkoutR || checkoutS) {
            console.log("hello76565")
            navigate("/paymentdetails");
        }
        else {
            toast.error("Please Select Payment mode");
        }
    }

    return (
        <>
        <WrapperMain>
            <Header>
                <h1>Payment Gateway</h1>
            </Header>
            <Wrapper>
                <div className="Wrapper-text"><p>Choose a payment method. (Click one of the options below)</p></div>
                <div className="Wrapper-img"><img src={payment} alt="pay" /></div>
            </Wrapper>
            <WrapperCard>
                <WrapperDiv onClick={handleRazorpay}> 
                    <div className="Wrapper-img1"><img src={razorpay} alt="stripe" /></div>
                    <div className="Wrapper-img2"><img src={razorpay1} alt="stripe1"/></div>
                    {checkoutR && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                </WrapperDiv>
                <WrapperDiv1 onClick={handleStripe}>
                    <div className="Wrapper-img1"><img src={stripe} alt="stripe" /></div>
                    <div className="Wrapper-img2"><img src={stripe1} alt="stripe1" /></div>
                    {checkoutS && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                </WrapperDiv1>
                <WrapperDiv2 onClick={handlePaypal}>
                    <div className="Wrapper-img1"><img src={paypal} alt="stripe" /></div>
                    <div className="Wrapper-img2"><img src={paypal1} alt="stripe1" /></div>
                    {checkoutP && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                </WrapperDiv2>
            </WrapperCard>
            <div className='main' style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "space-around"}}>
                    <p>Pay with Razorpay</p>
                    <p>Pay with Stripe</p>
                    <p>Pay with Paypal</p>
            </div>
                <hr></hr>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                    <p>jhgdfshjdfvsdjfvs</p>
                    <Button variant="contained" style={{ display: "flex", alignSelf: "end" }} onClick={handleContinue}>Continue</Button >
                </div>
            </WrapperMain>
            {/* {checkoutP ? (<PayPal />) : checkoutR ? (<Razorpay />) : checkoutS ? (<Stripe />) : <Button variant = "contained" style = {{ display: "flex", margin: "auto" }} onClick={handlePayment}>Pay Now</Button >} */}
        </>
    )
}

export default Home