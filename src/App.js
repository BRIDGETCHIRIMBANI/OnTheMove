import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contacts/Contact";
import LearnMore from "./components/LearnMore/LearnMore"
import Currency from "./components/Currency/currency";
import "./index.css";

export default function App() {
  
  return (
    <div>
      <Navbar/>
    <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         {/* {/* <Route path="/home" element={<Country/>}/> */}
          <Route path="/learnmore" element={<LearnMore/>}/>
          <Route path="/currency" element={<Currency/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router> 

     <Footer/> 
    </div>
    
  );
}

