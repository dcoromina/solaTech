import React from "react";
import {
  Activity,
  Brain,
  Heart,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Health Insights",
    description:
      "Advanced algorithms analyze your health data to provide personalized recommendations and early warning signs.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Real-time Monitoring",
    description:
      "Track vital signs, activity levels, and health metrics in real-time with medical-grade accuracy.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "HIPAA Compliant Security",
    description:
      "Enterprise-grade encryption and security protocols to keep your health data safe and private.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Care Team Collaboration",
    description:
      "Connect your entire healthcare team for better coordinated care and improved outcomes.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Health Platform",
    description:
      "Access your health data and insights anywhere, anytime through our mobile and web applications.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Predictive Analytics",
    description:
      "Stay ahead of health issues with predictive modeling and early warning systems.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-800/10 to-blue-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Advanced Healthcare Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed for modern healthcare needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                {React.cloneElement(feature.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <h3 className="text-xl font-semibold text-purple-500 mb-3">
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
