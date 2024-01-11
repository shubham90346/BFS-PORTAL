import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { GetAuthData, getSupportFormRaw, supportDriveBeg, supportShare } from "../../../lib/store";

const SelectCaseReason = ({ reasons, onClose }) => {
  const navigate = useNavigate();
  const [prioritiesList, setPrioritiesList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [supportTicketData, setTicket] = useState();
  useEffect(() => {
    let data = supportDriveBeg();
    setTicket(data);
    GetAuthData()
      .then((user) => {
        let rawData = {
          key: user.x_access_token,
          AccountId: data.orderStatusForm.accountId,
        };
        getSupportFormRaw({ rawData })
          .then((raw) => {
            setPrioritiesList(raw.Priority);
            setContactList(raw.ContactList);
          })
          .catch((error) => {
            console.error({ error });
          });
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);
  const onChangeHandler = (e) => {
    let temp = supportTicketData;
    temp.orderStatusForm["reason"] = e.target.value;
    supportShare(temp)
      .then((response) => {
        let data = supportDriveBeg();
        setTicket(data);
      })
      .catch((error) => {
        console.error({ error });
      });
    navigate(`/customerService`);

    console.log(supportTicketData);
  };
  return (
    <>
      <div className="px-[68px] pb-[67px] pt-[40px] max-w-[900px]">
        <section>
          <div className="d-flex align-items-center justify-content-end gap-5">
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <h1 className="font-[Montserrat-500] text-[22px] tracking-[2.20px] mb-[20px]">Choose the Manufacturer</h1>

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

            {/* <div className={Styles.BrandButton}> */}
            {/* <button className={Styles.Button1} onClick={onClose}>
                CANCEL
              </button> */}
            {/* <button
                className={Styles.Button2}
                onClick={() => {
                  if (selectedBrandManufacturer) {
                    navigate(`/product`);
                  } else {
                    setModalOpen(true);
                  }
                }}
              >
                SUBMIT
              </button> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectCaseReason;
