import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "70K+",
    label: "Active Members",
  },
  {
    number: "20K+",
    label: "Workouts & Diets",
  },
  {
    number: "500+",
    label: "Events",
  },
  {
    number: "1K+",
    label: "Partner Clubs",
  },
] as const;

interface Stat {
  number: string;
  label: string;
}

function CountUpStat({ stat }: { stat: Stat }) {
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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CountUpStat stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}