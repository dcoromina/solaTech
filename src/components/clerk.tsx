"use client";
import React from "react";
import { useState } from "react";

const EmailSMSPasscode = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-auto h-screen overflow-hidden flex items-center justify-center">
      <div className="w-full flex flex-col gap-8 justify-center items-center h-full max-w-xs mx-auto">
        <div
          className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-6 order-last pb-6">
            <h3 className="text-sm font-medium text-white">Title 1</h3>
            <p className="mt-2 text-sm/5 text-gray-400">
              Description of the feature we provide.
            </p>
          </div>
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
          >
            <div
              className={`absolute inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-6 
                  ${
                    isHovered ? "scale-100 translate-y-[-2rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            >
              <div
                className="mx-auto h-56 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gray-800 p-1.5"
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.05) inset, 0px 2px 5px 0 rgb(0 0 0 / 0.40)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.05) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                <div className="relative h-[calc(200/16*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gray-950/50 px-5 pt-3 ring-1 ring-inset ring-black/5">
                  <div
                    className={`relative z-10 mx-auto flex h-6 w-6 transform-gpu items-center justify-center rounded-full 
                        ${isHovered ? "bg-[#5EE4FF]" : "bg-[#131316]"} 
                        duration-300 ease`}
                    style={{
                      boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px",
                      willChange: "auto",
                    }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        fill="#fff"
                        fillOpacity=".4"
                        d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
                        opacity="0"
                      ></path>
                      <path
                        fill="#fff"
                        fillOpacity=".4"
                        fillRule="evenodd"
                        d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z"
                        clipRule="evenodd"
                        opacity="0"
                      ></path>
                      <path
                        d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"
                        fill="rgba(116, 118, 134, 1)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z"
                        clipRule="evenodd"
                        fill="rgba(116, 118, 134, 1)"
                      ></path>
                    </svg>
                  </div>
                  <span className="[perspective:1000px]">
                    <div
                      className={`absolute inset-x-2 top-12 z-20 flex origin-top items-center gap-x-3 rounded-2xl bg-gray-800 p-2 
                          ${
                            isHovered
                              ? "scale-100 opacity-100 translate-y-0"
                              : "translate-y-[-6.5rem] scale-90 opacity-50"
                          } 
                          duration-300 ease-in-out 
                          ${isHovered ? "blur-0" : "blur-[2px]"} 
                          delay-150`}
                      style={{
                        boxShadow:
                          "rgba(19, 19, 22, 0.6) 0px 6px 12px, rgba(255, 255, 255, 0.03) 0px 1px inset",
                        willChange: "transform",
                      }}
                    >
                      <div
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-[calc(10/16*1rem)] bg-gray-700"
                        style={{
                          boxShadow: "0 1px rgb(255 255 255 / 0.05) inset",
                          backgroundImage:
                            "radial-gradient(circle at top, rgb(114 233 255 / 0.2), rgb(114 233 255 / 0))",
                        }}
                      >
                        <svg
                          viewBox="0 0 40 40"
                          fill="none"
                          aria-hidden="true"
                          className="size-10"
                        >
                          <path
                            fill="#5DE3FF"
                            fillRule="evenodd"
                            d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.625rem]/4 font-medium text-[#5DE3FF]">
                          Security alert
                        </div>
                        <div className="truncate text-xs/4 text-gray-200">
                          Your security passcode is{" "}
                          <span className="text-white">764676</span>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="mt-6 flex flex-wrap justify-between gap-x-2 gap-y-4 text-center">
                    {[
                      "Phone",
                      "SMS",
                      "Books",
                      "TV",
                      "Google",
                      "X",
                      "NatWest",
                      "Clerk",
                    ].map((label, index) => (
                      <div key={label} className="flex-none">
                        <div
                          className="relative size-10 rounded-[calc(10/16*1rem)] bg-gray-800"
                          style={{
                            boxShadow: "0 1px rgb(255 255 255 / 0.05) inset",
                          }}
                        >
                          {index < 4 && (
                            <svg
                              viewBox="0 0 40 40"
                              fill="none"
                              aria-hidden="true"
                              className="size-10"
                            >
                              {/* SVG path would be added here for the first 4 icons */}
                            </svg>
                          )}
                          {index === 4 && (
                            <div
                              className="absolute -left-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full text-[0.625rem]/none font-semibold text-gray-950 backdrop-blur scale-75 group-hover:scale-100 duration-100 ease bg-[#ffffff40] group-hover:bg-[#5EE4FF]"
                              style={{
                                willChange: "auto",
                                boxShadow:
                                  "rgba(107, 231, 255, 0.3) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px inset",
                              }}
                            >
                              1
                            </div>
                          )}
                        </div>
                        <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-gray-900 
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

export default EmailSMSPasscode;
