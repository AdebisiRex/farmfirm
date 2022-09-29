import React from "react";
import classes from "../styles/dailystat.module.css";

const WeekOverview = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="col-9 rounded-4 bg-primary  bg-gradient shadow-sm p-2">
          <div className="row align-items-center h-100">
            <div className="col-2 h-100">
              <div
                className={
                  classes.date +
                  " text-center  bg-gradient rounded-3 bg-light py-3 h-100 shadow"
                }
              >
                <small className="">Week </small>
                <h5 className="fw-bold m-0">23</h5>
                <small className="">2022</small>
              </div>
            </div>
            <div className="col-4 border-end p-2">
              <small>Start Animals</small>
              <div>
                <h5 className="fw-bold m-0">23</h5>
              </div>
            </div>
            <div className="col-3 p-2 ">
              <small className="">Food Inventory</small>
              <input className="form-range" type="range" />
              <small>12:00pm </small>
            </div>
            <div className="col-3 p-2">
              <small>Current Issues</small>
              <p className="m-0 fw-bold">Menigitis</p>
              <small>Check details ...</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekOverview;
