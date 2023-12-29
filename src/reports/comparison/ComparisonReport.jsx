import React, { useEffect, useState } from "react";
import TopNav from "../../components/All Headers/topNav/TopNav";
import LogoHeader from "../../components/All Headers/logoHeader/LogoHeader";
import Header from "../../components/All Headers/header/Header";
import HelpSection from "../../components/Footer/HelpSection";
import Footer from "../../components/Footer/Footer";
// import FiltersInNewness from "../../components/All Headers/filters/FiltersInNewness";
// import Filters from "../../components/All Headers/filters/Filters";
// import useSalesReport from "../../api/useSalesReport";
import FiltersInComparison from "../../components/All Headers/filters/FiltersInComparison";

const ComparisonReport = () => {
  // // for sales report
  // const apiCall = useSalesReport();
  // const [originalApiData, setOriginalApiData] = useState([]);
  // const [salesReportData, setSalesReportData] = useState([]);
  // const salesData = async () => {
  //   const result = await apiCall.salesReportData();
  //   setOriginalApiData(result.data.data);
  //   setSalesReportData(result.data.data);
  // };
  // // api call
  // useEffect(() => {
  //   salesData();
  // }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-10">
          <TopNav />
        </div>
        <hr className="hrBgColor"></hr>
        <div className="col-10">
          <LogoHeader />
          <Header />
          <FiltersInComparison />
          {/* <FiltersInNewness /> */}
          {/* <Filters salesReportData={salesReportData} manufacturers={[...originalApiData.map((ele) => ele.ManufacturerName__c)]} /> */}
        </div>
        <HelpSection />
        <div className="col-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ComparisonReport;
