import React from "react";
import Button from '@mui/material/Button';
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

    const [checkoutP, setCheckOutP] = React.useState(false);
    const [checkoutR, setCheckOutR] = React.useState(false);
    const [checkoutS, setCheckOutS] = React.useState(false);

    const navigate = useNavigate();

    const handleRazorpay = () => {
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
        if (!checkoutP && !checkoutR && !checkoutS) {
            toast.info("Select One Payment Method");
        }

        if (checkoutP) {
            navigate(`/paymentdetails/paypal`);
        }
        if (checkoutR) {
            navigate(`/paymentdetails/razorpay`);
        }
        if (checkoutS) {
            navigate(`/paymentdetails/stripe`);
        }
    }

    return (
        <>
            <WrapperMain>
                <Header>
                    <h1>Payment Gateway</h1>
                </Header>
                <div style={{ margin: "0px 35px" }}>
                    <Wrapper>
                        <div className="Wrapper-text"><p>Choose a payment method. (Click one of the options below)</p></div>
                        <div className="Wrapper-img"><img src={payment} alt="pay" /></div>
                    </Wrapper>
                    <WrapperCard>
                        <div className="Wrapper-header">
                            <WrapperDiv onClick={handleRazorpay}>
                                <div className="Wrapper-img1"><img src={razorpay} alt="stripe" /></div>
                                <div className="Wrapper-img2"><img src={razorpay1} alt="stripe1" /></div>
                                {checkoutR && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                            </WrapperDiv>
                            <p>Pay with Razorpay</p>
                        </div>
                        <div className="Wrapper-header">
                            <WrapperDiv1 onClick={handleStripe}>
                                <div className="Wrapper-img1"><img src={stripe} alt="stripe" /></div>
                                <div className="Wrapper-img2"><img src={stripe1} alt="stripe1" /></div>
                                {checkoutS && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                            </WrapperDiv1>
                            <p>Pay with Stripe</p>
                        </div>
                        <div className="Wrapper-header">
                            <WrapperDiv2 onClick={handlePaypal}>
                                <div className="Wrapper-img1"><img src={paypal} alt="stripe" /></div>
                                <div className="Wrapper-img2"><img src={paypal1} alt="stripe1" /></div>
                                {checkoutP && (<div className="Wrapper-img3"><img src={tick} alt="true" /></div>)}
                            </WrapperDiv2>
                            <p>Pay with Paypal</p>
                        </div>
                    </WrapperCard>
                    <hr></hr>
                    <div className="Wrapper-footer">
                        <p>Click the button beside to be re-directed to Stripe Or Razorpay Or Paypal website to complete your trasaction.</p>
                        <Button variant="contained" style={{ display: "flex", alignSelf: "end" }} onClick={handleContinue}>Continue</Button >
                    </div>
                </div>
            </WrapperMain>
            {/* {checkoutP ? (<PayPal />) : checkoutR ? (<Razorpay />) : checkoutS ? (<Stripe />) : <Button variant = "contained" style = {{ display: "flex", margin: "auto" }} onClick={handlePayment}>Pay Now</Button >} */}
        </>
    )
}

export default Home