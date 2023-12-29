import React from "react";
import LogoHeader from "../components/All Headers/logoHeader/LogoHeader";
import TopNav from "../components/All Headers/topNav/TopNav";
import Header from "../components/All Headers/header/Header";
import HelpSection from "../components/Footer/HelpSection";
import Footer from "../components/Footer/Footer";
import MyBagFinal from "../components/MyBagFinal";
import { FilterItem } from "../components/FilterItem";

const MyBag = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0 d-flex flex-column justify-content-around align-items-center col-12">
          {/* TopNav */}
          <div className="col-10">
            <TopNav />
          </div>
          <hr className="hrBgColor"></hr>
          {/* all headers */}
          <div className="col-10">
            <LogoHeader />
            <Header />
            <div className="filter-container">
            {/* <FilterItem
              label="Sort by"
              value={sortBy}
              options={[
                {
                  label: "Price: High To Low",
                  value: "Price: High To Low",
                },
                {
                  label: "Price: Low To High",
                  value: "Price: Low To High",
                },
              ]}
              onChange={(value) => {
                setSortBy(value);
              }}
            />
            <FilterItem
              label="Product type"
              value={productTypeFilter}
              options={[
                {
                  label: "Wholesale",
                  value: "Wholesale",
                },
                {
                  label: "PREORDER",
                  value: "Pre-order",
                },
              ]}
              onChange={(value) => {
                setProductTypeFilter(value);
              }}
            />
            <FilterSearch onChange={(e) => setSearchBy(e.target.value)} value={searchBy} placeholder={"Enter Product name"} width="155px" />
            <button
              className="border px-2.5 py-1 leading-tight"
              onClick={() => {
                setSortBy("Price: High To Low");
                setSearchBy("");
                setProductTypeFilter("Wholesale");
              }}
            >
              CLEAR ALL
            </button> */}
          </div>
          </div>
          {/* My Bag */}
          <div className="col-10">
           <MyBagFinal/>
          </div>
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

export default MyBag;
