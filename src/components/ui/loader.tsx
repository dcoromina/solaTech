import React from "react";

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-700 animate-[spin_1.5s_linear_infinite]" />

        {/* Inner circle */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 animate-[spin_1s_ease-in-out_infinite]" />

        {/* Loading text */}
        <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
}
