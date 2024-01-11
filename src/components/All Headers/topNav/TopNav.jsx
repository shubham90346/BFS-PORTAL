import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { NeedHelp } from "../../../lib/svg";
// import Redirect from "../../Redirect";
const TopNav = () => {
  const userName = localStorage.getItem("Name");
  // console.log("userDetails", userDetails);
  return (
    <>
      {/* {userDetails?.status === 200 ? ( */}
      <>
      <div className={styles.NeedNone}>
        <div className={`${styles.topNav} d-flex justify-content-between  align-items-center gap-2 `}>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img src={"/assets/images/americanFlag.svg"} alt="img" />
            <div className={styles.vr}></div>
            <p className={`m-0 ${styles.language}`}>EN</p>
            <p className={`m-0 ${styles.language} ${styles.text} flex`}>
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
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className={`m-0 ${styles.welcomeText}`}>
              Welcome,
              <span className={`m-0 ${styles.nameText}`}>
                {userName ?? "User"}
              </span>
            </p>
            <div className={styles.vr}></div>
            <p className={`m-0 ${styles.nameText}`}>
              <Link to="/order-list" className="linkStyle">
                My Orders{" "}
              </Link>
            </p>
            <div className={styles.vr}></div>
            <p className={`m-0 ${styles.nameText}`}>
              <Link to="/logout" className="linkStyle">
                Logout
              </Link>
            </p>
          </div>
        </div>
        </div>
      </>
      {/* ) : (
        <>
          <Redirect href="https://b2b-v3.vercel.app/#/" />
        </>
      )} */}
    </>
  );
};

export default TopNav;
