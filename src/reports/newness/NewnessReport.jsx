import React, { useEffect, useState } from "react";
import TopNav from "../../components/All Headers/topNav/TopNav";
import LogoHeader from "../../components/All Headers/logoHeader/LogoHeader";
import Header from "../../components/All Headers/header/Header";
import HelpSection from "../../components/Footer/HelpSection";
import Footer from "../../components/Footer/Footer";
import FiltersInNewness from "../../components/All Headers/filters/FiltersInNewness";
import { useNavigate } from "react-router";
import MobileHeader from "../../components/All Headers/mobileHeader/MobileHeader";
import Page from '../sales_report/index.module.css'

const NewnessReport = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("Name");
    if (!userData) {
      navigate("/");
    }
  }, []);
  return (
    <div>
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-12">
          <TopNav />
        </div>
        <hr className="hrBgColor"></hr>
        <div className="col-12">
          <LogoHeader />
          <Header />
          <MobileHeader/>
          <FiltersInNewness />
        </div>
      </div>
    </div>
        <HelpSection />
        <div className="col-12">
          <Footer />
        </div>
    </div>
  );
};

export default NewnessReport;
