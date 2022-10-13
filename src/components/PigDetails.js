import React from "react";
import LineChart from "./LineChart";

const PigDetails = ({ classes }) => {
  let moreStyle =
    " p-2 w-100  rounded-3 border-bottom border-end border-3 border-success shadow-sm bg-light mb-3 text-primary";
  return (
    <>
      <div className="mb-4">
        <div className="row">
          <div className="col-12 col-md-8 p-3 rounded-4 shadow-sm">
            <LineChart />
          </div>
          <div className={classes.details + " col-md-4 col-12"}>
            <h4 className="fw-bold">More Information</h4>

            <div className={classes.parent + moreStyle}>DOB: 22/03/2022</div>
            <div className={classes.parent + moreStyle}>Offsprings</div>
            <div className={classes.parent + moreStyle}>Production Cycle</div>
            <div className={classes.parent + moreStyle}>Health Data</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PigDetails;
