import React from "react";

const stats = [
  {
    number: "98%",
    label: "User Satisfaction",
  },
  {
    number: "40%",
    label: "Improved Outcomes",
  },
  {
    number: "24/7",
    label: "Health Monitoring",
  },
  {
    number: "50k+",
    label: "Active Users",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
