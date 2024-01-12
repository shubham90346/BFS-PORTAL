import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { DestoryAuth, GetAuthData, getOrderList, getSupportFormRaw, postSupportAny, supportDriveBeg, supportShare } from "../../../lib/store";

const SelectCaseReason = ({ reasons, onClose, recordType }) => {
  const navigate = useNavigate();
  const [prioritiesList, setPrioritiesList] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderIdChild, setOrderIdChild] = useState([]);
  const [typeId, setTypeId] = useState(recordType.id)
  const [desc, setDesc] = useState()
  const [orderData, setOrderData] = useState({
    accountId: null,
    orderNumber: null,
    poNumber: null,
    manufacturerId: null,
    opportunityId: null,
    actualAmount: null,
    invoiceNumber: null
  })
  const [reason, setReason] = useState(null)
  const [rawData, setRawData] = useState({
    orderStatusForm: {
      salesRepId: null,
      contactId: null,
      desc: null,
      priority: "Medium",
      sendEmail: false,
    },
  })
  const [step, setStep] = useState(0);
  useEffect(() => {
    GetAuthData()
      .then((response) => {
        getOrderList({
          user: {
            key: response.x_access_token,
            Sales_Rep__c: false ? "00530000005AdvsAAC" : response.Sales_Rep__c,
          },
          month: 2024,
        })
          .then((order) => {
            setOrders(order);
          })
          .catch((error) => {
            console.log({ error });
          });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [step]);
  const onChangeHandler = (e) => {
    setReason(e.target.value)
    setOrderData({
      accountId: null,
      orderNumber: null,
      poNumber: null,
      manufacturerId: null,
      opportunityId: null,
      actualAmount: null,
      invoiceNumber: null
    })
    setStep(1)
  };
  const onOrderChangeHandler = (e) => {
    let id = e.target.value
    let orderDetails = orders.filter(function (element) {
      if (element.Id === id) {
        setOrderData({
          accountId: element.AccountId,
          orderNumber: element.Order_Number__c,
          poNumber: element.PO_Number__c,
          manufacturerId: element.ManufacturerId__c,
          opportunityId: element.Id,
          actualAmount: element.Amount,
          invoiceNumber: element.Wholesale_Invoice__c
        });
        setOrderIdChild(element.OpportunityLineItems.records)
        setStep(2)
        return element
      }
    });
  }
  console.log({ reason });
  const submitForm = () => {
    GetAuthData().then((user) => {
      if (user) {
        let rawData = {
          orderStatusForm: {
            typeId,
            salesRepId: user.Sales_Rep__c,
            reason,
            accountId: orderData.accountId,
            orderNumber: orderData?.orderNumber,
            poNumber: orderData.poNumber,
            manufacturerId: orderData.manufacturerId,
            desc: null,
            opportunityId: orderData.opportunityId,
            priority: "Medium",
            sendEmail: false,
          },
          key: user.x_access_token
        }
        postSupportAny({ rawData }).then((response) => {
          if (response) {
            navigate("/CustomerSupportDetails?id=" + response)
          }
        }).catch((err) => {
          console.error({ err });
        })
      } else {
        DestoryAuth()
      }
    }).catch((error) => {
      DestoryAuth()
    })
  }
  return (
    <>
      <div className="px-[68px] pb-[67px] pt-[40px] max-w-[900px]">
        <section>
          <div className="d-flex align-items-center justify-content-end gap-5">
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <h1 className="font-[Montserrat-500] text-[22px] tracking-[2.20px] mb-[20px]">{recordType.name}</h1>

          <div className={Styles.BrandInRadio}>
            <div className={Styles.ModalResponsive}>
              {Object.values(reasons)?.map((reason, index) => {
                return (
                  <div className={Styles.BrandName} key={index}>
                    <input
                      type="radio"
                      name="reason_name"
                      value={reason}
                      // checked={selectedBrandAccountId === brand.AccountId__c}

                      onChange={onChangeHandler}
                      id={reason}
                    />
                    <label htmlFor={reason}>{reason}</label>
                  </div>
                );
              })}
            </div>
            {step >= 1 && <div>
              <div style={{ width: '100%' }}>
                {(reason == "Charges" || reason == "Product Missing" || reason == "Product Overage" || reason == "Product Damage") &&
                  <select onChange={(e) => { onOrderChangeHandler(e) }}>
                    <option>Search Order</option>
                    {orders.length > 0 && orders.map((element) => {
                      return (<option value={element.Id} selected={orderData.opportunityId == element.Id}>Order from {element.AccountName} for ({element.ProductCount} Products) Actual Amount {element.Amount} | {element.ManufacturerName__c} | PO #{element.PO_Number__c}</option>)
                    })}
                  </select>}
                {reason == "Update Account Info" && <select onChange={(e) => { }}>
                  <option>Search Account</option>
                  {orders.length > 0 && orders.map((element) => {
                    return (<option value={element.Id}>Order from {element.AccountName} for ({element.ProductCount} Products) Actual Amount {element.Amount} | {element.ManufacturerName__c} | PO #{element.PO_Number__c}</option>)
                  })}
                </select>}
              </div>
            </div>}
            {step == 2 && <div>
              <div style={{ width: '100%' }}>
                {reason == "Charges" && <div><label>Actual Amount</label>
                  <input type="text" value={orderData.actualAmount} />
                  <label>Associated Invoice Number:</label>
                  <input type="text" value={orderData.invoiceNumber ? orderData.invoiceNumber : 'NA'} /></div>}
                {(reason == "Product Missing" || reason == "Product Overage") && <div><select onChange={(e) => { }}>
                  <option>Search Product</option>
                  {orderIdChild.length > 0 && orderIdChild.map((element) => {
                    return (<option value={element.Id}>{element.Name}</option>)
                  })}
                </select>
                  <div>
                    <input type="text" placeholder="Quantity Missing" /></div>
                </div>}
                <div>
                  <input type="text" placeholder="Provide One line Subject" /></div>
                <div>
                  <textarea placeholder="Describe your issues"></textarea></div>
              </div>
            </div>}
            {step == 2 && <div className={Styles.BrandButton}>
              <button className={Styles.Button1} onClick={onClose}>
                CANCEL
              </button>
              <button
                className={Styles.Button2}
                onClick={() => {
                  submitForm()
                }}
              >
                SUBMIT
              </button>
            </div>}
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectCaseReason;
