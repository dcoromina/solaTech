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
      className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-lg hover:border-purple-500/30 transition-all duration-300 ${className}`}
    >
      <div className="relative z-10">
        <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl w-fit mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
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
      title: "Advanced Analytics",
      description:
        "Powerful AI-driven insights that help healthcare providers make data-informed decisions and improve patient outcomes.",
      icon: FiTrendingUp,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Custom Workflows",
      description: "Tailored workflow automation that adapts to your organization's unique processes and requirements.",
      icon: FiLayout,
    },
    {
      title: "Developer APIs",
      description: "Comprehensive RESTful APIs with extensive documentation for seamless third-party integrations.",
      icon: FiCode,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with HIPAA compliance, end-to-end encryption, and regular security audits.",
      icon: FiShield,
    },
    {
      title: "Quick Deployment",
      description: "Get started quickly with our streamlined onboarding process and dedicated implementation support.",
      icon: FiZap,
      className: "md:col-span-2",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer success management for enterprise clients.",
      icon: FiSmile,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Additional Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Everything You Need
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover additional powerful features designed to enhance your healthcare technology stack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {items.map((item, i) => (
            <BentoItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;