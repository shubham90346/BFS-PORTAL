import React, { useState } from "react";
import LogoHeader from "../components/All Headers/logoHeader/LogoHeader";
import TopNav from "../components/All Headers/topNav/TopNav";
import Header from "../components/All Headers/header/Header";
import HelpSection from "../components/Footer/HelpSection";
import Footer from "../components/Footer/Footer";
import OrderList from "../components/OrderList/OrderList";
import MobileHeader from "../components/All Headers/mobileHeader/MobileHeader";
import Filters from "../components/OrderList/Filters";
const OrderListPage = () => {
  const [filterValue, onFilterChange] = useState({
    month: "last-6-months",
    manufacturer: null,
    search: "",
  });

  const handleFilterChange = (filterType, value) => {
    onFilterChange((prev) => {
      const newData = { ...prev };
      newData[filterType] = value;
      return newData;
    });
  };

  return (
    <>
      <div className="container p-0">
        <div className="row p-0 m-0 d-flex flex-column justify-content-around align-items-center col-12">
          {/* TopNav */}
          <div className="col-12">
            <TopNav />
          </div>
          <hr className="hrBgColor"></hr>
          {/* all headers */}
          <div className="col-12">
            <LogoHeader />
            <Header />
            <MobileHeader />
            <div className="filter-container">
              <Filters
                onChange={handleFilterChange}
                value={filterValue}
                resetFilter={() => {
                  onFilterChange({
                    manufacturer: null,
                    month: "last-6-months",
                    search: "",
                  });
                }}
              />
            </div>
          </div>
          {/* Order list */}
          <OrderList filterValue={filterValue} />
          {/* footer */}
          <div className="col-12">
            <HelpSection />
          </div>
          <div className="col-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderListPage;
