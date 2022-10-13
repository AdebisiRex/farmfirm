import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegForm from "../components/RegForm";
import RegTopHalf from "../components/RegTopHalf";

const RegistrationPage = () => {
  return(
  <>
  <Navbar edStyle="text-white"/>
  <RegTopHalf/>
  <RegForm/>
  <Footer/>
  </>) ;
};

export default RegistrationPage;
