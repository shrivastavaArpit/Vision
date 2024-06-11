// import react from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// My components
import NavbarCompo from "./components/Navbar";
import Adminpage from "./pages/Adminpage";
import Featurespage from "./pages/Featurespage";
import Pricingpage from "./pages/Pricingpage";
import FAQspage from "./pages/FAQspage";
import Aboutpage from "./pages/Aboutpage";
import Loginpage from "./pages/Loginpage";
// import Searchpage from "./pages/Searchpage";
import Bookingpage from "./pages/Bookingpage";
import Tourspage from "./pages/Tourspage";
import Policypage from "./pages/Policypage";
import TCpage from "./pages/TCpage";
import Subscribepage from "./pages/Subscribepage";
import Paymentpage from "./pages/Paymentpage";

import Home from './pages/Home';
import Footercompo from './components/Footer'
// import Features from './pages/Features'
// import Pricing from './components/Pricing';
// import FAQs from './components/FAQs';
// import About from './components/About';
// import Login from './components/Login';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarCompo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Adminpage category="Adminpage"/>} />
        <Route path='/policy' element={<Policypage category="Policypage"/>} />
        <Route path='/tc' element={<TCpage category="TCpage"/>} />
        <Route path='/subscibe' element={<Subscribepage category="Subscribepage"/>} />

        <Route path='/Features' element={<Featurespage category="Featurespage" />} />
        <Route path='/Pricing' element={<Pricingpage category="Pricingpage" />} />
        <Route path='/FAQs' element={<FAQspage category="FAQspage" />} />
        <Route path='/About' element={<Aboutpage category="Aboutpage" />} />
        <Route path='/Login' element={<Loginpage category="Loginpage" />} />
        {/* <Route path='/Search' element={<Searchpage category= "Searchpage" />} /> */}
        <Route path='/Booking' element={<Bookingpage category= "Bookingpage" />} />
        <Route path='/Tourspakage' element={<Tourspage category= "Tourspage" />} />
        <Route path='/Payment' element={<Paymentpage category= "Paymentpage" />} />

        {/* <Route path='/Pricing' element={<Pricing category="Pricing" />} />
        <Route path='/FAQs' element={<FAQs category="FAQs" />} />
        <Route path='/About' element={<About category="About"/>} />
        <Route path='/Login' element={<Login category="Login"/>} /> */}

      </Routes>
    </BrowserRouter>
    <Footercompo/>
    </>
  )
}
export default App
