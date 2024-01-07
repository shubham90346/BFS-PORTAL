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
    <div className="container p-0 ">
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
            <MobileHeader/>
            <div className="col-12">
            <div className="filter-container  ">
              <FilterItem
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
              </button>
            </div>
            </div>
          </div>
          {/* Top products */}
      {/* <div className="row d-flex flex-column justify-content-around align-items-center lg:min-h-[300px] xl:min-h-[400px]">
        <div className="col-4">
            <p className="m-0 fs-2 font-[Montserrat-400] text-[14px] tracking-[2.20px]">Under development...</p>
        </div>
        </div> */}
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
          {/* footer */}
        </div>
      </div>
          <div className="col-12">
            <HelpSection />
          </div>
          <div className="col-12">
            <Footer />
          </div>
    </>
   
  )
}

export default CustomerSupport