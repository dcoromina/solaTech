"use client";
import React from "react";
import { useState } from "react";

const DietFitnessApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Food items data
  const foodItems = [
    {
      name: "Grilled Chicken Salad",
      calories: 320,
      protein: 28,
      carbs: 12,
      fat: 18,
    },
    { name: "Avocado Toast", calories: 290, protein: 8, carbs: 36, fat: 15 },
    {
      name: "Greek Yogurt Bowl",
      calories: 240,
      protein: 18,
      carbs: 28,
      fat: 6,
    },
    {
      name: "Salmon & Vegetables",
      calories: 380,
      protein: 32,
      carbs: 8,
      fat: 22,
    },
  ];

  // Selected food (first item by default)
  const selectedFood = foodItems[0];

  return (
    <div className="relative w-fit h-[298px] overflow-hidden flex items-center justify-center p-100 m-0">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-white">
              Your Diet Tracker
            </h3>
            <p className="mt-2 text-sm/5 text-green-100/70">
              Track your meals and nutrients for a healthier lifestyle.
            </p>
          </div>
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
          >
            {/* Phone with app animation */}
            <div
              className={`absolute inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-6 
                  ${
                    isHovered ? "scale-100 translate-y-[-3rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            >
              <div
                className="mx-auto h-56 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gradient-to-b from-green-900/80 to-blue-900/80 p-1.5"
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(34 197 94 / 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.15) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                {/* Phone body */}
                <div className="relative h-[calc(200/16*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gradient-to-br from-gray-900/90 to-gray-950/90 px-2 pt-2 ring-1 ring-inset ring-white/10">
                  {/* App Interface */}
                  <div className="relative">
                    {/* App being opened animation - Food detail page */}
                    <div
                      className={`absolute inset-x-0 z-30 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden
                          ${
                            isHovered
                              ? "scale-100 opacity-100 translate-y-0 h-44"
                              : "translate-y-[20rem] scale-50 opacity-0 h-0"
                          } 
                          duration-500 ease-in-out delay-100`}
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.4) 0px 6px 12px, rgba(255, 255, 255, 0.1) 0px 1px inset",
                        willChange: "transform",
                      }}
                    >
                      {/* App header */}
                      <div className="bg-gradient-to-r from-green-700 to-blue-700 p-2 flex justify-between items-center">
                        <div className="text-white text-xs font-medium flex items-center">
                          <div className="mr-2 text-xs">←</div>
                          <div>Food Details</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-white/60"></div>
                          <div className="w-2 h-2 rounded-full bg-white/60"></div>
                        </div>
                      </div>

                      {/* Food detail content */}
                      <div className="p-3">
                        <div className="text-white text-sm font-medium">
                          {selectedFood.name}
                        </div>

                        {/* Food image placeholder */}
                        <div className="mt-2 h-12 w-12 float-right rounded-lg bg-gradient-to-br from-green-600/40 to-blue-600/40"></div>

                        {/* Nutrition facts */}
                        <div className="mt-2">
                          <div className="text-[0.625rem] text-green-200">
                            Nutrition Facts
                          </div>
                          <div className="mt-1 grid grid-cols-2 gap-y-1 gap-x-3">
                            <div>
                              <div className="text-[0.625rem] text-blue-200">
                                Calories
                              </div>
                              <div className="text-[0.75rem] text-white">
                                {selectedFood.calories}
                              </div>
                            </div>
                            <div>
                              <div className="text-[0.625rem] text-blue-200">
                                Protein
                              </div>
                              <div className="text-[0.75rem] text-white">
                                {selectedFood.protein}g
                              </div>
                            </div>
                            <div>
                              <div className="text-[0.625rem] text-blue-200">
                                Carbs
                              </div>
                              <div className="text-[0.75rem] text-white">
                                {selectedFood.carbs}g
                              </div>
                            </div>
                            <div>
                              <div className="text-[0.625rem] text-blue-200">
                                Fat
                              </div>
                              <div className="text-[0.75rem] text-white">
                                {selectedFood.fat}g
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Add to meal button */}
                        <div className="mt-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-md p-1 text-center">
                          <div className="text-[0.625rem] text-white font-medium">
                            Add to Today&apos;s Meals
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Diet app main food list */}
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-950/90 w-full ">
                      {/* App header */}
                      <div className="bg-gradient-to-r from-green-700 to-blue-700 p-2 w-full h-f">
                        <div className="text-white text-xs font-medium flex justify-between">
                          <div>NutriTrack</div>
                          <div className="text-[0.625rem]">Today</div>
                        </div>
                        <div className="mt-1 text-[0.625rem] text-white/80">
                          Recommended Foods
                        </div>
                      </div>

                      {/* Food list */}
                      <div className="p-2">
                        {foodItems.map((food, index) => (
                          <div
                            key={food.name}
                            className={`mb-2 p-2 rounded-lg flex justify-between items-center
                              ${
                                index === 0
                                  ? "bg-gradient-to-r from-green-600/30 to-blue-600/30"
                                  : "bg-white/5"
                              }
                              ${
                                isHovered && index === 0
                                  ? "opacity-0"
                                  : "opacity-100"
                              }
                              transition-opacity duration-300`}
                          >
                            <div>
                              <div className="text-[0.75rem] text-white">
                                {food.name}
                              </div>
                              <div className="text-[0.625rem] text-green-200">
                                {food.calories} cal
                              </div>
                            </div>
                            <div className="text-[0.625rem] text-white/70">
                              {food.protein}g P • {food.carbs}g C • {food.fat}g
                              F
                            </div>
                          </div>
                        ))}

                        {/* Daily stats summary */}
                        <div className="mt-3 pt-2 border-t border-white/10">
                          <div className="text-[0.625rem] font-medium text-white/80">
                            DAILY TOTALS
                          </div>
                          <div className="flex justify-between mt-1">
                            <div className="text-[0.625rem] text-white">
                              1230 / 2000 cal
                            </div>
                            <div className="text-[0.625rem] text-white">
                              62%
                            </div>
                          </div>
                          <div className="w-full bg-gray-700/50 h-1 mt-1 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-green-400 to-blue-400 h-full w-3/5 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav bar */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around mt-4 bg-white/5 backdrop-blur-sm p-2 rounded-t-lg">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div className="text-[0.5rem] text-white/70 mt-1">
                          Foods
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="text-[0.5rem] text-white/70 mt-1">
                          Meals
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="text-[0.5rem] text-white/70 mt-1">
                          Diary
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="text-[0.5rem] text-white/70 mt-1">
                          Profile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-green-900/90 
                    ${isHovered ? "translate-y-[2rem]" : ""} 
                    duration-300 ease-in-out`}
                style={{ willChange: "auto" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietFitnessApp;
