import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Investment from "../components/Investment";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

const Welcome = () => {
  return (
    <>
      <Navbar edStyle="" />
      <Header />
      <Features />
      <Investment />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Welcome;
