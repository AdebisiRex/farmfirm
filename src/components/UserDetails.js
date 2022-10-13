import React from "react";
import classes from "../styles/userdetails.module.css";
const UserDetails = () => {
  return (
    <>
      <div
        className={
          classes.userBackground +
          " d-none position-relative  sticky-top d-lg-block col-3"
        }
      >
        <div className={classes.navigation + " p-3"}>
          <button className="btn text-light">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button className="btn rounded-pill border text-light ">
            <i class="fa fa-comment" aria-hidden="true"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <div className={classes.dp + " "}></div>
        </div>

        <div className={classes.textDisplay + " text-center text-white"}>
          <p className="fw-bold m-0">Tom Halland</p>
          <small className={classes.smallText + " p-0  d-block m-0"}>
            Farm Owner and Manager
          </small>

          <button
            className={
              "btn fw-bold text-primary btn-light my-3 rounded-pill px-4 " +
              classes.smallText
            }
          >
            {" "}
            <i class="fa fa-edit" aria-hidden="true"></i>
            Edit Userdetails
          </button>

          <h2 className={"fs-5 m-0"}>Lagos City, Nigeria</h2>
          <small className={classes.smallText + " p-0 m-0"}>
            Lagos Niger, GMT +1
          </small>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
