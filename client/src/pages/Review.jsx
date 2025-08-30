import React from "react";
import { testimonialsData, assets } from "../assets/assets";

const Reviews = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Trusted by creators, designers, and businesses worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonialsData.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-base font-semibold text-gray-800">
                  {review.name}
                </h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{review.text}</p>
            <div className="flex">
              {Array(review.stars)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
