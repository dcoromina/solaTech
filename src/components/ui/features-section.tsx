import React from "react";
import { FiCode, FiLayout, FiSmile, FiTrendingUp, FiZap, FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    title: "Progress & Performance Analytics",
    description:
      "Track workouts, recovery, and body metrics with AI-driven insights to optimize your training and health.",
    icon: FiTrendingUp,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Adaptive Programs & Routines",
    description: "Training and wellness plans that auto-adjust to your goals, schedule, and progress.",
    icon: FiLayout,
  },
  {
    title: "Wearables & App Integrations",
    description: "Seamless sync with Apple Health, Google Fit, Strava, Oura, Whoop, and more.",
    icon: FiCode,
  },
  {
    title: "Privacy & Data Security",
    description: "Bank‑level encryption and best‑practice safeguards to protect your health data.",
    icon: FiShield,
  },
  {
    title: "Quick Start Assessments",
    description: "Onboard fast with fitness, nutrition, and lifestyle assessments that personalize your plan.",
    icon: FiZap,
    className: "md:col-span-2",
  },
  {
    title: "24/7 Expert Consultation",
    description: "Chat with certified coaches, trainers, and dietitians anytime you need guidance.",
    icon: FiSmile,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Features & Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Empower Your Health & Fitness Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover AI-driven tools, personalized guidance, and seamless integrations designed to help you thrive in fitness and wellness.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(feature.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
