import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Button from "./Button";

const Banner = () => {
  const bannerdata = [
    {
      text: "Start Hiring now",
      className: "bg-sky-400 mt-[20px]",
    }
  ];
  return (
    <div className="max-w-[1200px] mx-auto px-4 my-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="pl-20">
        <p className="text-lg font-medium text-black/80 mb-[18px]">
          Are you a recruiter?
        </p>
        <div>
         <h1 className="font-sora font-bold text-black text-[48px] leading-[40px] tracking-[0] text-center mb-[15px]">Hire Smarter. Faster. </h1>
         <span className="font-sora font-bold text-black text-[48px] leading-[40px] tracking-[0] text-center mb-[15px]">with</span> <span className="font-bold text-blue-500 text-[48px] leading-[40px] tracking-[0] text-center mb-[15px]">DevelUP.</span>
        </div>
          {bannerdata.map((item, index) => (
            <Button text={item.text} className={item?.className} key={index} />
          ))}
        </div>
        <div className="mt-6  md:mt-0 md:ml-6">
          <Image
            src="/assets/recruiterimage.png"
            alt="Recruiter team"
            width={220}
            height={160}
            className="object-contain ml-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
