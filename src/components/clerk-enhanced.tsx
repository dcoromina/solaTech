"use client";
import React from "react";
import { useState } from "react";

const EmailSMSPasscode = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit h-[350px] overflow-hidden flex items-center justify-center  ">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(138,75,175,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-white">
              Secure Authentication
            </h3>
            <p className="mt-2 text-sm/5 text-purple-100/70">
              Multi-factor security to protect your account.
            </p>
          </div>
          <div
            className="pointer-events-none relative flex-auto select-none"
            style={{ minHeight: "10.25rem" }}
          >
            {/* Card hover effect */}
            <div
              className={`relative inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-6 
                  ${
                    isHovered ? "scale-100 translate-y-[-1rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
              style={{ willChange: "auto" }}
            >
              {/* Phone outline */}
              <div
                className={`mx-auto h-72 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gradient-to-b from-indigo-900/80 to-purple-900/80 p-1.5 ${
                  isHovered ? "scale-100 translate-y-[-3rem]" : "scale-[0.98]"
                } 
                  duration-300 ease-in-out`}
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(138 75 175 / 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.15) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                <div className="relative h-[calc(200/8*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gradient-to-br from-indigo-950/90 to-purple-950/90 px-5 pt-3 ring-1 ring-inset ring-white/10">
                  {/* Notch icon */}
                  <div
                    className={`relative z-10 mx-auto flex h-6 w-6 transform-gpu items-center justify-center rounded-full 
                        ${
                          isHovered
                            ? "bg-gradient-to-r from-blue-400 to-purple-400"
                            : "bg-[#131316]"
                        } 
                        duration-300 ease`}
                    style={{
                      boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px",
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
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z"
                        clipRule="evenodd"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="[perspective:1000px]">
                    {/* Notification */}
                    <div
                      className={`absolute inset-x-2 top-12 z-20 flex origin-top items-center gap-x-3 rounded-2xl bg-gradient-to-r from-indigo-800/90 to-purple-800/90 p-2 
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
                          "rgba(19, 19, 22, 0.6) 0px 6px 12px, rgba(255, 255, 255, 0.05) 0px 1px inset",
                        willChange: "transform",
                      }}
                    >
                      <div
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-[calc(10/16*1rem)] bg-gradient-to-br from-blue-600 to-purple-600"
                        style={{
                          boxShadow: "0 1px rgb(255 255 255 / 0.1) inset",
                          backgroundImage:
                            "radial-gradient(circle at top, rgb(167 139 250 / 0.3), rgb(167 139 250 / 0))",
                        }}
                      >
                        <svg
                          viewBox="0 0 40 40"
                          fill="none"
                          aria-hidden="true"
                          className="size-10"
                        >
                          <path
                            fill="white"
                            fillRule="evenodd"
                            d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.625rem]/4 font-medium text-blue-200">
                          Security alert
                        </div>
                        <div className="truncate text-xs/4 text-purple-100/90">
                          Your security passcode is{" "}
                          <span className="text-white font-medium">764676</span>
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
                      "Myoo",
                      "X",
                      "NatWest",
                      "Clerk",
                    ].map((label, index) => (
                      <div key={label} className="flex-none">
                        <div
                          className="relative size-10 rounded-[calc(10/16*1rem)] bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                          style={{
                            boxShadow: "0 1px rgb(255 255 255 / 0.1) inset",
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
                          {/* Small app icon notification indicator */}
                          {index === 4 && (
                            <div
                              className={`absolute -left-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full text-[0.625rem]/none font-semibold backdrop-blur 
                                scale-75 group-hover:scale-100 duration-100 ease 
                                ${
                                  isHovered
                                    ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                                    : "bg-white/40 text-gray-900"
                                }`}
                              style={{
                                willChange: "auto",
                                boxShadow:
                                  "rgba(167, 139, 250, 0.3) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px inset",
                              }}
                            >
                              1
                            </div>
                          )}
                        </div>
                        <div className="mt-1.5 text-[0.625rem]/4 font-medium text-purple-100/70">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Card Gradient */}
            </div>
            <div
              className={`absolute inset-0  bg-gradient-to-t from-indigo-900/90 
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

export default EmailSMSPasscode;
