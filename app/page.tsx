import React from "react";
import ResumeBuilderBanner from "./components/ResumeBuilderBanner";
import Features from "./components/Features";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";
import Recruitment from "./components/Banner";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Companies from "./components/Companies";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features />
      <ResumeSection />
      <ResumeBuilderBanner />
      <Courses/>
      <Companies/>
      <Banner />
      <Footer />

     

     
      
    </div>
  );
};

export default page;
