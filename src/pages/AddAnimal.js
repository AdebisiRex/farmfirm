import React from "react";
import FarmSideNav from "../components/FarmSideNav";
import FarmTopNav from "../components/FarmTopNav";
import { useFormik } from "formik";
import Select from "react-select";
import axios from "axios";
import * as yup from "yup";

const AddAnimal = () => {
  let formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
      let id= localStorage.sessionID 
      let newObject ={...values,id}
      let endpoint = "http://localhost:5252/pig/addanimal"
      axios.post(endpoint, newObject).then((response)=>{
        
      })
  }});
  return (
    <>
      <FarmTopNav />
      <div className="d-flex">
        <FarmSideNav />
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-7 mx-auto">
              {" "}
              <form onSubmit={formik.handleSubmit}>
                <h5 className="text-secondary fw-bold">Add Animal</h5>
                <p className="m-0">This should be done after 5 days of birth</p>

                <div>
                  <div className="form-floating mb-3">
                    <input
                      id="petname"
                      name="petname"
                      onChange={formik.handleChange}
                      className="form-control"
                      type="text"
                      placeholder="First name"
                    />
                    <label className="form-lable" htmlFor="pigAlias ">
                      Pet Name or Alias
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      id="dob"
                      name="dob"
                      onChange={formik.handleChange}
                      className="form-control"
                      type="date"
                      placeholder="DOB"
                    />
                    <label className="form-lable" htmlFor="farmname">
                      Date of Birth
                    </label>
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="">
                      Birth Weight
                    </label>

                    <input
                      className="form-control"
                      type="number"
                      placeholder="Number"
                      name="pighWeight"
                      onChange={formik.handleChange}
                    />
                    <select
                      name="pigWeightUnit"
                      onChange={formik.handleChange}
                      className="form-select"
                    >
                      <option value="Kilograms">KG</option>
                      <option value="Grams">G</option>
                      <option value="Pounds ">Pounds</option>
                    </select>
                  </div>
                  <div className="d-flex  mb-3">
                    <div className="form-check form-switch me-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        role="switch"
                        name="gender"
                        value="boar"
                        onChange={formik.handleChange}
                      />
                      <label className="form-check-label">Boar </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="radio"
                        role="switch"
                        name="gender"
                        value="sow"
                        onChange={formik.handleChange}
                      />
                      <label className="form-check-label">Sow </label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <Select
                      isClearable={true}
                      isSearchable={true}
                      placeholder="Parent Boar..."
                      className="form-control border-0"
                    />
                    <label className="form-lable" htmlFor="farmname">
                      Parent Boar
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <Select
                      isClearable={true}
                      isSearchable={true}
                      placeholder="Parent Sow..."
                      className="form-control border-0"
                    />
                    <label className="form-lable">Parent Sow</label>
                  </div>
                  <button className="btn btn-primary mt-2 text-white w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnimal;
