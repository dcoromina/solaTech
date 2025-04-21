"use client";
import React, { useState, useEffect } from "react";

const FitnessHealthPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [progress, setProgress] = useState(67);
  const [waterIntake, setWaterIntake] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation on component mount
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Data for charts and stats
  const weeklyWorkouts = [3, 4, 2, 5, 3, 0, 0];
  const calorieIntake = [2100, 1950, 2300, 2100, 2050, 2200, 0];
  const macros = { protein: 35, carbs: 40, fats: 25 };

  // Function to add water
  const addWater = () => {
    if (waterIntake < 8) {
      setWaterIntake((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {/* Header with user info */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center text-xl font-bold">
            JS
          </div>
          <div>
            <h1 className="text-xl font-bold">Welcome back, Jamie</h1>
            <p className="text-gray-400 text-sm">
              Let&apos;s crush your goals today!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-800 p-2 rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Goal progress */}
        <section
          className={`bg-gradient-to-r from-blue-800/40 to-green-700/40 rounded-2xl p-6 mb-6 transform transition-all duration-500 ${
            isAnimating
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Monthly Goal Progress</h2>
            <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
              On Track
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative h-20 w-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-700"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 36 * (1 - progress / 100)
                  }`}
                  className="text-green-400"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                {progress}%
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">
                  Lose 5kg this month
                </span>
                <span className="text-sm font-medium">3.5kg / 5kg</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-green-400 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Keep going! You&apos;re 2 weeks ahead of schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Today's summary */}
        <section
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 transform transition-all duration-500 delay-100 ${
            isAnimating
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div className="bg-gray-800 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 5.5C13.5 6.33 12.83 7 12 7C11.17 7 10.5 6.33 10.5 5.5C10.5 4.67 11.17 4 12 4C12.83 4 13.5 4.67 13.5 5.5ZM20 12V14C20 14.55 19.55 15 19 15H18V19H17V15H13V19H12V12C12 10.9 12.9 10 14 10H18C19.1 10 20 10.9 20 12ZM10 12H6C4.9 12 4 12.9 4 14V19H5V15H6V19H7V15H8V19H9V14C9 12.9 8.1 12 7 12H6.12C6.6 10.7 7.72 10 9 10C10.1 10 11.1 10.4 11.83 11.13L12.53 10.42C11.56 9.55 10.35 9 9 9C7.2 9 5.6 9.94 4.6 11.5C4.24 11.65 4 12.03 4 12.5V13H10V12Z"
                  fill="#3B82F6"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Today&apos;s Workout</p>
              <h3 className="font-bold">Upper Body + HIIT</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full mr-2">
                  45 min
                </span>
                <span className="text-xs text-gray-400">9:30 AM</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z"
                  fill="#10B981"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Calories</p>
              <h3 className="font-bold">1,850 / 2,200</h3>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-400 text-xs">Water Intake</p>
              <span className="text-xs font-medium">
                {waterIntake}/8 glasses
              </span>
            </div>
            <div className="flex justify-between gap-1.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-16 rounded-lg ${
                    i < waterIntake ? "bg-blue-500" : "bg-gray-700"
                  } 
                             ${
                               i === waterIntake - 1
                                 ? "relative overflow-hidden"
                                 : ""
                             }`}
                >
                  {i === waterIntake - 1 && (
                    <div className="absolute inset-x-0 bottom-0 h-1/6 bg-blue-300 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addWater}
              className="w-full mt-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors"
            >
              Add glass
            </button>
          </div>
        </section>

        {/* Nutrition and Workout section */}
        <section
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 transform transition-all duration-500 delay-200 ${
            isAnimating
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-bold mb-4">
              Today&apos;s Nutrition Plan
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.1 10 22 9.1 22 8V5C22 3.9 21.1 3 20 3ZM20 8H18V5H20V8ZM4 19H20V21H4V19Z"
                        fill="#10B981"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Breakfast</h3>
                    <p className="text-xs text-gray-400">
                      Greek yogurt with berries and nuts
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                  420 cal
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3L4 9V21H20V9L12 3ZM12.5 12H11V7H13V10H15V7H17V12H12.5ZM7 9H9V12H11V15H7V9ZM17 15V18H15V15H13V18H11V15H9V18H7V15H5V9L12 4.5L19 9V15H17Z"
                        fill="#EAB308"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Lunch</h3>
                    <p className="text-xs text-gray-400">
                      Grilled chicken salad with avocado
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                  580 cal
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3L4 9V21H20V9L12 3ZM18 19H6V10L12 5.5L18 10V19ZM8 14H10V17H8V14ZM12 11H14V17H12V11ZM16 14H18V17H16V14Z"
                        fill="#F97316"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Dinner</h3>
                    <p className="text-xs text-gray-400">
                      Baked salmon with roasted vegetables
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                  650 cal
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6C13.11 6 14 5.1 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6ZM16.6 15.13L15.53 14.53L16.13 13.47C16.4 12.91 16.5 12.35 16.5 11.85C16.5 10.58 15.86 9.26 15.25 8.05L14.5 6.5C14.5 6.5 14 5.5 12 5.5C10 5.5 9.5 6.5 9.5 6.5L8.74 8.05C8.14 9.26 7.5 10.58 7.5 11.85C7.5 12.35 7.6 12.91 7.87 13.47L8.47 14.53L7.4 15.13C6.52 15.54 5.5 16.42 5.5 18C5.5 19.65 7.35 21 9 21H15C16.65 21 18.5 19.65 18.5 18C18.5 16.42 17.48 15.54 16.6 15.13ZM15 19H9C8.45 19 7.5 18.55 7.5 18.15C7.5 17.77 7.97 17.38 8.76 17.07L10.5 16.15L8.66 15.55C8.59 15.53 8.45 15.4 8.34 15.18C8.24 14.93 8 14.15 8 11.85C8 10.85 8.74 9.55 9.15 8.7C9.35 8.3 9.5 7.97 9.63 7.7L10 6.8C10.34 6.74 11.2 6.5 12 6.5C12.8 6.5 13.66 6.74 14 6.8L14.38 7.7C14.5 7.97 14.65 8.3 14.85 8.7C15.26 9.55 16 10.85 16 11.85C16 14.15 15.76 14.93 15.66 15.18C15.55 15.4 15.41 15.53 15.34 15.55L13.5 16.15L15.24 17.07C16.03 17.38 16.5 17.77 16.5 18.15C16.5 18.55 15.55 19 15 19Z"
                        fill="#A855F7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Snack</h3>
                    <p className="text-xs text-gray-400">
                      Apple with almond butter
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                  200 cal
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <div className="flex items-center justify-between gap-4 p-2 bg-gray-700/30 rounded-lg w-full">
                <div className="text-center flex-1">
                  <p className="text-xs text-gray-400">Protein</p>
                  <p className="font-medium">{macros.protein}%</p>
                </div>
                <div className="h-8 w-px bg-gray-700"></div>
                <div className="text-center flex-1">
                  <p className="text-xs text-gray-400">Carbs</p>
                  <p className="font-medium">{macros.carbs}%</p>
                </div>
                <div className="h-8 w-px bg-gray-700"></div>
                <div className="text-center flex-1">
                  <p className="text-xs text-gray-400">Fats</p>
                  <p className="font-medium">{macros.fats}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-bold mb-4">Weekly Overview</h2>

            <div className="flex justify-between items-end h-40 mb-2">
              {weeklyWorkouts.map((workout, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-end h-full"
                >
                  <div
                    className="w-4 bg-gradient-to-t from-blue-500 to-green-400 rounded-t-sm"
                    style={{ height: `${workout * 20}%` }}
                  ></div>
                  <div
                    className={`w-8 h-1 mt-1 rounded-full ${
                      i === 4 ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-sm mb-3">Coming up</h3>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Lower Body Focus</h4>
                    <p className="text-xs text-gray-400">Thursday, 7:00 AM</p>
                  </div>
                  <button className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg">
                    Change
                  </button>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Yoga & Stretching</h4>
                    <p className="text-xs text-gray-400">Friday, 6:30 PM</p>
                  </div>
                  <button className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-md border-t border-gray-700/50 p-3">
        <div className="flex justify-around max-w-lg mx-auto">
          {[
            {
              id: "dashboard",
              icon: "M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z",
              label: "Dashboard",
            },
            {
              id: "workouts",
              icon: "M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z",
              label: "Workouts",
            },
            {
              id: "nutrition",
              icon: "M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z",
              label: "Nutrition",
            },
            {
              id: "profile",
              icon: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
              label: "Profile",
            },
          ].map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center pt-1 ${
                activeTab === item.id ? "text-blue-400" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={item.icon} fill="currentColor" />
              </svg>
              <span className="text-xs mt-1">{item.label}</span>
              {activeTab === item.id && (
                <div className="w-1 h-1 mt-1 rounded-full bg-blue-400"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default FitnessHealthPlatform;
