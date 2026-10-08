import React from "react";
import { motion } from "framer-motion";

export function Loader() {
  return (
<<<<<<< HEAD
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-14 h-14 rounded-full border-2 border-gray-800 animate-[spin_2s_linear_infinite]" />

        {/* Gradient spinning arc */}
        <div
          className="absolute top-0 left-0 w-14 h-14 rounded-full border-2 border-transparent animate-[spin_1s_ease-in-out_infinite]"
          style={{
            borderTopColor: "rgb(168, 85, 247)",
            borderRightColor: "rgb(59, 130, 246)",
          }}
        />

        {/* Center dot pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
=======
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative flex flex-col items-center gap-4">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M30 20 Q30 35, 50 50 Q70 65, 70 80"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
              pathOffset: [0, 0, 1]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="30" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm font-medium text-purple-300 tracking-widest uppercase"
        >
          Loading
        </motion.p>
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
      </div>
    </div>
  );
}