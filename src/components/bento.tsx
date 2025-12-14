"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiCode, FiLayout, FiSmile, FiTrendingUp, FiZap, FiShield } from "react-icons/fi";

interface BentoItemProps {
  title: string;
  description: string;
  icon: IconType;
  className?: string;
}

const BentoItem = ({
  title,
  description,
  icon: Icon,
  className,
}: BentoItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 shadow-lg hover:border-purple-500/30 transition-all duration-300 ${className}`}
    >
      <div className="relative z-10">
        <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl w-fit mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform transition-all duration-500 group-hover:scale-150"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform transition-all duration-500 group-hover:scale-150"></div>

      {/* Gradient border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 pointer-events-none"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
};

const BentoGrid = () => {
  const items = [
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

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="text-center mb-10">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Fitness & Health Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Everything You Need to Feel and Perform Better
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover adaptable tools for training, nutrition, recovery, and professional guidance—all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {items.map((item, i) => (
            <BentoItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;