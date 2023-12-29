import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { formToJSON } from "axios";
import OrderListContent from "./OrderListContent";

function OrderList() {
  const [data, setdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState();
  const [Viewmore, setviewmore] = useState(false);
  console.log(cards);

  useEffect(() => {
    handleOrderdata();
  }, []);

  const formData = new FormData();
  formData.append("key", localStorage.getItem("Api Data").data?.access_token);
  formData.append("Sales_Rep__c", localStorage.getItem("Api Data").data?.Sales_Rep__c);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleOrderdata = async () => {
    const response = await axios.post(` https://dev.beautyfashionsales.com/beauty/v3/20h2J48c`, formData, config);
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

  return (
    <div>
      <section>
        <div className="">
          <div className={Styles.orderMainDiv}>
            {/* <div className={Styles.OrderL}>
              <div className={Styles.OrderSvg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path
                    d="M8.94284 2.27615C9.46349 1.75544 9.46349 0.911229 8.94284 0.390521C8.42213 -0.130174 7.57792 -0.130174 7.05721 0.390521L2.3911 5.05666C2.39092 5.05684 2.39128 5.05648 2.3911 5.05666L0.390558 7.05721C0.153385 7.29442 0.024252 7.59868 0.00313201 7.90895C-0.00281464 7.99562 -0.000321319 8.08295 0.010852 8.17002C0.0431986 8.42308 0.148118 8.66868 0.325638 8.87322C0.348651 8.89975 0.372651 8.92535 0.397585 8.94989L7.05721 15.6095C7.57792 16.1302 8.42213 16.1302 8.94284 15.6095C9.46349 15.0888 9.46349 14.2446 8.94284 13.7239L4.55231 9.33335H22.6667C23.4031 9.33335 24 8.73642 24 8.00002C24 7.26362 23.4031 6.66668 22.6667 6.66668H4.55231L8.94284 2.27615Z"
                    fill="black"
                  />
                </svg>
                <h2 className="">Order List</h2>
              </div>
            </div> */}
            {/* <div className={Styles.head_topp}></div> */}

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
                                  {item.OpportunityLineItems.records.map((ele) => {
                                    return (
                                      <>
                                        {/* <li>{ele.Name}</li> */}

                                        <li className={Styles.tool} data-bs-toggle="tooltip" data-bs-placement="top" onClick={handleclick}>
                                          {Viewmore ? ele.Name : `${ele.Name.slice(0, 31)}...`}
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                                {/* <span><a > +22More</a></span>*/}
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
