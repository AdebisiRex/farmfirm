import React from "react";
import square from "../resources/square.png";
import logo from "../resources/logoalone.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="col-10 mx-auto">
          <div className="containter">
            <div className="row g-2 align-items-center py-5">
              <div className="col-12 col-md-3 text-center">
                <img src={square} width={200} className="" alt="" />
              </div>
              <div className="col-12 col-md-3">
                <p className="fw-bold">Company</p>
                <p className="">About us</p>
                <p className="">Contact us</p>
                <p className="">Team</p>
                <p className="">Careers</p>
              </div>
              <div className="col-12 col-md-3">
                <p className="fw-bold">Our Services</p>
                <p className="">Farm Inventory</p>
                <p className="">Investment</p>
                <p className="">Projection Data</p>
                <p className="">Firm </p>
              </div>
              <div className="col-12 col-md-3 text-white">
                <div className="card bg-primary p-4 ">
                  <p className="fw-bold">Blog us</p>
                  <small className="mb-3">
                    Send an email to{" "}
                    <span className="fw-bold">mail@firmfarm.com</span>
                  </small>
                  <button className="btn btn-light">
                    <img src={logo} alt="" width={25} /> Send Mail
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center font-monospace text-success mb-3">
              Developed by RexWrecks Codes
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
