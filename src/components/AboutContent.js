import "./AboutContentStyles.css";
import AboutOne from "../assets/about1.jpg";
import AboutTwo from "../assets/about2.jpg";
import Modal from "../components/Modal";

import React, { useState } from "react";

const AboutContent = () => {
  const [show, setShow] = useState(false);
  return (
  <div className="AboutButton">
    <div className="MainContent">     
      <button className="btn" onClick={() => setShow(true)}>Book a course!</button>
      <Modal onClose={() => setShow(false)} show={show} />
      </div>       
        <div className="RightContent"> 
        <img className="About2" src={AboutTwo} alt="pic" />         
            <p>Värdegrundsarbete</p>           
        </div>
        <div className="LeftContent">
        <img className="About1" src={AboutOne} alt="pic" />
            <p>Växtkraft</p>         
        </div>
    </div>
  );
};

export default AboutContent;