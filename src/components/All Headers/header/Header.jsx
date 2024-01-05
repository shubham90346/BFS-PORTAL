import React, { useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <div id={`${styles.main}`} className="d-flex justify-content-between  align-items-center my-2 gap-1">
      <p className={`m-0 ${styles.text}`}>
        <Link to="/top-products" className="linkStyle">
          Top Products
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
      {/* <p className={`m-0  ${styles.text}`}>
        <select defaultValue="">
          <option value=""  disabled > REPORTS</option>
          <option value="1" className={`m-0  ${styles.text}`}> Sales Report</option>
          <option value="2" className={`m-0  ${styles.text}`}> Newness Report</option>
          <option value="3" className={`m-0  ${styles.text}`}> Comparison Report</option>
        </select>
        </p> */}
      <p className={`m-0  ${styles.text}`}>
        <Link to="" className="linkStyle">
          <div class="dropdown dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {path === "/sales-report" ? "Sales Report" : null || path === "/newness-report" ? "newness Report" : null || path === "/comparison-report" ? "comparison Report" : null || "Reports"}
            <ul class="dropdown-menu">
              <li>
                <Link
                  to="/sales-report"
                  className="dropdown-item text-start"
                  onClick={() => {
                    // setReportName("Sales report");
                    navigate("/sales-report");
                    // console.log(reportName);
                  }}
                >
                  Sales Report
                </Link>
              </li>
              <li>
                <Link
                  to="/newness-report"
                  className="dropdown-item text-start"
                  onClick={() => {
                    // setReportName("newness report");
                    navigate("/newness-report");
                    // console.log(reportName);
                  }}
                >
                  Newness Report
                </Link>
              </li>
              <li>
                <Link
                  to="/comparison-report"
                  className="dropdown-item  text-start"
                  onClick={() => {
                    // setReportName("Comparison report");
                    navigate("/comparison-report");
                    // console.log(reportName);
                  }}
                >
                  Comparison Report
                </Link>
              </li>
            </ul>
          </div>
        </Link>
      </p>
    </div>
  );
};

export default Header;
