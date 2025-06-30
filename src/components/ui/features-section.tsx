import React from "react";
import { Code, Shield, Zap, Database, Cloud, Lock } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Enterprise-Grade Architecture",
    description:
      "Built with scalability in mind, our platform handles millions of health data points with ease.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "HIPAA & GDPR Compliant",
    description:
      "End-to-end encryption and strict compliance with healthcare data regulations.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Processing",
    description:
      "Advanced algorithms process health data in real-time for instant insights and alerts.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Analytics Engine",
    description:
      "Powerful analytics tools that transform raw health data into actionable insights.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud-Native Platform",
    description:
      "Built on modern cloud infrastructure for maximum reliability and scalability.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Advanced Security",
    description:
      "Multi-layer security with role-based access control and audit logging.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Ready Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with modern technologies to meet the demands of healthcare
            organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}