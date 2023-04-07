import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contacts/Contact";
import LearnMore from "./components/LearnMore/LearnMore"
import Country from "./components/Country/Country";
import AboutUs from "./components/AboutUs/AboutUs";
import Map from "./components/Map/Map";


export  default function App() {
  
  return (
    <>
    <div>
      <Navbar/>
    <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         <Route path="/country" element={<Country/>}/>
          <Route path="/learnmore" element={<LearnMore/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/map" element = {<Map/>}/>
        </Routes>
    </Router> 
     <Footer/> 
     </div>
     <div>

     </div>
     </>
  );

  }

