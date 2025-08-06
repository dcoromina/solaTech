"use client";
import React from "react";
import { Zap, Database, Cloud, Smartphone, Monitor, Wifi } from "lucide-react";

const integrations = [
  {
    category: "EHR Systems",
    items: ["Epic", "Cerner", "Allscripts", "athenahealth", "NextGen"],
  },
  {
    category: "Wearable Devices",
    items: ["Apple Watch", "Fitbit", "Garmin", "Samsung Health", "Oura Ring"],
  },
  {
    category: "Lab Systems",
    items: ["LabCorp", "Quest", "Cepheid", "Abbott", "Roche"],
  },
  {
    category: "Imaging",
    items: ["DICOM", "PACS", "GE Healthcare", "Philips", "Siemens"],
  },
];

const apiFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "RESTful APIs",
    description:
      "Modern, developer-friendly APIs with comprehensive documentation",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Real-time Data",
    description: "WebSocket connections for real-time health data streaming",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Native",
    description: "Built for cloud deployment with auto-scaling capabilities",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile SDKs",
    description: "Native iOS and Android SDKs for seamless mobile integration",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web Components",
    description: "Embeddable web components for quick integration",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "IoT Ready",
    description: "Connect medical devices and IoT sensors effortlessly",
  },
];

export function integrate() {
  return (
    <section className="pt-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-300 font-medium tracking-wide text-sm uppercase border border-blue-500/20 mb-4 inline-block">
            Integrations & APIs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Connect Everything
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrate with your existing healthcare ecosystem. Our
            platform connects with leading EHR systems, medical devices, and
            third-party applications.
          </p>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {apiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrations.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-400 text-sm flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Developer Resources */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Developer Resources
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get started quickly with our comprehensive documentation, SDKs,
              and developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200">
                View API Docs
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-200 border border-white/20">
                Download SDKs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
