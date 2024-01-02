import React, { useEffect, useState } from "react";
import TopNav from "../components/All Headers/topNav/TopNav";
import LogoHeader from "../components/All Headers/logoHeader/LogoHeader";
import HelpSection from "../components/Footer/HelpSection";
import Header from "../components/All Headers/header/Header";
import Footer from "../components/Footer/Footer";
import MyRetailers from "../components/My Retailers/MyRetailers";
import { FilterItem } from "../components/FilterItem";
import { useManufacturer } from "../api/useManufacturer";
import { useRetailersData } from "../api/useRetailersData";
import FilterSearch from "../components/FilterSearch";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyRetailersPage = () => {
  const { data: manufacturers } = useManufacturer();

  const [searchParams] = useSearchParams();
  const manufacturerId = searchParams.get("manufacturerId");

  console.log(manufacturers);
  const { data, isLoading } = useRetailersData();
  const [manufacturerFilter, setManufacturerFilter] = useState(manufacturerId);
  const [sortBy, setSortBy] = useState();
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    if (!manufacturerId) {
      setManufacturerFilter(null);
    } else {
      setManufacturerFilter(manufacturerId);
    }
  }, [manufacturerId]);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("Name");
    if (!userData) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container p-0 ">
        <div className="row p-0 m-0 d-flex flex-column justify-content-around align-items-center ">
          {/* TopNav */}
          <div className="p-0">
            <TopNav />
          </div>
          <hr className="hrBgColor"></hr>
          {/* all headers */}
          <div className="p-0">
            <LogoHeader />
            <Header />
            <div className="filter-container">
              <FilterItem
                label="Sort by"
                value={sortBy}
                options={[
                  {
                    label: "A-Z",
                    value: "a-z",
                  },
                  {
                    label: "Z-A",
                    value: "z-a",
                  },
                ]}
                onChange={(value) => {
                  setSortBy(value);
                }}
              />
              <FilterItem
                minWidth="220px"
                label="Manufacturer"
                value={manufacturerFilter}
                options={manufacturers?.data?.map((manufacturer) => ({
                  label: manufacturer.Name,
                  value: manufacturer.Id,
                }))}
                onChange={(value) => setManufacturerFilter(value)}
              />
              <FilterSearch
                onChange={(e) => setSearchBy(e.target.value)}
                value={searchBy}
                placeholder={"Search by account"}
              />
              <button
                className="border px-2.5 py-1 leading-tight"
                onClick={() => {
                  setSortBy(null);
                  setManufacturerFilter(null);
                  setSearchBy("");
                }}
              >
                CLEAR ALL
              </button>
            </div>
          </div>
          {/* my retailers */}
          <div className="">
            <MyRetailers
              pageData={data?.data}
              sortBy={sortBy}
              searchBy={searchBy}
              isLoading={isLoading}
              filterBy={
                manufacturerFilter
                  ? manufacturers?.data?.find(
                      (manufacturer) => manufacturer.Id === manufacturerFilter
                    )
                  : null
              }
            />
          </div>
          {/* footer */}
      </div>
        </div>
          <div className="">
            <HelpSection />
          </div>
          <div className="container">
            <Footer />
          </div>
    </>
  );
};

export default MyRetailersPage;
