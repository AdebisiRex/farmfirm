import React from "react";
import Geo from "./Geo";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import classes from "../styles/regform.module.css";

const RegForm = () => {
  const [passwordType, setpasswordType] = useState("password");
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setpasswordType("text");
    } else {
      setpasswordType("password");
    }
  };
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      rPassword: " ",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("Firstname is required"),
      lastname: yup.string().required("Lastname is required"),
      email: yup
        .string()
        .email("Input must be an email")
        .required("Email field is required"),
      password: yup
        .string()
        .matches(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-zA-Z]).*$/,
          "Password must contain 8+ characters, at least One number and at least one UPPERCASE letter"
        )
        .required("Password is required"),
      rPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div
        className={
          classes.regbackground + " col-12 col-md-9 col-lg-9 mb-5 mx-auto"
        }
      >
        <div className="p-5 bg-gradient shadow">
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <legend className="text-primary">User Information</legend>
              <div className="form-floating mb-3">
                <input
                  id="firstname"
                  name="firstname"
                  className={
                    formik.errors.firstname && formik.touched.firstname
                      ? "form-control is-invalid "
                      : " form-control"
                  }
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="First name"
                />
                <label className="form-label" htmlFor="firstname">
                  First name
                </label>
                {formik.errors.firstname && formik.touched.firstname ? (
                  <div className="form-text text-danger">
                    {formik.errors.firstname}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  id="lastname"
                  name="lastname"
                  className={
                    formik.errors.lastname && formik.touched.lastname
                      ? "form-control is-invalid "
                      : " form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Last name"
                />
                <label className="form-lable" htmlFor="lastname">
                  Last name
                </label>
                {formik.errors.lastname && formik.touched.lastname ? (
                  <div className="form-text text-danger">
                    {formik.errors.lastname}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" form-floating mb-3">
                <input
                  id="email"
                  name="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid "
                      : " form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  placeholder="youraddress@sample.com"
                />
                <label className="form-lable" htmlFor="email">
                  Email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <div className="form-text text-danger">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="position-relative form-floating mb-3">
                <input
                  id="password"
                  name="password"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid "
                      : " form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={passwordType}
                  placeholder="PaSSword@1234"
                />
                <label className="form-lable" htmlFor="border">
                  Password
                </label>

                <button
                  onClick={(e) => togglePassword(e)}
                  className={
                    classes.buttonPosition +
                    " btn text-success position-absolute"
                  }
                >
                  {passwordType === "password" ? (
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  )}
                </button>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="form-text text-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
              <div className="form-text mb-3">
                * at least 1 numbers <br />
                * at least 1 UPPERCASE letter <br />
                * at least 1 symbol <br />* at least 8 characters
              </div>

              <div className="form-floating position-relative mb-3">
                <input
                  id="rPassword"
                  name="rPassword"
                  className={
                    formik.errors.rPassword && formik.touched.rPassword
                      ? "form-control is-invalid "
                      : " form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={passwordType}
                  placeholder="PaSSword@1234"
                />
                <label className="form-label" htmlFor="rPassword">
                  Re-Type Password
                </label>

                <button
                  onClick={(e) => togglePassword(e)}
                  className={
                    classes.buttonPosition +
                    " btn text-success position-absolute"
                  }
                >
                  {passwordType === "password" ? (
                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  )}
                </button>

                {formik.errors.rPassword && formik.touched.rPassword ? (
                  <div className="form-text text-danger">
                    {formik.errors.rPassword}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </fieldset>
            <hr />

            <p className="fw-bold ">
              <span className="text-info">NB:</span> This section, we get some
              primary information about the farm, please provide accurate
              information, any discrepancy can lead to disqualification of loan
              applications
            </p>
            <fieldset>
              <legend className="text-primary">Farm Information</legend>
              <div className="form-floating mb-3">
                <input
                  id="farmname"
                  name="farmname"
                  onChange={formik.handleChange}
                  className="form-control"
                  type="text"
                  placeholder="First name"
                />
                <label className="form-lable" htmlFor="farmname">
                  Farm Name
                </label>
                <div className="form-text">
                  This name will be visible to potential investors in future
                </div>
              </div>
              <div className="mb-3">
                <label className="form-lable" htmlFor="">
                  Address
                </label>
                <input
                  name="address"
                  onChange={formik.handleChange}
                  className="form-control mb-1"
                  type="text"
                  placeholder="Address Line 1"
                />
                <Geo />
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-floating w-100 col-12 col-md-6 mb-3">
                    <input
                      id="size"
                      name="noOfPens"
                      className="form-control"
                      type="number"
                      placeholder="No. of Pens"
                      onChange={formik.handleChange}
                    />
                    <label className="" htmlFor="size">
                      No of pens
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="">
                      Plot Size
                    </label>

                    <input
                      className="form-control"
                      type="number"
                      placeholder="Number"
                      name=" plotSize "
                      onChange={formik.handleChange}
                    />
                    <select name="sizeUnit" onChange={formik.handleChange} className="form-select">
                      <option value="Plots">Plots</option>
                      <option value="Acres">Acres</option>
                      <option value="Hectars ">Hectares</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="Form-label" htmlFor="">
                  Water Source
                </label>
                <select
                  onChange={formik.handleChange}
                  name="waterSource"
                  className="form-select"
                >
                  <option value="Well with plumbing System">Well with plumbing System</option>
                  <option value="Well, Manual Fetching">Well, Manual Fetching</option>
                  <option value="Borehole System">Borehole System</option>
                  <option value="River">River</option>
                </select>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="waterAvailability"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label">Available on Farm</label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="safeWater"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label">
                  Protected from intruders
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  name="personalUse"
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label">
                  This water source is used only by the farm
                </label>
              </div>
            </fieldset>
            {
              <button className="btn btn-lg text-light btn-primary w-100 mt-3">
                Submit
              </button>
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default RegForm;
