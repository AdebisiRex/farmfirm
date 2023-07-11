import React from "react";
import classes from "../styles/dailystat.module.css";
import tap from "../resources/tap.png";
import WaterSource from "./WaterSource";

const FarmViewTop = ({obj}) => {
  return (
    <>
      
        <div className="row align-items-center my-5">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-7">
                <h2 className="text-dark m-0 display-6 fw-bold">
                  {obj.farmname}
                </h2>
                <small className="text-secondary fw-light">
                  Let's check your status
                </small>
              </div>
              <div className="col-5">
                <WaterSource waterSource={obj.waterSource}/>
                <img src={tap} width={50} />
              </div>
            </div>
          </div>

          <div className="col-4 d-none d-md-block">
            <div className="rounded-4 d-flex  bg-light">
              <button className="btn text-primary">
                {" "}
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <input
                className={
                  classes.searchInput + " text-success fst-italics p-2 border-0"
                }
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default FarmViewTop;
