import React from "react";

export function Loader() {
  return (
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
      </div>
    </div>
  );
}