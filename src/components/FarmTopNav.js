import React from "react";
import { Link } from "react-router-dom";
import justLogo from "../resources/logoalone.png";
import classes from "../styles/navbar.module.css";

const FarmTopNav = () => {
  return (
    <>
      <nav className="navbar d-md-none sticky-top bg-light shadow-sm mb-3  navbar-expand-md px-1 p-0 w-100">
        <div className="container-fluid p-0 position-relative ">
          <Link className="navbar-brand mx-md-3 " to="/">
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
          <div
            className={classes.dashBack + " collapse navbar-collapse text-center"}
            id="farmDashNav"
          >
            <div className="me-auto">
              <ul className={" navbar-nav"}>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link text-primary fw-bold" to="#">
                    <i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard
                  </Link>
                </li>
                <li className={" nav-item mx-md-2"}>
                  <Link className="nav-link text-secondary" to="#">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Calender
                  </Link>
                </li>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i> Schedule
                  </Link>
                </li>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    <i className="fa fa-shower" aria-hidden="true"></i> Update
                  </Link>
                </li>

                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    <i className="fa fa-random" aria-hidden="true"></i> Random
                  </Link>
                </li>
                <li className="nav-item me-md-2"></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FarmTopNav;
