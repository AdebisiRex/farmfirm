import classes from "../styles/testimonial.module.css";

const Testimony = ({ name, email, company, comment, image }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className={classes.testimony + " card border-0 shadow-sm p-3"}>
          <div className="row align-items-center">
            <div className="col-3">
              <img src={image} className={classes.image + " shadow-sm"} alt="" />
            </div>
            <div className="col-9">
              <p className="m-0 text-primary fw-bold">{name} </p>
              <small className={classes.smallText + " fw-bold d-block"}>{email}</small>
              <small className="text-info">{company}</small>
            </div>
          </div>
          <hr />
          <div>
            <small className={classes.smallText}>
              {comment}
              Iusto doloremque animi eaque, fuga velit asperiores?
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
