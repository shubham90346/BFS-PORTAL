import React from "react";
import LogoHeader from "../components/All Headers/logoHeader/LogoHeader";
import TopNav from "../components/All Headers/topNav/TopNav";
import Header from "../components/All Headers/header/Header";
import HelpSection from "../components/Footer/HelpSection";
import Footer from "../components/Footer/Footer";
import MyBagFinal from "../components/MyBagFinal";
import { FilterItem } from "../components/FilterItem";
import MobileHeader from "../components/All Headers/mobileHeader/MobileHeader";
import Layout from "../components/Layout/Layout";


const MyBag = () => {
  return (
    <>
    <Layout>
            <div>
                <div className="col-12">
                    <div className="filter-container  ">
                    </div>
                </div>
                <div>
                <div className="col-12 p-0">
           <MyBagFinal/>
          </div>
                    {/* <OrderStatusFormSection /> */}
                </div>
            </div>
        </Layout>
     
    </>
  );
};

export default MyBag;
