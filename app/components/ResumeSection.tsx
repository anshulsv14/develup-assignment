import React from "react";
import { MapPin, Briefcase, Heart, Code } from "lucide-react";

import Button from "./Button";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import JobCard from "./JobCard";
const ResumeSection = () => {
  const filterdata = [
    {
      text: "All Jobs",
      className: "bg-sky-400",
    },
    {
      text: "Remote",
    },
    {
      text: "Full-time",
    },
    {
      text: "Fresher",
    },
    {
      text: "Experienced",
    },
  ];
  const jobdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div className="bg-slate-50 p-8">
        <div>
          <Heading
            heading={[{ text: "Find Your Dream Job", color: "text-black" }]}
          />
          <div className="flex justify-center">
            <h2 className="text-[20px] max-w-[696px] mt-[25px] text-gray-500 font-normal text-center">
              Discover opportunities that match your skills and aspirations with
              our AI-powered job matching system.
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-9 mb-9">
          {filterdata.map((item, index) => (
            <Button text={item.text} className={item?.className} key={index} />
          ))}
        </div>

        <Marquee pauseOnHover>
        <div className="flex gap-6 py-8 ">
          {jobdata.map((item, index) => {
            return <JobCard key={index} />;
          })}
        </div>
      </Marquee>
        
        
      </div>
    </>
  );
};

export default ResumeSection;
