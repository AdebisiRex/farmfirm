import React from "react";
import Navbar from "../components/Navbar";
import RegForm from "../components/RegForm";
import RegTopHalf from "../components/RegTopHalf";

const RegistrationPage = () => {
  return(
  <>
  <Navbar edStyle="text-white"/>
  <RegTopHalf/>
  <RegForm/>
  </>) ;
};

export default RegistrationPage;
