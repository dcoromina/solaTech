"use client";
import React from "react";
import { useState } from "react";

const ProfessionalConsultPhone = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit h-[320px] overflow-visible flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="w-full flex flex-col justify-center items-center h-full max-w-xs mx-auto z-10">
        <div
          className="group isolate flex flex-col rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-sm border border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 flex-none px-4 order-last pb-4">
            <h3 className="text-sm font-medium text-white">
              {isHovered ? "Expert Profiles" : "Professional Consults"}
            </h3>
            <p className="mt-2 text-sm/5 text-blue-100/70">
              {isHovered
                ? "Browse verified professionals and their expertise."
                : "Get expert opinions from top professionals."}
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
                className={`mx-auto h-60 w-[calc(264/16*1rem)] rounded-[calc(44/16*1rem)] bg-gradient-to-b from-blue-900/80 to-indigo-900/80 p-1.5 ${isHovered ? "scale-100 translate-y-[-2rem]" : "scale-[0.98]"
                  } 
                  duration-300 ease-in-out`}
                style={{
                  boxShadow:
                    "0 1px 0 0 rgb(255 255 255 / 0.1) inset, 0px 2px 10px 0 rgb(99 102 241 / 0.5)",
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.15) 0%, rgb(255 255 255 / 0) 67.19%)",
                }}
              >
                <div className="relative h-[calc(160/8*1rem)] overflow-hidden rounded-[calc(38/16*1rem)] bg-gradient-to-br from-blue-950/90 to-indigo-950/90 px-5 pt-3 ring-1 ring-inset ring-white/10">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs text-white/70">11:23 AM</div>
                    <div className="flex items-end gap-1">
                      <div className="w-4 h-2 border border-white/40 rounded-sm">
                        <div className="w-3 h-1 bg-blue-400/60 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="relative h-full overflow-hidden">
                    {/* Active Consultation Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-0 transform translate-x-[-100%]"
                          : "opacity-100 transform translate-x-0"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-white">
                          Active Requests
                        </h2>
                        <div className="flex items-center gap-1 bg-blue-600/30 rounded-full px-2 py-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-white">3 Active</span>
                        </div>
                      </div>

                      {/* Consultation Cards */}
                      <div className="space-y-2 mb-3">
                        {/* Pending Response */}
                        <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/40">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
                              DR
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-white font-medium">
                                Dr. Rachel Chen
                              </div>
                              <div className="text-xs text-blue-100/60">
                                Cardiologist
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-blue-500/40 rounded px-1.5 py-0.5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3 h-3 text-blue-200"
                              >
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                              </svg>
                              <span className="text-xs text-white">2h</span>
                            </div>
                          </div>
                          <div className="text-xs text-blue-100/80 mb-1">
                            Blood pressure consultation
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-blue-300">
                              Awaiting response
                            </span>
                          </div>
                        </div>

                        {/* Response Received */}
                        <div className="bg-green-900/20 rounded-lg p-2 border border-green-600/30">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
                              JS
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-white font-medium">
                                James Sullivan
                              </div>
                              <div className="text-xs text-green-100/60">
                                Financial Advisor
                              </div>
                            </div>
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-green-400"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                            </svg>
                          </div>
                          <div className="text-xs text-green-100/80 mb-1">
                            Retirement planning review
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-green-300 font-medium">
                              New response received
                            </span>
                          </div>
                        </div>

                        {/* Scheduled */}
                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
                              MP
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-white font-medium">
                                Maria Patel
                              </div>
                              <div className="text-xs text-white/60">
                                Tax Consultant
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60 mt-1">
                            Scheduled for Oct 10, 3:00 PM
                          </div>
                        </div>
                      </div>

                      {/* View All Button */}
                      <div className="mt-auto">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              View All Consultations
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Professional Directory Page */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-0 transform translate-x-[100%]"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-white">
                          Find Experts
                        </h2>
                        <div className="w-7 h-7 bg-blue-600/30 rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-blue-300"
                          >
                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </div>
                      </div>

                      {/* Category Tabs */}
                      <div className="flex gap-1 mb-3 overflow-x-auto">
                        <div className="px-2 py-1 bg-blue-600/40 rounded-full text-xs text-white whitespace-nowrap">
                          Medical
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60 whitespace-nowrap">
                          Legal
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60 whitespace-nowrap">
                          Finance
                        </div>
                      </div>

                      {/* Professional List */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                              AK
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Dr. Alex Kim
                              </div>
                              <div className="text-xs text-white/50">
                                Neurologist
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-3 h-3 text-yellow-400"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <span className="text-xs text-white/60">
                                  4.9
                                </span>
                                <span className="text-xs text-white/40">
                                  • 15 years
                                </span>
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
                            <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                              SL
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Dr. Sarah Lopez
                              </div>
                              <div className="text-xs text-white/50">
                                Dermatologist
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-3 h-3 text-yellow-400"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <span className="text-xs text-white/60">
                                  4.8
                                </span>
                                <span className="text-xs text-white/40">
                                  • 12 years
                                </span>
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
                            <div className="w-9 h-9 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                              TM
                            </div>
                            <div>
                              <div className="text-xs text-white font-medium">
                                Dr. Thomas Moore
                              </div>
                              <div className="text-xs text-white/50">
                                Psychiatrist
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-3 h-3 text-yellow-400"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <span className="text-xs text-white/60">
                                  5.0
                                </span>
                                <span className="text-xs text-white/40">
                                  • 20 years
                                </span>
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

                      {/* Request Consultation Button */}
                      <div className="mt-3">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg px-3 py-2">
                          <div className="text-center">
                            <span className="text-xs text-white font-medium">
                              Request Consultation
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
              className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 
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

export default ProfessionalConsultPhone;