
import classes from "../styles/dailystat.module.css";
import tap from "../resources/tap.png"
import DayOverview from "./DayOverview";
import PigDistribution from "./PigDistribution";
import WeekOverview from "./WeekOverview";

const DailyStat = () => {
  return (
    <>
      <div className="col-11 col-xl-9 p-5">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-7">
                <h2 className="text-dark m-0 display-6 fw-bold">
                  Farm Overview
                </h2>
                <small className="text-secondary fw-light">
                  Let's check your status
                </small>
              </div>
              <div className="col-3">
               <img src={tap} width={70} />
              </div>
            </div>
          </div>

          <div className="col-4 d-none d-md-block">
            <div className="rounded-4 d-flex  bg-light">
              <button className="btn text-primary">
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
              <input
                className={
                  classes.searchInput + " text-success fst-italics p-2 border-0"
                }
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <DayOverview />

        <WeekOverview />
        <PigDistribution/>
      </div>
    </>
  );
};

export default DailyStat;
