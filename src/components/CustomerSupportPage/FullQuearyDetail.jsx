import React from 'react'
import Detail from './Detail.module.css'
import { SupportStatusGreen, SupportStatusRed, SupportStatusYellow, UserChecked } from '../../lib/svg'
import { getStrCode } from '../../lib/store'
import { Link } from 'react-router-dom';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function FullQuearyDetail({ data }) {
    const date = new Date(data.Date_Opened__c);
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
    return (
        <div>
            <div className={Detail.FullQuearyDetailMain}>
                <h2 className={Detail.FullQuearyDetailH2}>
                    <Link to={'/customer-support'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path d="M8.94284 2.27615C9.46349 1.75544 9.46349 0.911229 8.94284 0.390521C8.42213 -0.130174 7.57792 -0.130174 7.05721 0.390521L2.3911 5.05666C2.39092 5.05684 2.39128 5.05648 2.3911 5.05666L0.390558 7.05721C0.153385 7.29442 0.024252 7.59868 0.00313201 7.90895C-0.00281464 7.99562 -0.000321319 8.08295 0.010852 8.17002C0.0431986 8.42308 0.148118 8.66868 0.325638 8.87322C0.348651 8.89975 0.372651 8.92535 0.397585 8.94989L7.05721 15.6095C7.57792 16.1302 8.42213 16.1302 8.94284 15.6095C9.46349 15.0888 9.46349 14.2446 8.94284 13.7239L4.55231 9.33335H22.6667C23.4031 9.33335 24 8.73642 24 8.00002C24 7.26362 23.4031 6.66668 22.6667 6.66668H4.55231L8.94284 2.27615Z" fill="black" />
                    </svg>
                    </Link>
                    <span>CUSTOMER Support </span> - My Support Tickets / Order Status detail</h2>

                <h4 className={Detail.FullQuearyDetailH4}>Customer Services for Case Reason <span>- Charges</span> </h4>


                <div className={`row ${Detail.FlexReverse}`}>
                    <div className='col-lg-9 col-md-9 col-sm-12'>
                        <div className={Detail.LeftMainDiv}>
                            <div className={Detail.LeftMainTopBox}>
                                <p>
                                    <UserChecked />
                                    <span>{data.Account.Name}</span>&nbsp; raised this on {date.getDate()}/{monthNames[date.getMonth()]}/{date.getFullYear()} {formatAMPM(date)}</p>

                            </div>

                            <h6>Activity</h6>
                            <div className={Detail.HeightGiven}>

                            {data.ActivityHistories && data.ActivityHistories.records.length>0 &&<>
                            {data.ActivityHistories.records.map((activity,index)=>{
                                const itemDate = new Date(activity.StartDateTime);
                                return(<div className={Detail.ActivityBox}>

                                <div className={`${Detail.ActivityProfile} ${activity?.OwnerId != data?.salesRepId && Detail.ActiDark}`}>
                                    <h6>{activity?.OwnerId == data?.salesRepId ?getStrCode(data.salesRepName):"CS"}</h6>
                                </div>
                                <div className={Detail.ActivityContentImform}>
                                    <h2>{activity?.OwnerId == data?.salesRepId ?data.salesRepName:"Customer Support"}</h2>
                                    <p>Hi, {activity?.OwnerId != data?.salesRepId ?data.salesRepName:"Customer Support"},</p>
                                    <p className={Detail.Para2} dangerouslySetInnerHTML={{__html:activity?.Description}}/>

                                </div>
                                <div className={Detail.ActivityDate}>
                                    <p>{itemDate.getDate()}/{monthNames[itemDate.getMonth()]}/{itemDate.getFullYear()} {formatAMPM(itemDate)}</p>
                                </div>
                            </div>)
                            })}
                            </>}


                            </div>
                            {/* Active Comment Box STARTING */}
                            <div className={Detail.CommentBox}>
                                <div className={Detail.ActivityBox}>

                                    <div className={Detail.ActivityProfile}>
                                        <h6>{getStrCode(data.salesRepName)}</h6>
                                    </div>
                                    <div className={Detail.ActivityContentImform}>
                                        <textarea placeholder='Add a comment...' rows="4" cols="50"></textarea>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12'>

                        <div className={Detail.RightMainDiv}>

                            <div className={Detail.RightControlStatus}>
                                <h3>Status</h3>
                                <p>{data.Status}</p>
                            </div>

                            <div className={Detail.ControlPriority}>
                                <h3>Priority</h3>
                                <p>
                                    {data.Priority == "High"?<SupportStatusGreen/> :data.Priority == "Medium"?<SupportStatusYellow/>:<SupportStatusRed/>}
                                    {data.Priority} Priority</p>
                            </div>


                            <div className={Detail.ManufactureID}>
                                <h3>Manufacture ID</h3>
                                <p>{data.ManufacturerName__c}</p>
                            </div>

                            <div className={Detail.CaseNumber}>
                                <h3>Case Number</h3>
                                <p>{data.CaseNumber}</p>
                            </div>

                            <div className={Detail.PONumber}>
                                <h3>PO Number</h3>
                                <p>#{data.Associated_PO_Number__c}</p>
                            </div>

                            <div className={Detail.RecordType}>
                                <h3>Record Type</h3>
                                <p>{data.RecordType.Name}</p>
                            </div>



                        </div>

                    </div>




                </div>


            </div>


        </div>
    )
}

export default FullQuearyDetail