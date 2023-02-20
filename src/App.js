import React from "react";
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contacts/Contact";

export default function App() {
  return (
    <div>
      <Navbar/>
    {/* <Router> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Globe/>}/>
          <Route path="/contact" element={<Continent/>}/>
          <Route path="/contact" element={<CurrencyConverter/>}/>
          <Route path="/contact" element={<Articles/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router> */}

     <Footer/> 
    </div>
    
  );
}

