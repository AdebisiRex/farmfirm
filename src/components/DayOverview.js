import React from "react";
import classes from "../styles/dailystat.module.css";
import LineChart from "./LineChart";

const DayOverview = () => {
  return (
    <>
      <div
        className={
          classes.dailyFlex +
          "  bg-success bg-gradient rounded-4 p-2 shadow-sm mb-3"
        }
      >
        <div className={classes.dateContainer}>
          <div className="col-2 h-100">
            <div
              className={
                classes.date +
                " text-center ms-2 bg-light   p-3 h-100 rounded-3 shadow"
              }
            >
              <small className={classes.smallText + " d-none d-sm-block"}>Today </small>
              <h5 className="fw-bold m-0">18</h5>
              <small className={classes.smallText + " d-none d-sm-block"}>Sept </small>
            </div>
          </div>
        </div>
        <div className="row w-100 align-items-center ">
          <div className="col-6 text-center border-end">
            <small className={classes.smallText}>Available Animals</small>
            <div className="row align-items-center ">
              <div className="col-10 d-none d-md-block ">
                <LineChart />
              </div>
              <div className="col-12 py-3 col-md-2  text-center">
                <h5 className={classes.smallText + " fw-bold m-0"}>23</h5>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <small className={classes.smallText}>Events</small>
            <p className={classes.smallText + " m-0 fw-bold"}>Cleaning</p>
            <small className={classes.smallText}>12:00pm </small>
          </div>
          <div className="col-3 ">
            <small className={classes.smallText}>Observation</small>
            <p className={classes.smallText + " m-0 fw-bold"}>8</p>
            <small className={classes.smallText}>Check details</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayOverview;
