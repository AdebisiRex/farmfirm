import React from "react";
import { Routes, Route } from "react-router-dom";
import AddAnimal from "./pages/AddAnimal";
import AnimalPreview from "./pages/AnimalPreview";
import DailyReport from "./pages/DailyReport";

import FarmDashboard from "./pages/FarmDashboard";
import LoginPage from "./pages/LoginPage";

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
        <Route path="/preview" element={<AnimalPreview/>} />
        <Route path="/addanimal" element={<AddAnimal/>} />
        <Route path="/signin" element={<LoginPage/>} />
        
      </Routes>
    </>
  );
}

export default App;
