import React from 'react';
import Styles from './Style.module.css'

function Orderstatus(props) {
    return (
        <div>
            <section>
                <div className={Styles.mainTop}>
                    <h2>Order Status </h2>
                    <div className={Styles.mainControl}>

                        <div className={Styles.ProtuctInnerBox}>
                            <div className={Styles.BoxBlack}>
                                <div className={Styles.Boxwhite}>
                                    <h1>25 <span>Products</span></h1>
                                </div>
                            </div>
                        </div>

                        {
                            data.map((item) => {
                                date = new Date(item.CreatedDate);
                                let cdate = `${currentDate.getDate()} ${months[currentDate.getMonth()]
                                    } ${currentDate.getFullYear()}`;
                                return <>  
                                          {console.log(item)}
                                    <div className={Styles.ProtuctInnerBox}>
                                        <div className={Styles.BoxBlack}>
                                            <div className={Styles.Boxwhite}>
                                                <h1>{item.ProductCount}</h1>
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
                                            <p><span className={Styles.Span1}>Order Type :</span>   <span className={Styles.Span2}>{item.Season__c}</span></p>


                                        </div>

                                    </div>




                                </>
                            })


                        }














                            </div>

                        </div>

                    </div>

                    <div className={Styles.ShippedBar}>
                        <h3>Order Status :  <span>Order Released</span></h3>
                        <div className={Styles.BtnGroup}>
                            <button type="submit" >CANCEL</button>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    );
}

export default Orderstatus;