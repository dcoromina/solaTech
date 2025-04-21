"use client";
import React, { useState, useEffect, useRef } from "react";

const FitnessHealthApp = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [counters, setCounters] = useState({
    steps: 0,
    calories: 0,
    heartRate: 0,
    sleep: 0,
    water: 0,
    workout: 0,
    weight: 0,
    goals: 0,
  });
  const componentRef = useRef(null);

  const targetValues = {
    steps: 8432,
    calories: 1842,
    heartRate: 72,
    sleep: 444, // 7h 24m in minutes
    water: 1.2,
    workout: 42,
    weight: 165,
    goals: 3,
  };

  // Handle client-side mounting to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if element is in viewport
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right > 0
    );
  };

  // Set up scroll event listener
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (componentRef.current && isInViewport(componentRef.current)) {
        setIsActive(true);
      }
    };

    // Check on mount in case component is already in viewport
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  // Animation effect when active
  useEffect(() => {
    if (!isActive) return;

    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        steps: Math.floor(progress * targetValues.steps),
        calories: Math.floor(progress * targetValues.calories),
        heartRate: Math.floor(progress * targetValues.heartRate),
        sleep: Math.floor(progress * targetValues.sleep),
        water: parseFloat((progress * targetValues.water).toFixed(1)),
        workout: Math.floor(progress * targetValues.workout),
        weight: Math.floor(progress * targetValues.weight),
        goals: Math.ceil(progress * targetValues.goals),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isActive]);

  // Helper function to format sleep time
  const formatSleepTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="relative w-fit min-h-fit overflow-hidden flex items-center justify-center p-4 ">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div
        ref={componentRef}
        className="w-full flex flex-col justify-center items-center max-w-xs mx-auto z-10"
      >
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(72,187,120,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsActive(true)}
        >
          <div className="relative z-10 px-4 py-4">
            <h3 className="text-sm font-medium text-white">FitTrack Pro</h3>
            <p className="mt-1 text-xs text-green-100/70">
              Today&apos;s Health Summary
            </p>
          </div>

          <div className="relative px-4 pb-6 pt-2">
            {/* App screen content */}
            <div
              className="mx-auto w-[calc(264/16*1rem)] rounded-xl bg-gradient-to-b from-green-900/90 to-blue-900/90 p-1"
              style={{
                boxShadow:
                  "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(72 187 120 / 0.5)",
              }}
            >
              <div className="relative h-auto rounded-lg bg-gradient-to-br from-green-950/90 to-blue-950/90 p-4 ring-1 ring-inset ring-white/10">
                {/* App logo and header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-400"
                      style={{
                        boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px",
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M6.5 9.75L9 7.25l2.5 2.5 1-1-3.5-3.5L5.5 8.75l1 1z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      Daily Progress
                    </span>
                  </div>
                  <div className="text-xs font-medium text-green-100/70">
                    April 15
                  </div>
                </div>

                {/* Daily statistics */}
                <div className="mb-6">
                  <div className="mb-2 text-xs text-green-100/90">
                    Your daily activity
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-3xl font-bold text-white transition-all duration-500">
                      {counters.steps.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-100/70 mb-1">
                      steps today
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.min(
                          (counters.steps / 10000) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-green-100/70">
                    <span>0</span>
                    <span>Goal: 10,000</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    {
                      label: "Calories",
                      value: counters.calories.toLocaleString(),
                      unit: "cal",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M8.5 14.5A5.5 5.5 0 1117.5 9"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      label: "Heart Rate",
                      value: counters.heartRate,
                      unit: "bpm",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      label: "Sleep",
                      value: formatSleepTime(counters.sleep),
                      unit: "",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M17 4c-.8 0-1.6.2-2.3.5C13.6 3 11.9 2 10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8c.6 0 1.1-.1 1.6-.2.5 1.4 1.9 2.4 3.4 2.4 2 0 3.7-1.7 3.7-3.7 0-.8-.3-1.6-.8-2.2 1.3-1.2 2.1-3 2.1-4.9 0-3.7-2.3-5.4-2-5.4z"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      label: "Water",
                      value: counters.water,
                      unit: "L",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-white/5 p-3 ring-1 ring-inset ring-white/10"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-800/50">
                          {stat.icon}
                        </div>
                        <span className="text-xs text-green-100/90">
                          {stat.label}
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-xl font-semibold text-white transition-all duration-500">
                          {stat.value}
                        </span>
                        {stat.unit && (
                          <span className="ml-1 text-xs text-green-100/70">
                            {stat.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="flex justify-between gap-3">
                  {[
                    {
                      label: "Workout",
                      value: counters.workout,
                      unit: "min",
                    },
                    {
                      label: "Weight",
                      value: counters.weight,
                      unit: "lb",
                    },
                    {
                      label: "Goals",
                      value: `${counters.goals}/5`,
                      unit: "",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 rounded-lg bg-white/5 p-2 text-center ring-1 ring-inset ring-white/10"
                    >
                      <div className="text-lg font-semibold text-white transition-all duration-500">
                        {stat.value}
                        <span className="text-xs text-green-100/70 ml-0.5">
                          {stat.unit}
                        </span>
                      </div>
                      <div className="text-xs text-green-100/90 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-white/50">
          <p>{isMounted ? "Scroll to see stats animate" : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessHealthApp;
