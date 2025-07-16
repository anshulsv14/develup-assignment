import React from "react";
import { FiClock, FiUsers } from 'react-icons/fi';
const ResumeBuilderBanner = () => {
  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="flex justify-center mt-10 mb-10 px-4">
  <img
    className="w-full max-w-[584px] h-auto"
    src="/assets/img.png"
    alt="Descriptive alt text"
  />
</div>
        <div className="mt-[20px]">
        <div className="font-bold text-black text-[36px] leading-[40px] max-w-[500px] tracking-[0%]">
          Create a job-winning resume in
          <span className="font-sora text-blue-400 font-bold text-[36px] leading-[40px] tracking-[0]">
            {" "}
            2 minutes{" "}
          </span>
        </div>
        <div>
          <p className="text-[16px] leading-[24px] text-gray-600 max-w-[500px] mt-[30px] mb-[30px]">
            Our AI-powered resume builder helps you create professional resumes
            that get noticed by employers. Choose from multiple templates and
            get instant feedback.
          </p>
          <div className="mb-[30px]">
            <div className="flex text-black mt-[20px]"><img className="h-[16px] w-[16px] mr-[10px] mt-[3px]" src="/assets/r1.png " alt="" /> Professional templates</div>
            <div className="flex text-black mt-[10px]"><img className="h-[16px] w-[16px] mr-[10px] mt-[3px]" src="/assets/r1.png " alt="" /> AI-powered suggestions</div>
            <div className="flex text-black mt-[10px]"><img className="h-[16px] w-[16px] mr-[10px] mt-[3px]" src="/assets/r1.png " alt="" /> ATS-friendly formats</div>
           
          </div>
          <div>
            <button className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-8 py-3 rounded mt-4 hover:from-blue-600 hover:to-purple-600 transition duration-300">
  Try Resume Builder
</button>
          </div>
        </div>
        </div>
      </div>
      


    



    </>
  );
};

export default ResumeBuilderBanner;
