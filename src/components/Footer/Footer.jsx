import React from "react";
import footerStyle from "./index.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-between  align-items-start gap-2">
        {/* left part */}
        <div className="mt-3">
          <p className={`m-0 ${footerStyle.heading}`}>BFSG</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>
            {/* <Link to="/about-us" className="linkStyle"> */}
              About Us
            {/* </Link> */}
          </p>
          <p className={`m-0 ${footerStyle.subheadings}`}>
            {/* <Link to="/customer-care" className="linkStyle"> */}
              Customer Care
            {/* </Link> */}
          </p>
          <p className={`m-0 ${footerStyle.subheadings}`}>Careers</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>
          {/* <Link to="/wholesale-inquiry" className="linkStyle"> */}
          Wholesale Enquires
            {/* </Link> */}
          
            </p>
          <p className={`m-0 ${footerStyle.subheadings}`}>What our retailers are saying</p>
        </div>
        {/* center part */}
        <div className="mt-3">
          <p className={`m-0 ${footerStyle.heading}`}>Newsletter</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>Be the first to know about new arrivals and brand updates by</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>submitting your email. You can opt out at any time.</p>
          {/* <p className={`m-0 ${footerStyle.subheadings} text-decoration-underline`}>privacy policy</p> */}
          <div className={`p-2 ps-3 mt-3 ${footerStyle.box}`}>
            <p className={`m-0 ${footerStyle.boxText}`}>
              <input type="text" placeholder="sign up for our newsletters." className={`${footerStyle.boxText} form-control border-0 m-0`} style={{outline:"none"}} />
              </p>
          </div>
        </div>
        {/* right part */}
        <div className="mt-3">
          <p className={`m-0 ${footerStyle.heading}`}>Join US</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>Instagram</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>Linkedin</p>
          <p className={`m-0 ${footerStyle.subheadings}`}>Facebook</p>
        </div>
      </div>
      <div className={`mt-3 ${footerStyle.copyright}`}>2023 © Beauty Fashion Sales Group, Inc. All rights reserved.</div>
    </>
  );
};

export default Footer;
