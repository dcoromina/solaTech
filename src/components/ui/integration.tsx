"use client";
import React from "react";
import Image from "next/image";
import { Users, Target, Award, Globe } from "lucide-react";

export function IntegrationSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
          Platform Features
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Seamless Integration
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our modular architecture allows for easy integration with your
          existing systems
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          {[
            { name: "Google Fit", icon: "/icons/google-fit.png" },
            { name: "Strava", icon: "/icons/strava.svg" },
            { name: "Apple Health", icon: "/icons/apple-health.svg" },
            { name: "MyFitnessPal", icon: "/icons/myfitnesspal.png" },
            { name: "Whoop", icon: "/icons/whoop.png" },
            { name: "Oura", icon: "/icons/oura.png" },
          ].map((app) => (
            <div
              key={app.name}
              className="flex items-center space-x-3 bg-white/5 focus:bg-white/30 border border-white/10 rounded-xl pl-3 pr-5 py-2 hover:border-blue-500/30 transition-all duration-300"
            >
              <Image
                src={app.icon}
                alt={app.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-white text-sm font-medium">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
