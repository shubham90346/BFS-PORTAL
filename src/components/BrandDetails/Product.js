import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
// import Dropdown from './ShortByDropDown';
// import Img1 from './images/makeup1.png'
import Accordion from "./Accordion/Accordion";
import FilterPage from "./Accordion/FilterPage";
import TopNav from "../All Headers/topNav/TopNav";
import LogoHeader from "../All Headers/logoHeader/LogoHeader";
import Header from "../All Headers/header/Header";
import HelpSection from "../Footer/HelpSection";
import Footer from "../Footer/Footer";
import { useProductList } from "../../api/useProductList";
import { useAuth } from "../../context/UserContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../Loading";
import { FilterItem } from "../FilterItem";
import FilterSearch from "../FilterSearch";
import { useGlobal } from "../../context/GlobalContext";
import ModalPage from "../Modal UI";

const groupBy = function (xs, key) {
  return xs?.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function Product() {
  const { orderQuantity, setOrderQuantity } = useGlobal();

  const { user } = useAuth();
  // const [searchParams] = useSearchParams();
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState("Wholesale");
  const [sortBy, setSortBy] = useState();
  const [searchBy, setSearchBy] = useState("");
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const { data, isLoading } = useProductList({
    key: user?.data.access_token,
    Sales_Rep__c: user?.data.Sales_Rep__c,
    Manufacturer: localStorage.getItem("ManufacturerId__c"),
    AccountId__c: localStorage.getItem("AccountId__c"),
    //  Manufacturer: searchParams.get("manufacturerId"),
    // AccountId__c: searchParams.get("accountId"),
  });
  console.log("data", data);
  const brandName = data?.data?.records?.[0]?.ManufacturerName__c;

  const formattedData = useMemo(() => {
    const groupedData = groupBy(data?.data?.records || [], "Category__c");

    const tester = [...(groupedData["TESTER"] || [])];
    delete groupedData["TESTER"];
    const samples = [...(groupedData["Samples"] || [])];
    delete groupedData["Samples"];

    if (tester?.length) {
      groupedData["TESTER"] = tester;
    }
    if (samples?.length) {
      groupedData["Samples"] = samples;
    }

    return groupedData;
  }, [data?.data?.records]);
  // console.log(formattedData);
  const formattedFilterData = useMemo(() => {
    let filteredData = { ...formattedData };
    if (categoryFilters?.length) {
      let newData = {};
      Object.keys(filteredData)?.forEach((key) => {
        if (categoryFilters?.includes(key)) {
          newData[key] = filteredData[key];
        }
      });
      filteredData = { ...newData };
    }

    if (productTypeFilter) {
      let newData = {};
      Object.keys(filteredData)?.forEach((key) => {
        if (productTypeFilter === "Pre-order") {
          if (key === "PREORDER") {
            newData[key] = filteredData[key];
          }
        } else {
          if (key !== "PREORDER") {
            newData[key] = filteredData[key];
          }
        }
      });
      filteredData = { ...newData };
    }
    // not working
    if (searchBy) {
      let newData = {};
      Object.keys(filteredData)?.forEach((key) => {
        const values = filteredData[key];
        // console.log(values);
        newData = values?.filter((value) => value.Name?.toLowerCase().includes(searchBy?.toLowerCase()));
        filteredData = { ...newData };

        // console.log(filteredData);
      });
    }

    if (sortBy === "Price: Low To High") {
      let newData = {};
      Object.keys(filteredData)?.forEach((key) => {
        const value = filteredData[key];

        value?.sort((a, b) => {
          return +a?.usdRetail__c?.replace("$", "") - +b?.usdRetail__c?.replace("$", "");
        });
      });
    }

    if (sortBy === "Price: High To Low") {
      let newData = {};
      Object.keys(filteredData)?.forEach((key) => {
        const value = filteredData[key];
        value?.sort((a, b) => +b?.usdRetail__c?.replace("$", "") - +a?.usdRetail__c?.replace("$", ""));
      });
    }

    return filteredData;
  }, [formattedData, categoryFilters, productTypeFilter, sortBy, searchBy]);
  useEffect(() => {
    if (!(localStorage.getItem("ManufacturerId__c") && localStorage.getItem("AccountId__c"))) {
      setRedirect(true);
    }
  }, []);
  return (
    <>
      {redirect ? (
        <ModalPage
          open
          content={
            <div>
              <p className="text-center">
                Data is not available for selected Account and Manufacturer. <br></br>
                <br></br>
                Redirecting to My Retailers page...
              </p>
              {setInterval(() => {
                navigate("/my-retailers");
              }, 2000)}
            </div>
          }
        />
      ) : (
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
                <FilterItem
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
                </button>
              </div>
            </div>
            {/* brand list accordion */}
            <div className="col-10">
              {isLoading ? (
                <Loading height={"70vh"} />
              ) : (
                <div>
                  <section className="py-[34px]">
                    <div className="">
                      <div className={styles.BrandTopShow}>
                        <h4 className="flex justify-center items-center gap-4 uppercase font-[Montserrat-500] tracking-[2.20px]">
                          <button
                            onClick={() => {
                              navigate("/my-retailers");
                            }}
                          >
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                              <path
                                d="M8.94284 2.27615C9.46349 1.75544 9.46349 0.911229 8.94284 0.390521C8.42213 -0.130174 7.57792 -0.130174 7.05721 0.390521L2.3911 5.05666C2.39128 5.05648 2.39092 5.05684 2.3911 5.05666L0.390558 7.05721C0.153385 7.29442 0.024252 7.59868 0.00313201 7.90895C-0.00281464 7.99562 -0.000321319 8.08295 0.010852 8.17002C0.0431986 8.42308 0.148118 8.66868 0.325638 8.87322C0.348651 8.89975 0.372651 8.92535 0.397585 8.94989L7.05721 15.6095C7.57792 16.1302 8.42213 16.1302 8.94284 15.6095C9.46349 15.0888 9.46349 14.2446 8.94284 13.7239L4.55231 9.33335H22.6667C23.4031 9.33335 24 8.73642 24 8.00002C24 7.26362 23.4031 6.66668 22.6667 6.66668H4.55231L8.94284 2.27615Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                          {brandName}
                        </h4>

                        <p>
                          <span>Account</span>: {localStorage.getItem("Account")}
                        </p>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                          <div>
                            <FilterPage
                              data={data}
                              formattedData={formattedData}
                              setCategoryFilters={setCategoryFilters}
                              categoryFilters={categoryFilters}
                              setProductTypeFilter={setProductTypeFilter}
                              productTypeFilter={productTypeFilter}
                              setSortBy={setSortBy}
                              sortBy={sortBy}
                            ></FilterPage>
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-12 ">
                          <div className={`${styles.AccorBorder} overflow-auto`} style={{ height: "64vh", border: "1px dashed black" }}>
                            <Accordion data={data} formattedData={formattedFilterData}></Accordion>
                          </div>
                          <div className={`${styles.TotalSide} px-3`}>
                            <h4>Total Number of Products : {orderQuantity}</h4>
                            <button
                              onClick={() => {
                                navigate("/my-bag");
                              }}
                            >
                              Generate Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
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
      )}
    </>
  );
}

export default Product;
