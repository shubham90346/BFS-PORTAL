import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
const MobileHeader = () => {
  return (
    <div className={`${styles.mobileHeader}`}>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center col-4">
          <div className="dropdown">
            <div className={`dropdown-toggle ${styles["dropdown-toggle"]}`} type="button" data-bs-toggle="dropdown">
              <img src={"/assets/images/menuBar.svg"} alt="img" />
            </div>
            <ul className="dropdown-menu" style={{ minWidth: "max-content" }}>
              <li>
                <Link to="/top-products" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Top Products
                </Link>
              </li>

              <li>
                <Link to="/sales-report" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Sales Report
                </Link>
              </li>
              <li>
                <Link to="/newness-report" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Newness Report
                </Link>
              </li>
              <li>
                <Link to="/marketing-calendar" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Marketing Calendar
                </Link>
              </li>
              <li>
                <Link to="/education-center" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Education Center
                </Link>
              </li>
              <li>
                <Link to="/customer-support" className={`p-1 px-2 linkStyle ${styles.text}`}>
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/dashboard" className={`linkStyle`}>
              <img src={"/assets/images/b2bMobile.svg"} alt="img" />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center col-6">
          <p className={`m-0 pt-2 ${styles.language}`} style={{minWidth:"max-content"}}>
            Search...
            <img src={"/assets/images/searchIcon.svg"} alt="img" />
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/dashboard" className={`linkStyle`}>
              <img src={"/assets/images/home.svg"} alt="img" />
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/dashboard" className={`linkStyle`}>
              <img src={"/assets/images/myBag.svg"} alt="img" />
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/dashboard" className={`linkStyle`}>
              <img src={"/assets/images/profile.svg"} alt="img" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
          <p className={`m-0 pt-2 ${styles.myRetailer}`}>
            <Link to="/my-retailers" className={`${styles.myRetailer}`}>
              My Retailers
            </Link>
          </p>
          <p className={`m-0  pt-2 ${styles.myRetailer}`}>
            <Link to="/new-arrivals" className={`${styles.myRetailer}`}>
              New Arrivals
            </Link>
          </p>
          <p className={`m-0  pt-2 ${styles.myRetailer}`}>
            <Link to="/brand" className={`${styles.myRetailer}`}>
              Brands
            </Link>
          </p>
        </div>
    </div>
  );
};

export default MobileHeader;
