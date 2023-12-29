import React, { useEffect } from "react";
import LoginHeader from "../components/All Headers/loginHeader/LoginHeader";
import LoginUI from "../components/loginUI/LoginUI";

const Login = () => {
  useEffect(() => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Api Data");
    // localStorage.removeItem("Account");
    // localStorage.removeItem("manufacturer");
    localStorage.removeItem("orders");
    localStorage.removeItem("response");
  });
  return (
    <>
      <LoginHeader />
      <LoginUI />
    </>
  );
};

export default Login;
