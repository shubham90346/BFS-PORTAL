import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Api Data");
    localStorage.removeItem("orders");
    localStorage.removeItem("response");
    // localStorage.removeItem("Api Data");
    // localStorage.removeItem("Api Data");

    window.location.href = "/";
  }, []);
  return <></>;
};

export default Logout;
