import React from "react";
import styles from "../topNav/index.module.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../../context/GlobalContext";

const LogoHeader = () => {
  const { orderQuantity } = useGlobal();

  return (
    <>
      <div className={` ${styles.laptopMode}`}>
        <div className="d-flex justify-content-between align-items-center col-lg-4 col-xl-3">
          <p className={`m-0  ${styles.language}`}>
            <Link to="/my-retailers" className={`linkStyle`}>
              My Retailers
            </Link>
          </p>
          <p className={`m-0   ${styles.language}`}>
            <Link to="/new-arrivals" className={`linkStyle`}>
              New Arrivals
            </Link>
          </p>
          <p className={`m-0   ${styles.language}`}>
            <Link to="/brand" className={`linkStyle`}>
              Brands
            </Link>
          </p>
        </div>
        {/* image div */}
        <div className="d-flex justify-content-center align-items-center col-lg-4 col-xl-6">
          <Link to="/dashboard" className={`linkStyle`}>
            <img src={"/assets/images/BFSG_logo.svg"} alt="img" />
          </Link>
        </div>
        {/* my bag */}
        <div className="d-flex justify-content-between align-items-center col-lg-4 col-xl-3">
          <p className={`m-0  ${styles.language}`}>
            <Link to="/dashboard" className={`linkStyle`}>
              Dashboard
            </Link>
          </p>
          <p className={`m-0  ${styles.language} flex`}>
            Search...
            <img src={"/assets/images/searchIcon.svg"} alt="img" />
          </p>
          <p className={`m-0  ${styles.language}`}>
          <Link to="/my-bag" className={`linkStyle`}>
          My Bag ({orderQuantity??0})
            </Link>
           </p>
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
