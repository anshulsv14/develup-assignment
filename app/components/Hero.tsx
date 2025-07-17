import Head from "next/head";
import React from "react";
import Heading from "./Heading";
import HeroTab from "./HeroTab";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="min-h-[500px] bg-gradient-to-r from-sky-100 to-white-600 pt-16 m-auto">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto py-10 px-4">
        
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <HeroTab />
            <Heading
              className="text-4xl sm:text-5xl md:text-6xl lg:!text-8xl leading-tight lg:leading-[90px] text-left !mb-0"
              heading={[
                { text: "Learn.", color: "text-black" },
                { text: " Earn. ", color: "text-blue-600" },
                { text: "Level", color: "text-black" },
                { text: "Up.", color: "text-blue-700" },
              ]}
            />
            <p className="text-base sm:text-lg md:text-xl leading-[30px] text-gray-600 font-sora font-normal">
              Don't chase jobs! Build skills, get hired.
            </p>
            <SearchBar />
          </div>
        </div>

       
        <div className="hidden lg:flex justify-end relative">
          <img
            className="h-[450px]"
            src="/assets/Hero/heroimage.png"
            alt="hero"
          />
          <img
            className="absolute top-16 left-40 h-[80px] w-auto"
            src="/assets/Hero/hero-card-1.png"
            alt="card1"
          />
          <img
            className="absolute bottom-10 left-52 h-[90px] w-auto"
            src="/assets/Hero/hero-card-2.png"
            alt="card2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

