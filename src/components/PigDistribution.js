import React from "react";
import classes from "../styles/dailystat.module.css";

const PigDistribution = () => {
  return (
    <>
      <div className="mb-4 rounded-4 bg-primary  bg-gradient shadow-sm p-2">
        <div className="row align-items-center h-100">
          <div className="col-3">
            <div className="p-2 text-center">
              <small>Total </small>
              <h2>87</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="p-2 text-center">
              <small>Boar </small>
              <h2>15</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="p-2 text-center">
              <small>Sow </small>
              <h2>51</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="p-2 text-center">
              <small>Piglets </small>
              <h2>21</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PigDistribution;
