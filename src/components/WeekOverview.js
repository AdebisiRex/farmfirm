import React from "react";
import classes from "../styles/dailystat.module.css";

const WeekOverview = () => {
  return (
    <>
      <div  className={
          classes.dailyFlex + "  bg-primary bg-gradient rounded-4 p-2 shadow-sm mb-3"}>
        <div className={classes.dateContainer}>
          <div className="col-2 h-100">
            <div
              className={
                classes.date +
                " text-center ms-2 bg-light   p-3 h-100 rounded-3 shadow"
              }
            >
              <small className={classes.smallText + " d-none d-sm-block"}>Week </small>
              <h5 className="fw-bold m-0">23</h5>
              <small className={classes.smallText +" d-none d-sm-block"}>2022</small>
            </div>
          </div>
        </div>
        <div className="row align-items-center  w-100 ">
        <div className="col-4 text-center border-end ">
          <small className={classes.smallText}>Start Animals</small>
          <div>
            <h5 className={classes.smallText +" fw-bold m-0"}>23</h5>
          </div>
        </div>
        <div className="col-5  ">
          <small className={classes.smallText}>Food Inventory</small>
          <input className="form-range" type="range" />
          <small className={classes.smallText}>12:00pm </small>
        </div>
        <div className="col-3 ">
          <small className={classes.smallText}>Issues</small>
          <p className={classes.smallText + " m-0 fw-bold"}>Menigitis</p>
          <small className={classes.smallText}>Check details ...</small>
        </div>
        </div>
      </div>
    </>
  );
};

export default WeekOverview;
