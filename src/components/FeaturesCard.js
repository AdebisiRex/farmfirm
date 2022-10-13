import React from "react";

const FeaturesCard = ({title, text, edstyle}) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4">
        <div className={edstyle + " card  bg-gradient border py-5 shadow-sm"}>
          {/* <img src={props.image} className="card-img-top bg-light" alt="" /> */}
          <div className="card-body">
            <h5 className="card-title fw-bold mb-3">{title}</h5>
            <small className="card-text">{text}</small>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FeaturesCard;
