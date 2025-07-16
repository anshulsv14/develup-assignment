import Head from "next/head";
import React from "react";
import Heading from "./Heading";
import HeroTab from "./HeroTab";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="min-h-[500px] bg-gradient-to-r pt-[4rem] from-sky-100 to-white-600 m-auto ">
      <div className="max-w-7xl grid grid-cols-2  gap-4 m-auto py-10 ">
        <div className="flex items-center">
          {" "}
          <div className="flex flex-col gap-6">
            <HeroTab />
            <Heading
              className="!text-8xl leading-[90px] text-left !mb-0"
              heading={[
                { text: "Learn.", color: "text-black" },
                { text: " Earn. ", color: "text-blue-600" },
                { text: "Level", color: "text-black" },
                { text: "Up.", color: "text-blue-700" },
              ]}
            />
            <p className="text-[20px] leading-[30px] text-gray-600 font-sora font-normal ">
              Don't chase jobs! Build skills, get hired.
            </p>
            <SearchBar />
          </div>
        </div>
        <div className="flex justify-end relative ">
          <img
            className="h-[450px]"
            src="/assets/hero/heroimage.png"
            height={undefined}
            alt=""
          />
          <img
            className="absolute top-15 left-40 h-[80px] w-auto"
            src="/assets/hero/hero-card-1.png"
            height={undefined}
            alt=""
          />
          <img
            className="absolute bottom-10 left-50 h-[90px] w-auto"
            src="/assets/hero/hero-card-2.png"
            height={undefined}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
