import React from "react";
import { Link } from "react-router-dom";
import justLogo from "../resources/logoalone.png";
import classes from "../styles/navbar.module.css";

const FarmSideNav = () => {
  return (
    <>
      <div
        style={{ width: "70px" }}
        className={
          classes.nav_position +
          " d-none d-md-block vh-100 sticky-top py-4 shadow-sm"
        }
      >
        <div className=" d-flex flex-column justify-content-center">
          <div className="d-block m-auto ">
            <Link className="navbar-brand" to="/">
              <img src={justLogo} height={60} alt="" />
            </Link>

            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#farmDashNav"
              aria-controls="farmDashNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=" navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className={
              classes.collapseBack +
              " collapse navbar-collapse flex-column  w-100 mt-5 justify-items-center"
            }
            id="farmDashNav"
          >
            <div className="text-center  mb-3 p-3">
              <Link className="nav-link text-primary fw-bold" to="#">
                <i class="fa fa-dashboard" aria-hidden="true"></i> 
              </Link>
            </div>
            <div className="text-center  mb-3 p-3">
              <Link className="nav-link text-secondary" to="#">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="text-center  mb-3 p-3">
              <Link className="nav-link" to="#">
                <i className="fa fa-address-card-o" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="text-center  mb-3 p-3">
              <Link className="nav-link" to="#">
                <i className="fa fa-shower" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="text-center  mb-3 p-3">
              <Link className="nav-link" to="#">
                <i className="fa fa-random" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmSideNav;
