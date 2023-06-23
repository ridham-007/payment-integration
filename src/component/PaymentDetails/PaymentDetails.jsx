import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ModelHeader, BottomLine, CountryWrapper, PaymentWrapper } from "./PaymentDetails.styles";
import { toast } from "react-toastify";

function PaymentDetails() {

    const { id } = useParams();

    const countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

    const [amount, setAmount] = useState('');
    const [country, setCountry] = useState('');

    const navigate = useNavigate();

    const initPaymentRazorpay = () => {

        var options = {
            key: "rzp_test_eRccywYEdfPPxc",
            amount: amount * 100,
            // order_id: orderId,
            currency: "INR",
            name: "NDT and Quality",
            description: "for testing purpose",
            image: "",
            handler: async function (response) {
                if (response.razorpay_payment_id) {
                    toast.success("Your Payment made Successfully.")
                }
                else {
                    toast.error("Something Went Wrong.")
                }
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

    const initPaymentStripe = () => {

        fetch('http://localhost:8000/stripe-checkout', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [{
                    id: 1,
                    quantity: 1,
                    price: amount,
                    name: "NiDhin"
                }]
            })

        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url;
        }).catch(e => {
            toast.error(e.error);
        })
    }

    const handleSubmit = () => {

        if (amount === "" || country === "") {
            toast.info("Pleases Fill all value");
        }

        if (id === "razorpay") {
            initPaymentRazorpay()
        }

        if (id === "stripe") {
            initPaymentStripe()
        }

        if (id === "paypal") {
            navigate(`/paypal/${amount}`);
        }

    }

    const handleBack = () => {
        navigate("/")
    }

    return (
        <PaymentWrapper>
            <ModelHeader>
                <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                >
                    Payment Details
                </Typography>
            </ModelHeader>
            <BottomLine />
            <div className='text-filed'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        sx={{ mt: 2 }}
                        style={{ color: "#615D77", fontWeight: "600", fontSize: "14px" }}
                    >
                        Amount
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="title"
                        autoFocus
                        size="small"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        sx={{ width: "223px" }}
                    />
                </div>
                <CountryWrapper>
                    <Typography
                        variant="h6"
                        align="left"
                        style={{ color: "#615D77", fontWeight: "600", fontSize: "14px" }}
                    >
                        Country
                    </Typography>
                    <Select
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        displayEmpty
                        fullWidth

                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ height: "40px", width: "223px", marginTop: "16px" }}
                    >
                        <MenuItem disabled value="">
                            Select Country
                        </MenuItem>
                        {countries.map((country, index) => {
                            return (
                                <MenuItem key={index} value={country} selected>{country}</MenuItem>
                            )
                        })}
                    </Select>
                </CountryWrapper>
            </div>
            <div className='button'>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ alignSelf: "center", marginTop: "50px" }}
                    onClick={handleSubmit}
                    sx={{ width: "223px" }}
                >
                    Pay Now
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ alignSelf: "center", marginTop: "50px" }}
                    onClick={handleBack}
                    sx={{ width: "223px" }}
                >
                    Back
                </Button>
            </div>
        </PaymentWrapper>
    );
}

export default PaymentDetails