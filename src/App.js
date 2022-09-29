import React from "react";
import { Routes, Route } from "react-router-dom";
import DailyReport from "./pages/DailyReport";

import FarmDashboard from "./pages/FarmDashboard";
import RegistrationPage from "./pages/RegistrationPage";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dailyreport" element={<DailyReport />} />
        <Route path="/farm-dashboard" element={<FarmDashboard/>} />
      </Routes>
    </>
  );
}

export default App;
