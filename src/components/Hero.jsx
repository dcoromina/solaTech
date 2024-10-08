import React from "react";
import Image from "next/image";
import HeroSvg from "/public/hero1.svg";

const HeroSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-10">
      <div className="font-bold w-2/5 text-white text-5xl uppercase  text-center ">
        Health and fitness like never before
      </div>
      <div className="text-white text-center w-2/5">
        Empowering Wellness through Cutting-Edge Technology and Data-Driven
        Insights
      </div>

      <div className="w-fit h-auto bg-red-500 ">
        <Image src={HeroSvg} className="w-4/5 h-auto " alt="logo" />
      </div>
    </div>
  );
};

export default HeroSection;
