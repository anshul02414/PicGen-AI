import React from "react";
import { stepsData } from "../assets/assets";

const HowWorks = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Transform your ideas into stunning visuals in just a few simple steps.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-16">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300"
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-12 h-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
