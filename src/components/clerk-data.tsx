"use client";
import React from "react";
import { useState } from "react";

const WorkoutTrackerPhone = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit h-[320px] overflow-visible flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(251,146,60,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-white">
              {isHovered ? "Exercise Library" : "Workout Tracker"}
            </h3>
            <p className="mt-2 text-sm/5 text-orange-100/70">
              {isHovered
                ? "Browse and select exercises for your routine."
                : "Track your sets, reps, and workout progress."}
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
                className={`mx-auto h-60 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gradient-to-b from-orange-900/80 to-red-900/80 p-1.5 ${isHovered ? "scale-100 translate-y-[-2rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(251 146 60 / 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.15) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                <div className="relative h-[calc(160/8*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gradient-to-br from-orange-950/90 to-red-950/90 px-5 pt-3 ring-1 ring-inset ring-white/10">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs text-white/70">2:34 PM</div>
                    <div className="flex items-end gap-1">
                      <div className="w-4 h-2 border border-white/40 rounded-sm">
                        <div className="w-3 h-1 bg-orange-400/60 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="relative h-full overflow-hidden">
                    {/* Active Workout Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-0 transform translate-x-[-100%]"
                          : "opacity-100 transform translate-x-0"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-white">
                          Chest Day
                        </h2>
                        <div className="flex items-center gap-1 bg-orange-600/30 rounded-full px-2 py-1">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3 h-3 text-orange-400"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                          </svg>
                          <span className="text-xs text-white">42:15</span>
                        </div>
                      </div>

                      {/* Exercise Cards */}
                      <div className="space-y-2 mb-3">
                        {/* Completed Exercise */}
                        <div className="bg-green-900/20 rounded-lg p-2 border border-green-600/30">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs text-white font-medium">
                              Bench Press
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-green-400"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-green-100/60">4 sets</span>
                            <span className="text-green-100/60">•</span>
                            <span className="text-green-100/60">8-10 reps</span>
                            <span className="text-green-100/60">•</span>
                            <span className="text-green-100/60">185 lbs</span>
                          </div>
                        </div>

                        {/* Active Exercise */}
                        <div className="bg-orange-600/20 rounded-lg p-2 border border-orange-400/40">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-white font-medium">
                              Incline Dumbbell Press
                            </span>
                            <span className="text-xs text-orange-300">
                              Set 2/4
                            </span>
                          </div>
                          <div className="flex gap-1 mb-1">
                            <div className="flex-1 h-1 bg-orange-500 rounded"></div>
                            <div className="flex-1 h-1 bg-orange-500 rounded"></div>
                            <div className="flex-1 h-1 bg-orange-900/40 rounded"></div>
                            <div className="flex-1 h-1 bg-orange-900/40 rounded"></div>
                          </div>
                          <div className="flex gap-2 text-xs text-orange-100/80">
                            <span>12 reps</span>
                            <span>•</span>
                            <span>60 lbs each</span>
                          </div>
                        </div>

                        {/* Upcoming Exercise */}
                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                          <span className="text-xs text-white/60 font-medium">
                            Cable Flyes
                          </span>
                          <div className="flex gap-2 text-xs text-white/40 mt-1">
                            <span>3 sets</span>
                            <span>•</span>
                            <span>12-15 reps</span>
                          </div>
                        </div>
                      </div>

                      {/* Complete Set Button */}
                      <div className="mt-auto">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              Complete Set
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Exercise Library Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-0 transform translate-x-[100%]"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-white">
                          Exercise Library
                        </h2>
                        <div className="w-7 h-7 bg-orange-600/30 rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-orange-300"
                          >
                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </div>
                      </div>

                      {/* Muscle Group Tabs */}
                      <div className="flex gap-1 mb-3 overflow-x-auto">
                        <div className="px-2 py-1 bg-orange-600/40 rounded-full text-xs text-white whitespace-nowrap">
                          Chest
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60 whitespace-nowrap">
                          Back
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60 whitespace-nowrap">
                          Legs
                        </div>
                      </div>

                      {/* Exercise List */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-orange-600/30 rounded flex items-center justify-center">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-orange-300"
                              >
                                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Flat Bench Press
                              </div>
                              <div className="text-xs text-white/50">
                                Compound
                              </div>
                            </div>
                          </div>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white/40"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-600/30 rounded flex items-center justify-center">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-red-300"
                              >
                                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Dumbbell Flyes
                              </div>
                              <div className="text-xs text-white/50">
                                Isolation
                              </div>
                            </div>
                          </div>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white/40"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-orange-600/30 rounded flex items-center justify-center">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-orange-300"
                              >
                                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Push-ups
                              </div>
                              <div className="text-xs text-white/50">
                                Bodyweight
                              </div>
                            </div>
                          </div>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-white/40"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                          </svg>
                        </div>
                      </div>

                      {/* Add Exercise Button */}
                      <div className="mt-3">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              + Create Custom Exercise
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
              className={`absolute inset-0 bg-gradient-to-t from-orange-900/80 
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

export default WorkoutTrackerPhone;