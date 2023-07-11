import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DailyStat from "../components/DailyStat";
import FarmSideNav from "../components/FarmSideNav";
import FarmTopNav from "../components/FarmTopNav";
import ThisComp from "../components/ThisComp";
import UpcomingSchedule from "../components/UpcomingSchedule";
import UserDetails from "../components/UserDetails";

const FarmDashboard = () => {
  let navigate = useNavigate()
  const [farmObj, setfarmObj] = useState({})
  useEffect(()=>{
    let dashboardEndpoint = "http:/localhost:5252/user/dashboard"
    let token = localStorage.sessionToken
    let id= localStorage.sessionID
    // axios.get(dashboardEndpoint, {
    //   headers: {
    //           "Authorization":`Bearer ${token} ${id}`,
    //           "Content-Type":"application/json",
    //           "Accept":"application/json"
    //       }
    // } ).then((response)=>{
      // if(response.data.status){
      //   setfarmObj(response.data.userObject); 
      // }else{
      //   navigate('/signin')
      // }

    //   console.log(response  )

    // })
  },[])
  return (
    <>
  
      <FarmTopNav />
      <div className="d-flex">
        <div>
          <FarmSideNav />
        </div>
        <div className="container-lg">
          <div className="row mb-3">
            <DailyStat obj={farmObj} />
            <UserDetails/>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmDashboard;
