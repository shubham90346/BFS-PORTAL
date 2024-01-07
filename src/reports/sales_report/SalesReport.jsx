import React, { useEffect, useState } from "react";
import TopNav from "../../components/All Headers/topNav/TopNav";
import LogoHeader from "../../components/All Headers/logoHeader/LogoHeader";
import Header from "../../components/All Headers/header/Header";
import Filters from "../../components/All Headers/filters/Filters";
import Footer from "../../components/Footer/Footer";
import HelpSection from "../../components/Footer/HelpSection";
import useSalesReport from "../../api/useSalesReport";
import { useNavigate } from "react-router";

const SalesReport = () => {
  const apiCall = useSalesReport();
  const navigate = useNavigate();

  const [originalApiData, setOriginalApiData] = useState([]);
  const [salesReportData, setSalesReportData] = useState([]);
  const salesData = async () => {
    const result = await apiCall.salesReportData();
    setOriginalApiData(result.data.data);
    setSalesReportData(result.data.data);
  };
  // api call
  useEffect(() => {
    const userData = localStorage.getItem("Name");
    if (userData) {
      salesData();
    } else {
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
          <Filters
            salesReportData={salesReportData}
            manufacturers={[
              ...originalApiData.map((ele) => ele.ManufacturerName__c),
            ]}
          />
        </div>
      </div>
    </div>
        <div>
        <HelpSection />
        </div>
        <div className="col-12">
          <Footer />
        </div>
    </div>
  );
};

export default SalesReport;
