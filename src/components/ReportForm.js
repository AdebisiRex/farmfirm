import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useRef } from "react";
import Select from "react-select";

const ReportForm = () => {
  const [array, setarray] = useState([
    { label: "Apples", value: "apples" },
    { label: "oranges", value: "oranges" },
    { label: "grapes", value: "grapes" },
    { label: "pears", value: "pears" },
  ]);
  const [options, setoptions] = useState([]);

  const [selections, setselections] = useState([]);

  let date = new Date().toLocaleDateString();

  let formik = useFormik({
    initialValues: {
      report: "",
      symptoms: "",
      treatment: "",
      animalID: [],
      closeObservation: [],
    },
    onSubmit: (values) => {
      let { animalID } = values;

      // console.log(animalID.split(" "))
      console.log(values);
    },
  });

  return (
    <>
      <div className="">
        <div className="col-11 mx-auto  col-md-8 p-5">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <h3 className="text-secondary fw-bold">Today {date}'s report</h3>
            </div>
            <div className="form-floating mb-3 ">
              <textarea
                className="form-control"
                name="report"
                id="report"
                onChange={formik.handleChange}
              ></textarea>
              <label htmlFor="report">#Report</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                name="symptoms"
                id="symptoms"
                onChange={formik.handleChange}
              ></textarea>
              <label htmlFor="symptoms">Symptoms Observed</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                name="treatment"
                id="treatment"
                onChange={formik.handleChange}
              ></textarea>
              <label htmlFor="treatment">Treatment Administered</label>
            </div>

            <div className="mb-3">
              <div className="form-floating ">
                <Select
                  isClearable={true}
                  isSearchable={true}
                  className="form-control border-0"
                  onChange={(item) => setselections(item)}
                  isMulti
                  options={array}
                />

                <label htmlFor="animalID">Animals Affected #TagID</label>
              </div>
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="closeObservation"
                onChange={formik.handleChange}
                role="switch"
              />
              <label className="form-check-label">Close Observation</label>
            </div>

            <button className="btn btn-success form-control btn-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportForm;
