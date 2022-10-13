import React from "react";
import FarmSideNav from "../components/FarmSideNav";
import FarmTopNav from "../components/FarmTopNav";
import FarrowingSchedule from "../components/FarrowingSchedule";
import HealthSchedule from "../components/HealthSchedule";
import PigDetails from "../components/PigDetails";
import PigOverviewTop from "../components/PigOverviewTop";
import classes from "../styles/animalpreview.module.css";

const AnimalPreview = () => {
  return (
    <>
      <FarmTopNav />
      <div className="d-flex">
        <FarmSideNav />
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-md-8  ">
              <PigOverviewTop classes={classes} />
              <PigDetails classes={classes} />

              <div className="row">
                <div className="col-12 col-md-6">
                  <FarrowingSchedule />
                </div>
                <div className="col-12 col-md-6">
                  <HealthSchedule />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalPreview;
