"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: "70K+",
    label: "Active Members",
    description: "Growing community",
  },
  {
    number: "20K+",
    label: "Workouts & Diets",
    description: "Personalized plans",
  },
  {
    number: "500+",
    label: "Events",
    description: "Worldwide sessions",
  },
  {
    number: "1K+",
    label: "Partner Clubs",
    description: "Trusted partners",
  },
] as const;

interface Stat {
  number: string;
  label: string;
  description: string;
}

function CountUpStat({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const parseStatNumber = (numStr: string) => {
    const match = numStr.match(/(\d+)(.*)/);
    if (!match) return { number: 0, suffix: "" };

    const number = parseInt(match[1]);
    const suffix = match[2];

    return { number, suffix };
  };

  const { number: targetNumber, suffix } = parseStatNumber(stat.number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative text-center group"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2 tabular-nums">
          {count}
          {suffix}
        </div>
        <div className="text-white font-medium mb-1">{stat.label}</div>
        <div className="text-gray-500 text-sm">{stat.description}</div>
      </div>

      {/* Separator line (hidden on last item) */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      )}
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-900 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, index) => (
            <CountUpStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}