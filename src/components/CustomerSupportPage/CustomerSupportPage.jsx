import React from 'react'
import Styles from './Style.module.css'
import MySupportTicket from './MySupportTicket';
import { Link } from 'react-router-dom'
import { CustomerServiceIcon, OrderStatusIcon,MarketingSupportIcon,DefaultSupportIcon } from '../../lib/svg'

function CustomerSupportPage({ data, PageSize, currentPage }) {
    return (
        <div>
            <div className=''>
                <div className={Styles.supportMain}>
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <div className={Styles.supportLeft}>

                                <Link to={'/order-list'}>
                                    <div className={Styles.supportLeftBox}>
                                        <div className={Styles.supportLeftImg}>
                                            <OrderStatusIcon width={42} height={42} />
                                        </div>

                                        <div className={Styles.supportLeftContent}>
                                            <h2>Order Status</h2>
                                            <p>Track Your Orders with Ease.</p>

                                        </div>
                                    </div>
                                </Link>

                                <Link to={'/order-list'}>
                                <div className={Styles.supportLeftBox}>
                                    <div className={Styles.supportLeftImg}>
                                        <CustomerServiceIcon width={42} height={42} />
                                    </div>

                                    <div className={Styles.supportLeftContent}>
                                        <h2>Customer Services </h2>
                                        <p>Resolving Concerns Serving Solutions</p>

                                    </div>

                                </div>
                                </Link>

                                <Link to={'/order-list'}>
                                <div className={Styles.supportLeftBox}>
                                    <div className={Styles.supportLeftImg}>
                                        <MarketingSupportIcon width={42} height={42} />
                                    </div>

                                    <div className={Styles.supportLeftContent}>
                                        <h2>Marketing Support Issues </h2>
                                        <p>Elevate Your Marketing with Proactive Solutions.</p>

                                    </div>

                                </div>
                                </Link>

                                <Link to={'/order-list'}>
                                <div className={Styles.supportLeftBox}>
                                    <div className={Styles.supportLeftImg}>
                                        <DefaultSupportIcon width={42} height={42} />
                                    </div>

                                    <div className={Styles.supportLeftContent}>
                                        <h2>Management Cases </h2>
                                        <p>Empowering Solutions for Effective Management</p>

                                    </div>

                                </div>
                                </Link>

                                <Link to={'/order-list'}>
                                <div className={Styles.supportLeftBox}>
                                    <div className={Styles.supportLeftImg}>
                                        <DefaultSupportIcon width={42} height={42} />
                                    </div>

                                    <div className={Styles.supportLeftContent}>
                                        <h2>DIF Tester Issue </h2>
                                        <p>Empowering Solutions for Effective Management</p>

                                    </div>

                                </div>
                                </Link>

                                <Link to={'/order-list'}>
                                <div className={Styles.supportLeftBox}>
                                    <div className={Styles.supportLeftImg}>
                                        <DefaultSupportIcon width={42} height={42} />
                                    </div>

                                    <div className={Styles.supportLeftContent}>
                                        <h2>Displays Issues </h2>
                                        <p>Empowering Solutions for Effective Management</p>

                                    </div>

                                </div>
                                </Link>

                            </div>


                        </div>


                        <div className='col-lg-9 col-md-12 col-sm-12'>
                            <MySupportTicket data={data} currentPage={currentPage} PageSize={PageSize} />
                        </div>
                    </div>

                    <div className={Styles.supportLeftContent}>
                      <h2>Order Status</h2>
                      <p>Track Your Orders with Ease.</p>
                    </div>
                  </div>
                </Link>

                <div className={Styles.supportLeftBox}>
                  <div className={Styles.supportLeftImg}>
                    <CustomerServiceIcon width={42} height={42} />
                  </div>

                  <div className={Styles.supportLeftContent}>
                    <h2>Customer Services </h2>
                    <p>Resolving Concerns Serving Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
             {/* {if} */}
            <MySupportTicket data={filteredData} currentPage={currentPage} PageSize={PageSize} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupportPage;
