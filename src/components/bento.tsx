"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiCode, FiLayout, FiSmile, FiTrendingUp, FiZap } from "react-icons/fi";

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
      className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-lg ${className}`}
    >
      <div className="relative z-10">
        <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl w-fit mb-5 shadow-md">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-purple-100/70">{description}</p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform transition-all duration-500 group-hover:scale-150"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform transition-all duration-500 group-hover:scale-150"></div>

      {/* Gradient border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 pointer-events-none"
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
      title: "Analytics Dashboard",
      description:
        "Track your fitness progress with detailed insights and metrics.",
      icon: FiTrendingUp,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Workout Plans",
      description: "Customized training programs tailored to your goals.",
      icon: FiLayout,
    },
    {
      title: "Integration",
      description: "Connect with your favorite fitness apps and devices.",
      icon: FiCode,
    },
    {
      title: "Quick Start",
      description: "Get started with our easy onboarding process.",
      icon: FiZap,
      className: "md:col-span-2",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Solutions
        </h2>
        <p className="text-purple-100/70 max-w-2xl mx-auto">
          Discover our powerful tools designed to enhance your fitness journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[200px]">
        {items.map((item, i) => (
          <BentoItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
