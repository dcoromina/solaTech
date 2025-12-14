"use client";
import React from "react";
import { useState } from "react";

const FitnessPhoneComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit h-[320px] overflow-visible flex items-center justify-center">
      {/* Decorative elements - fitness themed colors */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-white">
              {isHovered ? "Nutrition Tracking" : "Fitness Dashboard"}
            </h3>
            <p className="mt-2 text-sm/5 text-green-100/70">
              {isHovered
                ? "Track your daily nutrition and calorie intake."
                : "Monitor your workouts and fitness progress."}
            </p>
          </div>
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
          >
            {/* Card hover effect */}
            <div
              className={`relative inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-8 
                  ${isHovered ? "scale-100 translate-y-[-1rem]" : "scale-[0.98]"
                } 
                  duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            >
              {/* Phone outline */}
              <div
                className={`mx-auto h-60 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gradient-to-b from-green-900/80 to-orange-900/80 p-1.5 ${isHovered ? "scale-100 translate-y-[-2rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(34 197 94 / 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.15) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                <div className="relative h-[calc(160/8*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gradient-to-br from-green-950/90 to-orange-950/90 px-5 pt-3 ring-1 ring-inset ring-white/10">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs text-white/70">9:41</div>
                    <div className="flex items-end gap-1">
                      <div className="w-4 h-2 border border-white/40 rounded-sm">
                        <div className="w-3 h-1 bg-green-400/60 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="relative h-full overflow-hidden">
                    {/* Fitness Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-0 transform translate-x-[-100%]"
                          : "opacity-100 transform translate-x-0"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-white">
                          Today&apos;s Activity
                        </h2>
                        <div className="w-8 h-8 bg-green-600/30 rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-4 h-4"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      </div>

                      {/* Activity Rings */}
                      <div className="flex justify-center mb-4">
                        <div className="relative w-20 h-20">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="rgb(34, 197, 94, 0.2)"
                              strokeWidth="4"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="rgb(34, 197, 94)"
                              strokeWidth="4"
                              strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36
                                }`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs text-white font-semibold">
                              75%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-green-100/80">
                            Steps
                          </span>
                          <span className="text-xs text-white font-medium">
                            8,247
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-orange-100/80">
                            Calories
                          </span>
                          <span className="text-xs text-white font-medium">
                            324 kcal
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-blue-100/80">
                            Active Time
                          </span>
                          <span className="text-xs text-white font-medium">
                            45 min
                          </span>
                        </div>
                      </div>

                      {/* Workout Button */}
                      <div className="mt-4">
                        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              Start Workout
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nutrition Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-0 transform translate-x-[100%]"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-white">
                          Nutrition Today
                        </h2>
                        <div className="w-8 h-8 bg-orange-600/30 rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-4 h-4"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                        </div>
                      </div>

                      {/* Calorie Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-orange-100/80">
                            Calories
                          </span>
                          <span className="text-xs text-white">
                            1,247 / 2,000
                          </span>
                        </div>
                        <div className="w-full bg-orange-900/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full"
                            style={{ width: "62%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Macros */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center">
                          <div className="text-xs text-blue-100/80">Carbs</div>
                          <div className="text-sm text-white font-medium">
                            145g
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-red-100/80">Protein</div>
                          <div className="text-sm text-white font-medium">
                            62g
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-yellow-100/80">Fat</div>
                          <div className="text-sm text-white font-medium">
                            34g
                          </div>
                        </div>
                      </div>

                      {/* Recent Meals */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-600/30 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-xs text-white">
                              Breakfast
                            </span>
                          </div>
                          <span className="text-xs text-green-100/80">
                            420 kcal
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-orange-600/30 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            </div>
                            <span className="text-xs text-white">Lunch</span>
                          </div>
                          <span className="text-xs text-orange-100/80">
                            580 kcal
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-600/30 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            </div>
                            <span className="text-xs text-white/60">
                              Dinner
                            </span>
                          </div>
                          <span className="text-xs text-gray-100/40">
                            - kcal
                          </span>
                        </div>
                      </div>

                      {/* Add Food Button */}
                      <div className="mt-3">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              + Add Food
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-0  bg-gradient-to-t from-green-900/80 
                    ${isHovered ? "translate-y-[0rem]" : ""} 
                    duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessPhoneComponent;
