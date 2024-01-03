import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalPage from "../Modal UI";
function OrderListContent({ data }) {
  const [Orderdata, setOrderdata] = useState(data || []);
  const [Opportunitydata, setOpportunitydata] = useState([]);
  const [Viewmore, setviewmore] = useState(false);
  const [isTrackingModal, setIsTrackingModal] = useState(false);
  const handleclick = () => {
    setviewmore(!Viewmore);
  };

  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = `${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const TrackingModal = () => {
    return (
      <ModalPage
        open
        content={
          <div>
            <p className="text-center">
              Data is not available for selected Account and Manufacturer.{" "}
              <br></br>
              <br></br>
              Redirecting to My Retailers page...
            </p>
          </div>
        }
      />
    );
  };

  return (
    <>
      {Orderdata.map((item, index) => {
        date = new Date(item.CreatedDate);
        let cdate = `${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        } ${currentDate.getFullYear()}`;

        return (
          <div className={` ${Styles.orderStatement}`} key={index}>
            <div>
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
                            {/* <li>{ele.Name}</li> */}

                            <li
                              className={Styles.tool}
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              onClick={handleclick}
                            >
                              {Viewmore
                                ? ele.Name
                                : `${ele.Name.slice(0, 31)}...`}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                    {/* <span><a > +22More</a></span>*/}
                    <span>
                      <a>
                        {item.OpportunityLineItems?.totalSize - 3 < 0
                          ? ""
                          : `{+${
                              item.OpportunityLineItems?.totalSize - 3
                            } More}`}
                      </a>
                    </span>
                  </div>
                </div>

                <div className={Styles.totalProductPrice}>
                  <div className={Styles.Margitotal}>
                    <h3>Total</h3>
                    <p>${Number(item.Amount).toFixed(2)}</p>
                  </div>

                  <button>View Order Details</button>
                </div>
              </div>

              <div className={Styles.StatusOrder}>
                <div className={Styles.Status1}>
                  <h2
                    onClick={() => {
                      setIsTrackingModal(true);
                    }}
                  >
                    Tracking Status
                  </h2>
                  <h3>Order Status</h3>
                  <h4>Invoice </h4>
                </div>

                <div className={Styles.Status2}>
                  <h6>
                    Order Placed <span>: {cdate}</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {isTrackingModal &&<TrackingModal />}
    </>
  );
}

export default OrderListContent;
