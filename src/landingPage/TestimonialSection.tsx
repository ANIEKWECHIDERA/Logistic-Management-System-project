import React from "react";
import TestimonialCard from "../components/shared/TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#2563EB] mt-10 lg:mt-20">
      <h3 className="text-white font-semibold text-xl text-center lg:text-left px-6 py-3">
        Ready to Transform Your Logistics?
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 lg:p-20 bg-[#2563EB]">
        <TestimonialCard
          name="Jane Doe"
          position="Software Engineer"
          testimonial="This platform has greatly improved my productivity!"
          img="https://via.placeholder.com/150"
        />
        <TestimonialCard
          name="Jane Doe"
          position="Software Engineer"
          testimonial="This platform has greatly improved my productivity!"
          img="https://via.placeholder.com/150"
        />
        <TestimonialCard
          name="Jane Doe"
          position="Software Engineer"
          testimonial="This platform has greatly improved my productivity!"
          img="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
