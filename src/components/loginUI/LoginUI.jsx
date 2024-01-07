import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Loading from "../Loading";
import useLogin from "../../api/useLogin";
import { useNavigate } from "react-router-dom";
import ModalPage from "../Modal UI";
import { useAuth } from "../../context/UserContext";

const LoginUI = () => {
  const api = useLogin();
  const navigate = useNavigate();
  const { setUserValue } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const onInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearInput = () => {
    // console.log(document.getElementById("form-input"));
    // document.getElementById("form-input").reset();
    setLoginData({
      email: null,
      password: null,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiData = await api.mutateLogin(loginData.email, loginData.password);
    setLoading(false);
    if (apiData?.status === 200) {
      localStorage.setItem("Name", apiData?.data?.Name);
      localStorage.setItem("Api Data", JSON.stringify(apiData));
      const fetched = localStorage.getItem("Api Data");
      setUserValue(JSON.parse(fetched));
      navigate("/dashboard");
    } else if (apiData?.status === 400) {
      clearInput();
      setModalOpen(true);
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {loading ? (
        <ModalPage
          open
          content={
            <div>
              <Loading />
              Loading ...
            </div>
          }
          onClose={() => setLoading(false)}
        />
      ) : null}
      <div className="container-fluid d-flex flex-column justify-content-center " style={{ minHeight: "70vh" }}>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-5">
            <p className={`mb-3 pt-2 ${styles.access} col-12`}>Access My Account</p>
            <form id="form-input">
              {/* email */}
              <div className="col-12 mb-5 d-flex justify-content-center align-items-center">
                <div className="col-xxl-1 col-2 d-flex justify-content-start align-items-center">
                  <img src={"/assets/images/at.svg"} alt="img" />
                </div>
                <div className="col-10 col-xxl-11 d-flex align-items-center ">
                  <div className="d-flex flex-column align-items-start col-12">
                    <p className={`m-0 ${styles.access}`}>Email</p>
                    <input type="email" className="border-0 h-50 border-bottom" style={{ width: "100%", outline: "none" }} name="email" onChange={onInputChange} onPaste={onInputChange} />
                  </div>
                </div>
              </div>
              {/* password */}
              <div className="col-12 mb-4 d-flex justify-content-center align-items-center">
                <div className="col-2 col-xxl-1 d-flex justify-content-start align-items-center">
                  <img src={"/assets/images/lock.svg"} alt="img" />
                </div>
                <div className="col-10 col-xxl-11 d-flex align-items-center ">
                  <div className="d-flex flex-column align-items-start col-12">
                    <p className={`m-0 ${styles.access}`}>Password</p>
                    <input type="password" className="border-0 h-50 border-bottom" style={{ width: "100%", outline: "none" }} name="password" onChange={onInputChange} onPaste={onInputChange} />
                  </div>
                </div>
              </div>
              {/* remember me */}
              <div className="col-12 mb-4 d-flex justify-content-between align-items-center">
                <div className=" d-flex justify-content-start align-items-center gap-2">
                  <input type="checkbox" name="remember" id="remember" style={{ height: "14px", width: "14px" }} />
                  <p className={`${styles.remember} m-0`}>Remember me</p>
                </div>
                <div className="d-flex align-items-center justify-content-center ">
                  <p className={`${styles.remember} m-0`} style={{ textDecoration: "underline" }}>
                    Forgot your password?
                  </p>
                </div>
              </div>
              {/* login button */}
              <div className="col-12">
                <button type="submit" className={`text-white py-2 w-100 ${styles.loginBtn}`} onClick={login}>
                  Login
                </button>
              </div>
            </form>

            {/* Don’t have an account */}
            <div className="mt-3  d-flex align-items-center justify-content-center">
              <p className={`${styles.remember} m-0`} style={{ textDecoration: "underline" }}>
                Don’t have an account ? <span style={{ fontWeight: "700px" }}>Sign up. </span>
              </p>
            </div>
          </div>
        </div>
        {/* terms of service */}
        <div className="row d-flex justify-content-around align-items-center">
          <div className="mt-4  d-flex align-items-center justify-content-center col-8">
            <p className={`${styles.termsLine} m-0`}>
              By signing in or clicking "Login", you agree to our <span className={`${styles.privacy}`}>Terms of Service</span> Please also read our{" "}
              <span className={`${styles.privacy}`}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      {modalOpen ? (
        <ModalPage
          open={modalOpen}
          content={
            <>
              <h2>Warning</h2>
              <p className="mt-3">Invalid Credentials!</p>
              <div className="d-flex justify-content-center">
                <button className={styles.closeButton} onClick={() => setModalOpen(false)}>
                  OK
                </button>

                {/* <button className={Styles.modalClose} onClick={onClose}>
                CANCEL
              </button> */}
              </div>
            </>
          }
          onClose={() => setModalOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default LoginUI;
