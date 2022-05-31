import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import AboutOne from "../assets/about1.jpg";
import AboutTwo from "../assets/about2.jpg";




const About = () => {
  return (
    <div>
      <Navbar /> 
      <AboutContent />          
      <Footer />
    </div>
  );
};

export default About;