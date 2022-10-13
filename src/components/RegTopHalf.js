import React from "react";
import classes from "../styles/register.module.css";

const RegTopHalf = () => {
  return (
    <>
      <div className={classes.regTop + " text-center row"}>
        <div className="mt-5 col-10 mx-auto pt-5">
            <small className="font-monospace text-secondary fw-bold mb-3">WE ARE GLAD TO SHOW YOU AROUND</small>
          <h2 className="fw-bold text-white mt-3">
            Join our League of Visionaries{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default RegTopHalf;
