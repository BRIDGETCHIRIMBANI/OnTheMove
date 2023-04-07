import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contacts/Contact";
import LearnMore from "./components/LearnMore/LearnMore"
import "./index.css";
import Country from "./components/Country/Country";
import About from "./components/AboutUs/about";
import Map from "./components/Map/Map";
import Poster from "./components/Country/Poster";

export default function App() {
  
  return (
    <div>
      <Navbar/>
    <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         <Route path="/country" element={<Country/>}/>
          <Route path="/learnmore" element={<LearnMore/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/map" element = {<Map/>}/>
          <Route path="/poster" element = {<Poster/>}/>
        </Routes>
    </Router> 
     <Footer/> 
    </div>
    
  );
}

