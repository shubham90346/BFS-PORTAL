import React, { useEffect, useState } from 'react'
import LogoHeader from '../components/All Headers/logoHeader/LogoHeader'
import TopNav from '../components/All Headers/topNav/TopNav'
import Header from '../components/All Headers/header/Header'
import HelpSection from '../components/Footer/HelpSection'
import Footer from '../components/Footer/Footer'
import MobileHeader from '../components/All Headers/mobileHeader/MobileHeader'
import CustomerSupportPage from '../components/CustomerSupportPage/CustomerSupportPage'
import { FilterItem } from "../components/FilterItem";
import FilterSearch from "../components/FilterSearch";
import { GetAuthData, getSupportList } from '../lib/store'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination/Pagination'
import Layout from "../components/Layout/Layout";


let PageSize = 10;
const CustomerSupport = () => {
  const [supportList, setSupportList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    GetAuthData().then((user)=>{
      getSupportList({user}).then((supports)=>{
        setSupportList(supports)
        setLoaded(true)
      }).catch((error)=>{
        console.error({error});
      })
    }).catch((err)=>{
      console.error(err);
    })
  },[])

  return (
    <>
<Layout>
            <div>
            <div className="col-12">
            <div className="filter-container  ">
              {/* <FilterItem
                label="Sort by"
                value={"a-z"}
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
                onChange={(value) => {}}
              />
              <FilterItem
                minWidth="220px"
                label="Manufacturer"
                value={""}
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
                // options1={manufacturers?.data?.map((manufacturer) => ({
                //   label: manufacturer.Name,
                //   value: manufacturer.Id,
                // }))}
                onChange={(value) => {}}
              />
              <FilterSearch
                onChange={(e) => {}}
                value={""}
                placeholder={"Search by account"}
              />
              <button
                className="border px-2.5 py-1 leading-tight"
                onClick={() => {}}
              >
                CLEAR ALL
              </button> */}
            </div>
            </div>
                <div>
                {!loaded ? <Loading />:
        <CustomerSupportPage data={supportList}                 currentPage={currentPage}
        PageSize={PageSize}/>}
        <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={supportList.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
                    {/* <OrderStatusFormSection /> */}
                </div>
            </div>
        </Layout>

  
    </>
   
  )
}

export default CustomerSupport