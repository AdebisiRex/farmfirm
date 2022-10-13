import React from "react";
import DailyStat from "../components/DailyStat";
import FarmSideNav from "../components/FarmSideNav";
import FarmTopNav from "../components/FarmTopNav";
import UpcomingSchedule from "../components/UpcomingSchedule";
import UserDetails from "../components/UserDetails";

const FarmDashboard = () => {
  return (
    <>
      <FarmTopNav />
      <div className="d-flex">
        <div>
          <FarmSideNav />
        </div>
        <div className="container-lg">
          <div className="row mb-3">
            <DailyStat />
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
