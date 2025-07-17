import React from "react";
import CourseCard from "./CourseCard";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import Button from "./Button";

const Courses = () => {
  const coursebuttondata = [
    {
      text: "All courses",
      className: "bg-gradient-to-r from-blue-300 to-blue-600",
    },
    {
      text: "Technology",
      className: "bg-transparent !text-black"
    },
    {
      text: "Design",
      className: "bg-transparent !text-black"
    },
    {
      text: "Marketing",
      className: "bg-transparent !text-black"
    },
    {
      text: "Business",
      className: "bg-transparent !text-black"
    },
  ];

  const coursesdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Heading
          heading={[
            { text: "Skill", color: "black" },
            { text: "UP", color: "text-blue-400" },
            { text: " to ", color: "black" },
            { text: "Level", color: "black" },
            { text: "UP", color: "text-blue-400" },
          ]}
        />
        <div className="flex justify-center">
          <h2 className="text-[20px] max-w-[696px]  text-gray-500 font-normal text-center">
            Discover opportunities that match your skills and aspirations with
            our AI-powered job matching system.
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-9 mb-9">
          {coursebuttondata.map((item, index) => (
            <Button text={item.text} className={item?.className} key={index} />
          ))}
        </div>
      <Marquee pauseOnHover>
        <div className="flex gap-6 py-8">
          {coursesdata.map((item, index) => {
            return <CourseCard key={index} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Courses;
