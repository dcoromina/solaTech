"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
<<<<<<< HEAD

const integrations = [
  { name: "Google Fit", icon: "/icons/google-fit.png" },
  { name: "Strava", icon: "/icons/strava.svg" },
  { name: "Apple Health", icon: "/icons/apple-health.svg" },
  { name: "MyFitnessPal", icon: "/icons/myfitnesspal.png" },
  { name: "Whoop", icon: "/icons/whoop.png" },
  { name: "Oura", icon: "/icons/oura.png" },
];
=======
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5

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
<<<<<<< HEAD
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-6 inline-block"
        >
          Platform Features
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Seamless Integration
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Our modular architecture allows for easy integration with your
          existing systems
        </motion.p>

        {/* Integration logos with animated entrance */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-14">
          {integrations.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl pl-3 pr-5 py-3 hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 cursor-default"
            >
              <Image
                src={app.icon}
                alt={app.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-white text-sm font-medium">
                {app.name}
              </span>
            </motion.div>
          ))}
=======
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
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
        </div>

        {/* Connection line visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-sm text-gray-500 mt-4"
        >
          + many more integrations coming soon
        </motion.p>
      </div>
    </section>
  );
}
