import React from "react";
import { Link } from "react-router-dom";
import style from "../topNav/index.module.css";
import styles from "./index.module.css";
import { NeedHelp } from "../../../lib/svg";
const LoginHeader = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <Link to="/dashboard" className="">
                  <img src={"/assets/images/BFSG_logo.svg"} alt="img" />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-4">
              <p className={`m-0 ${style.language} ${style.text} flex`}>
                          <div className="dropdown d-flex justify-content-center align-items-center " role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Need Help?&nbsp; <NeedHelp/>
            {/* </a> */}
            <ul className="dropdown-menu">
              <li>
                <Link to="" className="dropdown-item text-start" >
                Order Status
                </Link>
              </li>
              <li>
                <Link to="t" className="dropdown-item text-start" >
                Management Cases
                </Link>
              </li>
              <li>
                <Link to="" className="dropdown-item  text-start"  >
                Marketing Support Issues
                </Link>
              </li>
            </ul>
          </div>
              {/* <img src={"/assets/images/dropDownArrow.svg"} alt="img" /> */}
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
