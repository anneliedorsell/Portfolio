import "./FooterStyles.css";

import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
 
 const Footer = () => {
   return (
     <div className="footer">
         <div className="footer-container">
             <div className="left">
                 <div className="location">
                     <HiOutlineLocationMarker size={30} style={{color:"#fff", marginRight: "2rem"}} />
                     <div>
                         <p>Sweden</p>
                     </div>                   
                     <div className="phone">
                     <BsPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                     <p>070-00 00 00</p>
                     </div>
                     <div className="email">
                     <MdAlternateEmail size={20} style={{color:"#fff", marginRight: "2rem"}} />
                     <p>annelie.dorsell@gmail.com</p>
                     </div>
                 </div>
             </div>            
         </div>     
     </div>
   )
 }
 
 export default Footer;