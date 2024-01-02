import React, { useEffect, useMemo, useState } from "react";
import styles from "./Style.module.css";
import Img1 from "./images/makeup1.png";
import CollapsibleRow from "../../CollapsibleRow";
import QuantitySelector from "./QuantitySelector";
import { useGlobal } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Accordion = ({ data, formattedData }) => {
  console.log("Accordion data", data);
  console.log("Accordion formattedData", formattedData);
  // console.log(Object.keys(formattedData).length);
  const [orders, setOrders] = useState({});
  const { orderQuantity, setOrderQuantity } = useGlobal();
  const navigate = useNavigate();
  const onQuantityChange = (product, quantity) => {
    setOrders((prev) => {
      const obj = { ...prev };
      obj[product.Id] = {
        quantity: quantity,
        product,
        discount: {
          MinOrderAmount: data.discount.MinOrderAmount,
          margin: data.discount.margin,
          sample: data.discount.sample,
          testerMargin: data.discount.testerMargin,
          testerproductLimit: data.discount.testerproductLimit,
        },
      };

      return obj;
    });
  };

  useEffect(() => {
    let orderQuantity = 0;
    Object.values(orders)?.forEach((order) => {
      orderQuantity += order.quantity;
    });
    setOrderQuantity(orderQuantity);
  }, [orders]);

  useEffect(() => {
    if (Object.keys(orders)?.length) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  useEffect(() => {
    const fetchedOrders = localStorage.getItem("orders");
    if (fetchedOrders) {
      setOrders(JSON.parse(fetchedOrders));
    }
  }, []);

  return (
    <div className={`overflow-auto`}>
      <div className={styles.accordion}>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Product Code</th>
              <th>UPC</th>
              <th>List Price</th>
              <th>Sale Price</th>
              <th>Min Qty</th>
              <th>Qty</th>
            </tr>
          </thead>
          {Object.keys(formattedData).length ? (
            <>
              <tbody>
                {Object.keys(formattedData)?.map((key, index) => {
                  let categoryOrderQuantity = 0;
                  Object.values(orders)?.forEach((order) => {
                    if (order.product.Category__c === key) {
                      categoryOrderQuantity += order.quantity;
                    }
                  });
                  // console.log(formattedData);
                  return (
                    <CollapsibleRow title={key} quantity={categoryOrderQuantity} key={index}>
                      {Object.values(formattedData)[index]?.map((value, indexed) => (
                        <tr className="w-full" key={indexed}>
                          {/* {console.log(value)} */}
                          <td>
                            <img src={Img1} alt="img" />
                          </td>
                          <td className="text-capitalize">{value.Name}</td>
                          <td>{value.ProductCode}</td>
                          <td>{value.ProductUPC__c || "--"}</td>
                          <td>
                            {/* {value.usdRetail__c?.startsWith("$")
                          ? (value.usdRetail__c)
                          : `$${value.usdRetail__c}`} */}
                            {value.usdRetail__c.includes("$") ? `$${(+value.usdRetail__c.substring(1)).toFixed(2)}` : `$${value.usdRetail__c}.00`}
                          </td>
                          <td>
                            {/* {(data?.discount?.margin / 100) *
                          +value.usdRetail__c?.replace("$", "")} */}
                            $
                            {value.usdRetail__c.includes("$")
                              ? (+value.usdRetail__c.substring(1) - (data?.discount?.margin / 100) * +value.usdRetail__c.substring(1)).toFixed(2)
                              : (+value.usdRetail__c - (data?.discount?.margin / 100) * +value.usdRetail__c).toFixed(2)}
                          </td>
                          <td>{value.Min_Order_QTY__c || 0}</td>
                          <td>
                            <QuantitySelector
                              min={value.Min_Order_QTY__c || 0}
                              onChange={(quantity) => {
                                onQuantityChange(value, quantity);
                              }}
                              defaultValue={Object.values(orders)?.find((order) => order.product.Id === value.Id)?.quantity}
                            />
                          </td>
                        </tr>
                      ))}
                    </CollapsibleRow>
                  );
                })}{" "}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="flex justify-start items-center py-4 w-full lg:min-h-[300px] xl:min-h-[380px]">No Data Found</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {/* <div className={styles.TotalSide}>
        <h4>Total Number of Products : {orderQuantity}</h4>
        <button
          onClick={() => {
            navigate("/my-bag");
          }}
        >
          Generate Order
        </button>
      </div> */}
    </div>
  );
};

export default Accordion;
