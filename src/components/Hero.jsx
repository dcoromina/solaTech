import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-10">
      <div className="font-bold w-2/5 text-white text-5xl uppercase  text-center ">
        Secure your business, Secure your future
      </div>
      <div className="text-white text-center w-2/5">
        Data analysis software is a type of software tool used for data analysis
        and reporting. It is designed to help businesses, organizations, and
        individuals process, visualize,
      </div>
      <div className=" h-fit  p-2">
        <button className=" bg-white py-2 px-6 text-lg rounded-full text-[--violet-11]  ">
          Get started
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HeroSection;
