import { Briefcase, Code, Heart, MapPin } from "lucide-react";
import React from "react";

const JobCard = () => {
  return (
    <div className="min-w-md w-full bg-white rounded-xl shadow-md p-4 space-y-4 hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-2 rounded-lg">
            <Code className="text-white w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Frontend Developer
            </h2>
            <p className="text-sm text-gray-500">TechCorp Solutions</p>
          </div>
        </div>
        <Heart className="text-gray-400 w-5 h-5 cursor-pointer" />
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          React
        </span>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          JavaScript
        </span>
        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
          Remote
        </span>
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>Bangalore</span>
        </div>
        <div className="flex items-center space-x-1">
          <Briefcase className="w-4 h-4" />
          <span>2-4 years</span>
        </div>
        <div className="text-green-600 font-semibold">₹8-12 LPA</div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-300 to-blue-600 text-white text-sm font-medium py-2 rounded-md cursor-pointer hover:from-blue-600 hover:to-purple-600 transition duration-300">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
