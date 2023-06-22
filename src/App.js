import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './component/Success';
import PaymentDetails from './component/PaymentDetails/PaymentDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/success" element={<Success/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
