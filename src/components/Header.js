import React from "react";
import classes from "../styles/header.module.css";
const Header = () => {
  return (
    <>
      <div className={classes.side + " container-fluid"}>
        <div className="row vh-100  align-items-center">
          <div className="col-12 col-md-6">
            <div className="container ">
              <div className={classes.smallwhite + " mx-auto col-10 py-5 p-3"}>
                <h1 className="text-primary display-5 lh-2 fw-bolder">
                  An efficient way to keep records of your farm{" "}
                </h1>
                <p className="lh-2 my-3 ">
                  FirmFarm provides farmers with online real-time record keeping
                  platform which can be used for projections and therefore
                  favourable loan applications and investmetn{" "}
                </p>
                <button className="btn btn-primary text-white px-4 mt-3">Join Now</button>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
