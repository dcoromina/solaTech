import React from "react";
import Image from "next/image";
import Dashboard from "/public/dashboard.png";
import RepTrack from "/public/RepTrack.jpg";
import FoodApp from "/public/FoodApp.jpg";

const HeroSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center  gap-20">
      <div className=" w-fit flex flex-col items-center">
        <div className="font-bold font-mono  w-5/5 text-white lg:text-5xl text-3xl uppercase  text-center ">
          A good life starts with good health
        </div>
        <div className="text-white font-mono text-center text-lg lg:text-2xl w-2/4">
          Empowering Health & Fitness Through Cutting-Edge Technology
        </div>
      </div>

      <div className="w-full h-auto  flex flex-row justify-center  ">
        <Image
          src={RepTrack}
          className="w-1/5 h-auto relative rounded-xl -rotate-12 z-10 left-[10%] hover:scale-110 transition-all duration-200 ease-in hover:z-50 cursor-pointer shadow-lg hover:shadow-2xl shadow-black hover:shadow-black"
          alt="logo"
        />
        <Image
          src={Dashboard}
          className="w-8/12 h-1/2 aspect-auto relative z-20 rounded-xl hover:scale-110 transition-all hover:z-50 cursor-pointer duration-200 ease-in shadow-lg hover:shadow-2xl shadow-gray-800 hover:shadow-black"
          alt="logo"
        />
        <Image
          src={FoodApp}
          className="w-1/5 h-auto relative rounded-xl rotate-12 z-10 right-[10%] hover:scale-110 transition-all hover:z-50 cursor-pointer duration-200 ease-in shadow-lg hover:shadow-2xl shadow-black hover:shadow-black"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
