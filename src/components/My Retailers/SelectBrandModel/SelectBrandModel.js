import React, { useState } from "react";
import Styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ModalPage from "../../Modal UI";
import modalStyles from "../../Modal UI/Styles.module.css";

const SelectBrandModel = ({ brands, onClose }) => {
  // const [selectedBrandAccountId, setSelectedBrandAccountId] = useState();
  const [selectedBrandManufacturer, setSelectedBrandManufacturer] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {/* {modalOpen ? (
        <ModalPage
          open
          content={
            <>
              <div style={{ maxWidth: "309px" }}>
                <h1 className={`fs-5 ${modalStyles.ModalHeader}`}>Warning</h1>
                <p className={` ${modalStyles.ModalContent}`}>Please Select Manufacturer</p>
                <div className="d-flex justify-content-center">
                  <button className={`${modalStyles.modalButton}`} onClick={() => setModalOpen(false)}>
                    OK
                  </button>
                </div>
              </div>
            </>
          }
          onClose={() => setModalOpen(false)}
        />
      ) : null} */}
      <div className="px-[68px] pb-[67px] pt-[40px] max-w-[900px]">
        <section>
          <div className="d-flex align-items-center justify-content-end gap-5">
          <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <h1 className="font-[Montserrat-500] text-[22px] tracking-[2.20px] mb-[20px]">Choose the Manufacturer</h1>
          

          <div className={Styles.BrandInRadio}>
            <div className={Styles.ModalResponsive}>
              {brands?.map((brand, index) => (
                <div className={Styles.BrandName} key={index}>
                  <input
                    type="radio"
                    name="brand_names"
                    // checked={selectedBrandAccountId === brand.AccountId__c}
                    onChange={() => {
                      // setSelectedBrandAccountId(brand.AccountId__c);
                      setSelectedBrandManufacturer(true);
                      localStorage.setItem("manufacturer", brand.ManufacturerName__c);
                      localStorage.setItem("ManufacturerId__c", brand.ManufacturerId__c);
                      // if (selectedBrandManufacturer) {
                        navigate(`/product`);
                      // } 
                    }}
                    id={brand.ManufacturerName__c}
                  />
                  <label htmlFor={brand.ManufacturerName__c}>{brand.ManufacturerName__c}</label>
                </div>
              ))}
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

export default SelectBrandModel;
