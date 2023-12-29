import React from "react";
import { Link } from "react-router-dom";
import style from "../topNav/index.module.css";
import styles from "./index.module.css";
const LoginHeader = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <Link to="/dashboard" className="linkStyle">
                  <img src={"/assets/images/BFSG_logo.svg"} alt="img" />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <p className={`m-0 ${style.language} d-flex`}>
                  Need Help?&nbsp;
                  <img src={"/assets/images/dropDownArrow.svg"} alt="img" />
                </p>
                <p className={`m-0 ${style.language}`}>Sign up</p>
              </div>
            </div>
            <hr className={`${styles.hr} shadow-sm`}></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHeader;
