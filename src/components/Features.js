import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <>
      <div className="pt-5 ">
        <div className="mx-auto text-center mb-5 col-12 col-md-5">
          <small className="font-monospace text-secondary m-0">
            In Addition to a regular inventory app you get...
          </small>
          <h2 className="fw-bold my-3 ">Our Special Features</h2>
          <p className="text-secondary ">
            Our Aim is to provide you all round coverage of you farm which you
            can get from anywhere at anytime to help in securing finances for
            your farm{" "}
          </p>
        </div>
        <div className="container mb-4">
          <div className="col-12 col-lg-9 mx-auto">
            <div className="row g-5">
              <FeaturesCard title="Alarm" text="Calender Progammed Alerts to remind you times  feeding and medication schedules for your" edstyle= ""/>
              <FeaturesCard title="Available 24/7" text="The internet is available 24/7, why not your farm records on you palm everywhere you go." edstyle= "bg-primary text-white"/>
              <FeaturesCard title="Monitoring" text="We have an inventory monitoring mechanism for all your purchased food and drugs" edstyle= " "/>
              <FeaturesCard title="Charts" text="Animal Weight Charts from birth to slaughter, to provide you a good basis for comparison and projection" edstyle= "bg-primary text-white"/>
              <FeaturesCard title="Projections" text="Banking standard data projection to provide you a good basis for loan application and collateral size" edstyle= " "/>
              <FeaturesCard title="Charts" text="Animal Weight Charts from birth to slaughter, to provide you a good basis for comparison and projection" edstyle= "bg-primary text-white"/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
