import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Slider from './Components/Slider';
import Ourcorporate from './Components/About/Ourcorporate';
import Form from './Components/Enquirey/Form';
import History from './Components/About/History'
import Partner from './Components/About/Partner'
import About from './Pages/About'
import Body from './Components/Body/Body';
import Enquiry from './Components/Enquirey/Form';
// import Products from './Pages/ProductItem'
import Contact_us from './Components/Support/Contact_us';
import Policy from './Components/About/Policy';
import AfterSalesService from './Components/Support/AfterSalesService';
import AMC from './Components/Support/AMC';
import ChangeParts from './Components/Support/ChangeParts';
import SpareParts from './Components/Support/SpareParts';
import Training from './Components/Support/Training'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
// import Dashboard from './Components/Admin/Dashboard';
import ResetPassword from './Components/Login/ResetPassword';
import EnquiryForm from './Components/Enquirey/EnquiryForm';
// import Products from './Pages/Products';
import ProductItem from './Pages/ProductItem';
import Products from './Pages/Products';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ForgetPassword from './Components/Login/ForgetPassword';
import OTPSubmitForm from './Components/Login/OTPSubmitForm';
import PageNotFound from './Pages/PageNotFound';


function App() {
  const [emailValue, setEmailValue] = useState('');
  const EMAIL_STORAGE_KEY = 'savedEmail';

  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Body />} />
          <Route path='/' element={<Body />} />
          <Route path='/About' element={<About />} />
          <Route path='/ourCorporate' element={<Ourcorporate />} />
          <Route path='/Policy' element={<Policy/>}/>
          {/* <Route path='/Form' element={<Form />} /> */}
          <Route path='/History' element={<History />} />
          <Route path='/Partner' element={<Partner />} />
          {/* <Route path='/Enquiry' element={<Enquiry/>}/> */}
          <Route path='/ProductItem/:id' element={<ProductItem />}/>
          <Route path='/Contact Us' element={<Contact_us/>}/>
          <Route path='/AfterSalesService' element={<AfterSalesService/>}/>
          <Route path='/Amc' element={<AMC/>}/>
          <Route path='/ChangeParts' element={<ChangeParts/>}/>
          <Route path='/SpareParts' element={<SpareParts/>}/>
          <Route path='/Training' element={<Training/>}/>
          {/* <Route path='/AdminPanel' element={<AdminPanel/>}/> */}
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Signup'element={<Signup/>}/>
          {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
          <Route path='/ResetPassword' element={<ResetPassword emailValue ={emailValue} emailKey ={EMAIL_STORAGE_KEY}/>}/>
          <Route path='/EnquiryForm' element={<EnquiryForm/>}/>
          {/* <Route Path='/Products' element={<Products/>}/> */}
          <Route path='/Products' element={<Products/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/> 
          <Route path='/ForgetPassword' element={<ForgetPassword setEmailValue={setEmailValue} emailKey ={EMAIL_STORAGE_KEY}/>}/>
          <Route path='/validate-otp' element={<OTPSubmitForm/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes> 
          
      </BrowserRouter>
    </>
  );
}

export default App;
