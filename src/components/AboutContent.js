import "./AboutContentStyles.css";
import AboutOne from "../assets/about1.jpg";
import AboutTwo from "../assets/about2.jpg";

import React from "react";

const AboutContent = () => {
  return (

    <div className="MainContent">        
        <div className="RightContent"> 
        <img className="About2" src={AboutTwo} alt="pic" />         
            <p>Hejsan svejsan</p>           
        </div>
        <div className="LeftContent">
        <img className="About1" src={AboutOne} alt="pic" />
            <p>Hejsan svejsan på dejsan</p>         
        </div>
    </div>
  );
};

export default AboutContent;