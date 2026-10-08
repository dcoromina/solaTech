"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const integrations = [
  { name: "Google Fit", icon: "/icons/google-fit.png" },
  { name: "Strava", icon: "/icons/strava.svg" },
  { name: "Apple Health", icon: "/icons/apple-health.svg" },
  { name: "MyFitnessPal", icon: "/icons/myfitnesspal.png" },
  { name: "Whoop", icon: "/icons/whoop.png" },
  { name: "Oura", icon: "/icons/oura.png" },
];

export function IntegrationSection() {
  return (
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
