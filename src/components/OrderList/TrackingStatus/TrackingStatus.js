import React, { useEffect, useMemo, useState } from 'react'
import Styles from './Styles.module.css'

function TrackingStatus({ TrackingData, opportunityId }) {
    const [data, setdata] = useState([]);
    const [Viewmore, setviewmore] = useState(false);



    const Values = useMemo(() => {
        let newId = TrackingData?.filter((data) =>
            data.Id === opportunityId
        );
        setdata(newId)
    }, [TrackingData, opportunityId])

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

    let date = `${months[currentDate.getMonth()]
        } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    var size = 1;


    return (
        <div>
            <section>
                <div className={Styles.mainTop}>
                    <h2>Tracking Status </h2>
                    <div className={Styles.mainControl}>

                        {
                            data.map((item) => {
                                date = new Date(item.CreatedDate);
                                let cdate = `${currentDate.getDate()} ${months[currentDate.getMonth()]
                                    } ${currentDate.getFullYear()}`;
                                return <>
                                    <div className={Styles.ProtuctInnerBox}>
                                        <div className={Styles.BoxBlack}>
                                            <div className={Styles.Boxwhite}>
                                                <h1 className=''>{item.ProductCount}</h1>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={Styles.ProtuctInnerBoxPara}>
                                        <div className={Styles.ProtuctInnerBoxInner}>
                                            <h4>
                                                {
                                                    item.OpportunityLineItems?.records.slice(0, size).map((ele) => {
                                                        return (
                                                            <>

                                                                {Viewmore
                                                                    ? ele.Name
                                                                    : `${ele.Name.slice(0, 31)}...`}

                                                            </>
                                                        )
                                                    })
                                                }


                                            </h4>
                                            <p><span className={Styles.Span1}>PO Number :</span>   <span className={Styles.Span2}>{item.PO_Number__c}</span></p>
                                            <p><span className={Styles.Span1}>Brand :</span>   <span className={Styles.Span2}>{item.ManufacturerName__c}</span></p>
                                            <p><span className={Styles.Span1}>Order Placed :</span>   <span className={Styles.Span2}>{cdate}</span></p>
                                            <p><span className={Styles.Span1}>Tracking Id :</span>   <span className={Styles.Span2}>{item.Tracking__c}</span></p>
                                            <p><span className={Styles.Span1}>Shipment Method :</span>   <span className={Styles.Span2}>{item.Shipping_method__c}</span></p>

                                        </div>

                                    </div>

                                </>

                            })
                        }

                    </div>

                    <div className={Styles.ShippedBar}>
                        <h3>Tracking Status :  <span>Shipped</span></h3>
                        <div className={Styles.BtnGroup}>
                            <button type="submit">CANCEL</button>
                            <button>SUBMIT TRACKING STATUS REQUEST </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrackingStatus