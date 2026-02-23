"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function IntegrationSection() {
  const integrations = [
    { name: "Google Fit", icon: "/icons/google-fit.png" },
    { name: "Strava", icon: "/icons/strava.svg" },
    { name: "Apple Health", icon: "/icons/apple-health.svg" },
    { name: "MyFitnessPal", icon: "/icons/myfitnesspal.png" },
    { name: "Whoop", icon: "/icons/whoop.png" },
    { name: "Oura", icon: "/icons/oura.png" },
    // Duplicate for seamless loop if needed, though we can map twice in the render
  ];

  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative mb-12">
        <span className="px-4 py-2 bg-gradient-to-r from-purple/10 to-blue/10 rounded-full text-purple font-medium tracking-wide text-sm uppercase border border-purple/20 mb-4 inline-block">
          Platform Features
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Seamless Integration
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our modular architecture allows for easy integration with your
          existing systems
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto overflow-hidden">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-3 md:px-4"
          >
            {/* Render duplicated list for seamless loop */}
            {[...duplicatedIntegrations, ...duplicatedIntegrations].map((app, index) => (
              <div
                key={`${app.name}-${index}`}
                className="flex items-center flex-shrink-0 space-x-2 sm:space-x-3 bg-card border border-border rounded-xl pl-3 sm:pl-4 pr-4 sm:pr-6 py-2 sm:py-3 hover:border-purple/30 transition-colors cursor-pointer group"
              >
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-white/10 p-1 flex items-center justify-center">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors">{app.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
