import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './component/Success';
import PaymentDetails from './component/PaymentDetails/PaymentDetails';
import Paypal from './component/Paypal/Paypal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentdetails/:id" element={<PaymentDetails />} />
          <Route path="/paypal/:amount" element={<Paypal />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
