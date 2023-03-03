import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contacts/Contact";
import "./index.css";
import Currency from "./components/Currency/currency";

export default function App() {
  
  return (
    <div>
      <Navbar/>
    <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         {/* <Route path="/home" element={<Globe/>}/>
          <Route path="/contact" element={<Continent/>}/>
          <Route path="/contact" element={<Articles/>}/> */}
          <Route path="/currency" element={<Currency/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router> 

     <Footer/> 
    </div>
    
  );
}

