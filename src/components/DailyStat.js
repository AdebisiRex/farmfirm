import classes from "../styles/dailystat.module.css";
import tap from "../resources/tap.png";
import DayOverview from "./DayOverview";
import PigDistribution from "./PigDistribution";
import WeekOverview from "./WeekOverview";
import Weather from "./Weather";
import FarmViewTop from "./FarmViewTop";

const DailyStat = () => {
  return (
    <>
      <div className="col-12 col-lg-9">
        <FarmViewTop />
        <div className="row">
          <div className="col-12 col-lg-9">
            <DayOverview />

            <WeekOverview />
            <PigDistribution />
          </div>
          <div className="col-12 col-lg-3">
            <Weather classes={classes} />
          </div>
        </div>
      </div>

      
    
      
    </>
  );
};

export default DailyStat;
