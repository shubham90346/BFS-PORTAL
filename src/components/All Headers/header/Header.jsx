import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <div id={`${styles.main}`} className="d-flex justify-content-between  align-items-center my-2 gap-1">
      <p className={`m-0 ${styles.text}`}>
        <Link to="/top-products" className="linkStyle">
          Top Products
        </Link>
      </p>
      <p className={`m-0  ${styles.text}`}>
        <Link to="/sales-report" className="linkStyle">
          Sales Report
        </Link>
      </p>
      <p className={`m-0  ${styles.text}`}>
        <Link to="/newness-report" className="linkStyle">
          Newness Report
        </Link>
      </p>
      <p className={`m-0  ${styles.text}`}>
        <Link to="/marketing-calendar" className="linkStyle">
          Marketing Calendar
        </Link>
      </p>
      <p className={`m-0  ${styles.text}`}>
        <Link to="/education-center" className="linkStyle">
          Education Center
        </Link>
      </p>
      <p className={`m-0  ${styles.text}`}>
        <Link to="/customer-support" className="linkStyle">
          Customer Support
        </Link>
      </p>
    </div>
  );
};

export default Header;
