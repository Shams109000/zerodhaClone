import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Pricing from './landing_page/pricing/Pricing';
import Page404 from './landing_page/Page404';
import Signup from './landing_page/auth/Signup';
import Login from './landing_page/auth/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
    <Route path="/product" element={<ProductPage></ProductPage>}></Route>
    <Route path="/pricing" element={<Pricing></Pricing>}></Route>
    <Route path="/support" element={<SupportPage></SupportPage>}></Route>
    <Route path="/*" element={<Page404></Page404>}></Route>
   </Routes>
   <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
