"use client";
import React from "react";
import { useState } from "react";

const FitnessIntegrationPhoneApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDevice, setActiveDevice] = useState(null);

  // Simulate connecting to a device
  const handleDeviceConnect = (device: any) => {
    setActiveDevice(device);
    setTimeout(() => setActiveDevice(null), 2000);
  };

  return (
    <div className="relative w-fit h-screen overflow-hidden flex items-center justify-center p-100 m-0">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-card shadow-[0_0_20px_hsla(var(--blue),0.2)] backdrop-blur-sm border border-border"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-foreground">FitSync Mobile</h3>
            <p className="mt-2 text-sm text-blue/70">
              Connect all your fitness devices in one place.
            </p>
          </div>
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
          >
            {/* Phone with app screen */}
            <div
              className={`absolute inset-x-0 top-0 isolate h-64 overflow-hidden pt-6 
                  ${isHovered ? "scale-100 translate-y-[-3rem]" : "scale-[0.98]"
                } 
                  duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            >
              {/* Phone chassis */}
              <div
                className="mx-auto h-56 w-64 rounded-xl bg-gradient-to-b from-card to-background p-1.5"
                style={{
                  boxShadow:
                    "0 1px 0 0 hsla(var(--foreground), 0.1) inset, 0px 2px 10px 0 hsla(var(--blue), 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, hsla(var(--foreground), 0.15) 0%, hsla(var(--foreground), 0) 67.19%)",
                }}
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-b-lg z-30"></div>

                {/* Phone screen */}
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue/20 to-background ring-1 ring-inset ring-border">
                  {/* Status bar */}
                  <div className="h-6 w-full bg-background/40 px-4 flex justify-between items-center text-foreground text-xs">
                    <div>9:41</div>
                    <div className="flex space-x-2 items-center">
                      <div className="w-3 h-3 rounded-full bg-teal/70"></div>
                      <div className="flex space-x-[2px]">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-[2px] h-2 bg-foreground"
                            style={{ height: `${i * 2 + 2}px` }}
                          ></div>
                        ))}
                      </div>
                      <div>100%</div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 py-2 border-b border-border flex justify-between items-center">
                    <div className="text-foreground font-medium">FitSync</div>
                    <div className="text-xs text-blue">All Connected</div>
                  </div>

                  {/* Main app content */}
                  <div className="p-3">
                    {/* Device hub section */}
                    <div className="mb-3">
                      <div className="text-xs text-muted-foreground mb-2">
                        CONNECTED DEVICES
                      </div>
                      <div className="flex space-x-2 pb-1 overflow-x-auto">
                        {[
                          { name: "Watch", status: "active" },
                          { name: "Scale", status: "synced" },
                          { name: "Heart Monitor", status: "charging" },
                          { name: "Smart Shoes", status: "offline" },
                        ].map((device) => (
                          <div
                            key={device.name}
                            className={`flex-none w-16 h-16 rounded-lg ${activeDevice === device.name
                              ? "bg-gradient-to-br from-blue to-teal animate-pulse"
                              : device.status === "active"
                                ? "bg-blue/40 border border-blue/50"
                                : device.status === "synced"
                                  ? "bg-teal/40 border border-teal/50"
                                  : device.status === "charging"
                                    ? "bg-yellow/40 border border-yellow/50"
                                    : "bg-muted/40 border border-border"
                              } flex flex-col items-center justify-center text-center p-1`}
                            onClick={() => handleDeviceConnect(device.name)}
                          >
                            <div className="w-6 h-6 rounded-full bg-muted-foreground/20 mb-1 flex items-center justify-center">
                              <div
                                className={`w-2 h-2 rounded-full ${device.status === "active"
                                  ? "bg-blue"
                                  : device.status === "synced"
                                    ? "bg-teal"
                                    : device.status === "charging"
                                      ? "bg-yellow"
                                      : "bg-muted-foreground"
                                  }`}
                              ></div>
                            </div>
                            <div className="text-[0.6rem] text-foreground">
                              {device.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connected apps section */}
                    <div className="mb-3">
                      <div className="text-xs text-muted-foreground mb-2">
                        CONNECTED APPS
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          "Health",
                          "Strava",
                          "MyFitness",
                          "Calm",
                          "Sleep",
                          "Nutrition",
                          "Gym App",
                          "Run+",
                        ].map((app) => (
                          <div
                            key={app}
                            className={`h-12 rounded-lg ${isHovered && app === "Health"
                              ? "bg-gradient-to-br from-blue/80 to-teal/80"
                              : "bg-card"
                              } flex items-center justify-center text-center`}
                          >
                            <div className="text-[0.6rem] text-foreground">
                              {app}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity summary */}
                    <div
                      className={`rounded-lg bg-gradient-to-r from-blue/20 to-teal/20 p-2 border border-border ${isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-80"
                        } transition-all duration-300 ease-in-out`}
                    >
                      <div className="text-xs text-foreground mb-1">
                        Today&apos;s Activity
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-center">
                          <div className="text-[0.6rem] text-blue-200">
                            Steps
                          </div>
                          <div className="text-xs font-medium text-white">
                            8,492
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-[0.6rem] text-teal">
                            Calories
                          </div>
                          <div className="text-xs font-medium text-foreground">
                            1,240
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-[0.6rem] text-blue">
                            Heart
                          </div>
                          <div className="text-xs font-medium text-foreground">
                            72 bpm
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-muted/50 h-1 mt-2 rounded-full overflow-hidden">
                        <div
                          className={`bg-gradient-to-r from-blue to-teal h-full rounded-full ${activeDevice ? "w-3/4 animate-pulse" : "w-3/4"
                            }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-background/50 backdrop-blur-sm flex justify-around items-center border-t border-border">
                    {["Dashboard", "Devices", "Activity", "Profile"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`flex flex-col items-center justify-center ${index === 1 ? "text-blue" : "text-muted-foreground"
                            }`}
                        >
                          <div className="w-1 h-1 rounded-full mb-1 bg-current"></div>
                          <div className="text-[0.6rem]">{item}</div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Device connection notification */}
                  <div
                    className={`absolute top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue/80 to-teal/80 rounded-lg p-2 w-48 backdrop-blur-lg border border-border/20 shadow-lg
                      ${activeDevice
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[-2rem] opacity-0"
                      }
                      transition-all duration-300`}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue/50 mr-2 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue/80 animate-ping"></div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground">Connecting to</div>
                        <div className="text-xs font-medium text-foreground">
                          {activeDevice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/90 
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

export default FitnessIntegrationPhoneApp;
