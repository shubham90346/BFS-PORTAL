import React, { useEffect } from "react";
import TopNav from "../components/All Headers/topNav/TopNav";
import LogoHeader from "../components/All Headers/logoHeader/LogoHeader";
import HelpSection from "../components/Footer/HelpSection";
import Header from "../components/All Headers/header/Header";
import Footer from "../components/Footer/Footer";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Name")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="container  p-0">
        <div className="row m-0 d-flex flex-column justify-content-around align-items-center">
          {/* TopNav */}
          <div className="col-12 p-0">
            <TopNav />
          </div>
          <hr className="hrBgColor"></hr>
          {/* all headers */}
          <div className="col-12 p-0">
            <LogoHeader />
            <Header />
          </div>
          {/* dashboard */}
          <div className="col-12 p-0">
            <Dashboard />
          </div>
      </div>
          {/* footer */}
          
        </div>
            <HelpSection />

            <div className="container">
            <Footer />
          </div>
    </>
  );
};

export default DashboardPage;
