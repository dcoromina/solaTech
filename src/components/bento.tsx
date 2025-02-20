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
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 border border-neutral-800/50 ${className}`}
    >
      <div className="relative z-10">
        <Icon className="h-8 w-8 text-emerald-500 mb-4" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>

      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 pointer-events-none"
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
      title: "Community",
      description: "Connect with like-minded fitness enthusiasts.",
      icon: FiSmile,
    },
    {
      title: "Quick Start",
      description: "Get started with our easy onboarding process.",
      icon: FiZap,
      className: "md:col-span-2",
    },
    {
      title: "Integration",
      description: "Connect with your favorite fitness apps and devices.",
      icon: FiCode,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {items.map((item, i) => (
          <BentoItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
