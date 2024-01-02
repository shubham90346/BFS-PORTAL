import React from "react";
import styles from "../All Headers/header/index.module.css";
import footerStyle from "./index.module.css";
import topNavStyle from "../All Headers/topNav/index.module.css";
const HelpSection = () => {
  return (
    <div className=" p-0 mt-5">
      <div className="row p-0">
        <div style={{ backgroundColor: "#F3E8E0" }} className="p-1 d-flex justify-content-center  align-items-center py-2 gap-2">
          <p className={`m-0 ${styles.text} ${footerStyle.textLarge}`}>Help us Improve</p>
          <p className={`m-0 ${topNavStyle.language}`}>Take a brief survey about today's visit</p>
          <p className={`m-0  ${topNavStyle.language} ${footerStyle.underline}`}>Begin Survey</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
