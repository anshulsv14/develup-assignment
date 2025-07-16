import { FiClock, FiUsers } from "react-icons/fi";

const CourseCard = () => {
  return (
    <div className="max-w-xs rounded-2xl bg-white shadow-md p-5 relative overflow-hidden border border-gray-100 hover:scale-105 transition-all duration-300">
      <div className="absolute top-4 right-4 text-blue-500 font-semibold text-sm">
        ₹2,999
      </div>

      <p className="text-sm font-medium text-gray-500">Verified Badge</p>

      <h2 className="text-lg font-semibold text-gray-900 mt-2">
        Full Stack Development
      </h2>
      
      <p className="text-sm text-gray-500 mt-2">
        Master React, Node.js, and MongoDB to build modern web applications
      </p>

      <div className="flex items-center gap-4 text-gray-400 text-sm mt-4">
        <div className="flex items-center gap-1">
          <FiClock />
          <span>40 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <FiUsers />
          <span>15,420 enrolled</span>
        </div>
      </div>

      <button className="mt-5 w-full bg-gradient-to-r from-[#6CB4FF] to-[#4766FF] cursor-pointer text-white font-medium py-2 rounded-md hover:opacity-90 transition">
        Enroll now
      </button>
    </div>
  );
};

export default CourseCard;
