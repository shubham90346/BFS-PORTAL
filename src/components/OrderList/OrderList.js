import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { formToJSON } from "axios";
import OrderListContent from "./OrderListContent";
import { FilterItem } from "../FilterItem";
import FilterSearch from "../FilterSearch";
import { json } from "react-router-dom";

function OrderList() {
  const [data, setdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTextfilter, setSearchTextfilter] = useState("");
  const [cards, setCards] = useState();
  const [Viewmore, setviewmore] = useState(false);


  useEffect(() => {
    handleOrderdata();

  }, []);



  const formData = new FormData();
  // formData.append("key", localStorage.getItem("Api Data").data?.access_token);
  // formData.append("Sales_Rep__c", localStorage.getItem("Api Data").data?.Sales_Rep__c);
  // console.log(localStorage.getItem("Api Data").data);
  formData.append("key", "00D30000001G9fh!AQEAQNCq4VF57u1dX1en6k_qQIy.3LFAYYp1gOZOS3Y15SFhp.60QjkjHyrET2C9vttq9d2.zUfaRRgBuCKF7prF5KOc29eq");
  formData.append("Sales_Rep__c", "00530000005AdvsAAC");

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };



  const handleOrderdata = async () => {
    const response = await axios.post(` https://dev.beautyfashionsales.com/beauty/v3/20h2J48c`, formData, config);
    // console.log(response.data.data);
    setdata(response.data.data);
  };




  const handlesearch = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };


  const filteritem = () => {
    console.log(searchText);
    const filtered = data.filter(
      (ele) =>
        // post.PO_Number__c.includes(searchText)
        ele.PO_Number__c === searchText || ele.PO_Number__c.includes(searchText.toLowerCase())
    );

    setCards(filtered);
  };

  const handleclick = () => {
    setviewmore(!Viewmore);
  };

  // const filteredArray = data?.filter((item) => {
  //   return  console.log( item);item.AccountName.toLowerCase().includes(searchTextfilter.toLowerCase());

  // })
  const handlefilter = (e) =>{
    const search = e.target.value;
    const fill =  data?.filter((item) => 
      item.AccountName === search || item.AccountName.includes(search.toLowerCase())


    )
    console.log(fill);
  }
 



  return (
    <div>
      <div className="container mt-4">
        <div className={Styles.blacklLabel}>

          <ul className="d-flex">
            <li>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MONTHS
                </button>
                <ul class="dropdown-menu">
                  <li><a class={`dropdown-item ${Styles.buullet}`} href="#">A-Z</a></li>
                  <li><a class="dropdown-item" href="#">Last 6 Months</a></li>
                  <li><a class="dropdown-item" href="#">Current Year</a></li>
                  <li><a class="dropdown-item" href="#">2022</a></li>
                  <li><a class="dropdown-item" href="#">2021</a></li>

                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MANUFACTURER
                </button>
                <ul class="dropdown-menu">
                  {
                    data.map((ele) => {
                      return <li><a class="dropdown-item" href="#">{ele.ManufacturerName__c}</a></li>
                    })
                  }
                  {/* <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </div>
            </li>
            <li className={`d-flex align-items-center ${Styles.inputDraw}`}><input type="text" placeholder="Search By Account" onChange={handlefilter} />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8.24951" cy="8.25" r="4.5" stroke="white" />
                <path d="M10.4995 8.25C10.4995 7.95453 10.4413 7.66194 10.3282 7.38896C10.2152 7.11598 10.0494 6.86794 9.8405 6.65901C9.63157 6.45008 9.38353 6.28434 9.11055 6.17127C8.83757 6.0582 8.54499 6 8.24951 6" stroke="white" stroke-linecap="round" />
                <path d="M14.9995 15L12.7495 12.75" stroke="white" stroke-linecap="round" />
              </svg>
            </li>
            <li className={Styles.BtnStyle}>CLEAR ALL</li>
          </ul>

        </div>

      </div>

      <section>
        <div className="">
          <div className={Styles.orderMainDiv}>


            <div className={Styles.OrderMainPr}>
              <div className={Styles.inorderflex}>
                <div>
                  <h2>Your Orders</h2>
                </div>
                <div className={`d-flex align-items-center ${Styles.InputControll}`}>
                  <input type="text" placeholder="Search All Orders" onChange={handlesearch} />
                  <button onClick={filteritem}>Search Orders</button>
                </div>
              </div>




              {searchText === "" ? (
                <>
                  <OrderListContent />
                </>
              ) : cards ? (
                <>
                  <div className={Styles.orderStatement}>
                    {cards.map((item) => {
                      return (
                        <>

                          <div className={Styles.poNumber}>
                            <div>
                              <h3>PO Number</h3>
                              <p>{item.PO_Number__c}</p>
                            </div>

                            <div>
                              <h3>Brand</h3>
                              <p>{item.ManufacturerName__c}</p>
                            </div>

                            <div className={Styles.PoOrderLast}>
                              <h3>Ship To </h3>
                              <p>{item.AccountName}</p>
                            </div>
                          </div>

                          <div className={Styles.productDetail}>
                            <div className={Styles.Prod1}>
                              <div className={Styles.ProtuctInnerBox}>
                                <div className={Styles.BoxBlack}>
                                  <div className={Styles.Boxwhite}>
                                    <h1>
                                      {item.ProductCount} <span>Products</span>
                                    </h1>
                                  </div>
                                </div>
                              </div>

                              <div className={Styles.ProtuctInnerBox1}>
                                <ul>
                                  {item.OpportunityLineItems?.records.map((ele) => {
                                    return (
                                      <>


                                        <li className={Styles.tool} data-bs-toggle="tooltip" data-bs-placement="top" onClick={handleclick}>
                                          {Viewmore ? ele.Name : `${ele.Name.slice(0, 31)}...`}
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>

                              </div>
                            </div>

                            <div className={Styles.totalProductPrice}>
                              <div className={Styles.Margitotal}>
                                <h3>Total</h3>
                                <p>${item.Amount}</p>
                              </div>

                              <button>View Order Details</button>
                            </div>
                          </div>

                          <div className={Styles.StatusOrder}>
                            <div className={Styles.Status1}>
                              <h2>Tracking Status</h2>
                              <h3>Order Status</h3>
                              <h4>Invoice </h4>
                            </div>

                            <div className={Styles.Status2}>
                              <h6>
                                Order Placed <span>: {item.CreatedDate}</span>
                              </h6>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center py-4 w-full lg:min-h-[300px] xl:min-h-[380px]">No data found</div>
                </>
              )}

              {/* <OrderListContent /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderList;
