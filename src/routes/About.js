import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
      <Navbar />      
      <AboutContent />
      <Modal />                    
      <Footer />     
    </div>
  );
};

export default About;
  

