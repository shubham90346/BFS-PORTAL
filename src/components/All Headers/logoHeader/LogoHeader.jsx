import React from "react";
import styles from "../topNav/index.module.css";
import { Link } from "react-router-dom";
import { useBag } from "../../../context/BagContext";

const LogoHeader = () => {
  const { orderQuantity } = useBag();

  return (
    <>
    <div className={styles.laptopModeSticky}>
      <div className={` ${styles.laptopMode}`}>
        <div className={styles.lapSetting}>
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
        <div className={styles.lapSetting}>
          <Link to="/dashboard" className={`linkStyle`}>
            <img src={"/assets/images/BFSG_logo.svg"} alt="img" />
          </Link>
        </div>
        {/* my bag */}
        <div className={styles.lapSetting}>
          <p className={`m-0  ${styles.language}`}>
            <Link to="/dashboard" className={`linkStyle`}>
              Dashboard
            </Link>
          </p>
          <p className={`m-0 w-[100px]  ${styles.language} flex`}>
          <a href="#search" data-rr-ui-event-key="#search" class=" pr-0 nav-link active"><div class="search-container"><input class="search expandright" id="searchright" type="search" name="" placeholder="Search..."/><label class="button searchbutton" for="searchright"><span class="searchCode">Search...</span> <span class="mglass">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
            </span> </label></div></a>
            {/* <img src={"/assets/images/searchIcon.svg"} alt="img" /> */}
          </p>
          <p className={`m-0  ${styles.language}`}>
            <Link to="/my-bag" className={`linkStyle`}>
              My Bag ({orderQuantity ?? 0})
            </Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default LogoHeader;
