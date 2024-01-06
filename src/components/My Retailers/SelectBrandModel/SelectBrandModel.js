import React, { useState } from "react";
import Styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const SelectBrandModel = ({ brands, onClose }) => {
  // const [selectedBrandAccountId, setSelectedBrandAccountId] = useState();
  // const [selectedBrandManufacturerId, setSelectedBrandManufacturerId] =
    useState();

  const navigate = useNavigate();
  return (
    <div className="px-[68px] pb-[67px] pt-[40px] max-w-[900px]">
      <section>
        <h1 className="font-[Montserrat-500] text-[22px] tracking-[2.20px] mb-[20px]">
          Choose the Manufacturer
        </h1>

        <div className={Styles.BrandInRadio}>
          <div className={Styles.ModalResponsive}>
            {brands?.map((brand,index) => (
              <div className={Styles.BrandName} key={index} >
                <input
                  type="radio"
                  name="brand_names"
                  // checked={selectedBrandAccountId === brand.AccountId__c}
                  onChange={() => {
                    // setSelectedBrandAccountId(brand.AccountId__c);
                    // setSelectedBrandManufacturerId(brand.ManufacturerId__c);
                    localStorage.setItem("manufacturer",brand.ManufacturerName__c)
                    localStorage.setItem("ManufacturerId__c",brand.ManufacturerId__c)
                  }}
                  id={brand.ManufacturerName__c}
                />
                <label htmlFor={brand.ManufacturerName__c}>{brand.ManufacturerName__c}</label>
                
              </div>
            ))}
          </div>

          <div className={Styles.BrandButton}>
            <button className={Styles.Button1} onClick={onClose}>
              CANCEL
            </button>
            <button
              className={Styles.Button2}
              onClick={() =>
                navigate(
                  `/product`
                  // `/product?accountId=${selectedBrandAccountId}&manufacturerId=${selectedBrandManufacturerId}`
                )
              }
            >
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectBrandModel;
