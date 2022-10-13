import React from "react";
import pig from "../resources/pig head.png";
import pigmale from "../resources/male.png";
import pigFemale from "../resources/female.png";
import FarmSideNav from "./FarmSideNav";
import FarmTopNav from "./FarmTopNav";

const PigOverviewTop = ({ classes }) => {
  return (
    <div className="container mb-3">
      <div className="row align-items-center">
        <div className="col-2">
          <img alt="Illustration of a Pig" src={pig} width={70} />
        </div>

        <div className="col-7 px-4">
          <h2 className="text-dark m-0 display-6 fw-bold text-secondary">
            Meet Benny...
          </h2>
          <small className="text-secondary fw-light">PGFARM-127DPI53HIT</small>
        </div>
        <div className="col-3">
          <img
            alt="Illustration of a Boar"
            className={
              classes.parent +
              " shadow-sm me-1 rounded-pill bg-success bg-gradient"
            }
            src={pigmale}
            width={55}
          />
          <img
            alt="Illustration of a Soar"
            className={
              classes.parent +
              " shadow-sm me-1 rounded-pill bg-info bg-gradient"
            }
            src={pigFemale}
            width={55}
          />
        </div>
      </div>
    </div>
  );
};

export default PigOverviewTop;
