import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import  { Link } from "react-router-dom";

const HeroImg = () => {
  return ( 
  <div className="hero">
      <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>Artist and illustrator.</h1>
      <div>
          <Link to="/about" className="btn">about</Link>
          </div>
      </div>
    </div>
          
    );
};

export default HeroImg;