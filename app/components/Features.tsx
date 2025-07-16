import React from "react";
import { Brain, ShieldCheck } from "lucide-react";
import { FileText } from "lucide-react";
import { Video } from "lucide-react";
import { LineChart } from "lucide-react";
import { Filter } from "lucide-react";

import Heading from "./Heading";
import IconBox from "./IconBox";

const Features = () => {
  const featuresdata = [
    {
      icon: <Brain className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-indigo-500",
      title: "AI Job Matching",
      description: "Smart algorithms match you with perfect opportunities",
      badge: { value: "Popular", color: "green" },
    },
    {
      icon: <FileText className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-teal-500",
      title: "Resume Builder",
      description: "Create professional resumes in minutes",
      badge: { value: "New", color: "blue" },
    },
    {
      icon: <Video className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-yellow-400",
      title: "Live Workshops",
      description: "Interactive learning with industry experts",
     
    },
    {
      icon: <LineChart className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-red-400",
      title: "Application Tracker",
      description: "Monitor your job applications in real- time",
    },
    {
      icon: <Filter className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-pink-400",
      title: "Smart Filters",
      description: "Advanced search with intelligent filtering",
      
    },
    {
      icon: <ShieldCheck className={`w-6 h-6 text-white`} />,
      iconcolor: "bg-teal-400",
      title: "Verified Badges",
      description: "Showcase your skills with verified certifications",
      badge: { value: "Beta", color: "purple" },
    },
  ];
  return (
    <>
      <div className="bg-white p-8">
        <div>
          <Heading
            heading={[
              { text: "Built to Help You", color: "black" },
              { text: " Grow", color: "text-blue-400" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresdata.map((feature, index) => (
            <IconBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
