import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { AuthCheck } from "../lib/store";
import Layout from "../components/Layout/Layout";



const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!AuthCheck()) {
      // navigate("/");
    }
  }, []);
  return (
    <>

<Layout>
            <div>
                <div className="col-12">
                    {/* <div className="filter-container  ">
                    </div> */}
                </div>
                <div>
                <Dashboard/>
                    {/* <OrderStatusFormSection /> */}
                </div>
            </div>
        </Layout>
    </>
  );
};

export default DashboardPage;
