import React from 'react'
import classes from "../styles/dailystat.module.css";



const DayOverview = () => {
  return (
    <>
    <div className="row mb-4">
          <div className="col-9 rounded-4 bg-success  bg-gradient shadow-sm p-2">
            <div className="row align-items-center h-100">
              <div className="col-2 h-100">
                <div
                  className={
                    classes.date +
                    " text-center  bg-gradient rounded-3 bg-light py-3 h-100 shadow"
                  }
                >
                  <small className="">Today </small>
                  <h5 className="fw-bold m-0">18</h5>
                  <small className="">Sept </small>
                </div>
              </div>
              <div className="col-4 border-end p-2">
                <small>Available Animals</small>
                <div>
                  <h5 className="fw-bold m-0">23</h5>
                </div>
              </div>
              <div className="col-3 p-2">
                <small className="">Upcoming Event</small>
                <p className="m-0 fw-bold">Feeding</p>
                <small>12:00pm </small>
              </div>
              <div className="col-3 p-2">
                <small>Close observation</small>
                <p className="m-0 fw-bold">8</p>
                <small>Check details ...</small>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default DayOverview