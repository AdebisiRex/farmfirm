import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useNavigate } from "react";
import classes from "../styles/regform.module.css";
import classics from "../styles/register.module.css";
import Navbar from "../components/Navbar";
import axios from "axios";

const LoginPage = () => {
  let navigate = useNavigate(); 
  const [message, setmessage] = useState("")
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
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Input must be an email")
        .required("Email field is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      let logInEndpoint= "http://localhost:5252/user/signin"
      axios.post(logInEndpoint, values).then((response )=>{
       if(response.data.status){
        localStorage.sessionToken = response.data.sessionToken;
        localStorage.sessionID = response.data.id
        setmessage(response.data.message);
        navigate("/farm-daashboard")
        
       }else{
        setmessage(response.data.message)
       }
      }).catch((err)=>{
        setmessage("There's been an error, restart your server")
      })
    },
  });
  
  return (
    <>
      <Navbar />

      <div className={classics.loginTop + " text-center row"}>
        <div className="mt-5 col-10 mx-auto pt-5">
          <small className="font-monospace text-secondary fw-bold mb-3">
            WELCOME BACK
          </small>
          <h2 className="fw-bold text-white mt-3">
            We've missed you, the animals do too{" "}
          </h2>
        </div>
      </div>

      <div
        className={
          classes.regbackground + " col-12 col-md-9 col-lg-9 mb-5 mx-auto"
        }
      >
        <div className="p-5 bg-gradient">
          {message ? (
            <div className="alert alert-danger">{message}</div>
          ) : (
            <></>
          )}

          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <legend className="text-primary">Login to your Account</legend>

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

            </fieldset>
            {formik.errors.email !== undefined?<button type="button" className="btn btn-danger w-100 btn-lg text-white"> Log in</button>:<button className="btn btn-success w-100 btn-lg text-white"> Log in</button>}
            
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
