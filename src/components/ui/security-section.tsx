"use client";
import React from "react";
import { Shield, Lock, Eye, FileCheck, Server, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "HIPAA Compliant",
    description:
      "Full compliance with healthcare data protection regulations including HIPAA, GDPR, and SOC 2.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Access Controls",
    description:
      "Role-based access control with multi-factor authentication and audit logging.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Regular Audits",
    description:
      "Continuous security monitoring and regular third-party security audits.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Secure Infrastructure",
    description:
      "Cloud infrastructure with 99.9% uptime SLA and disaster recovery protocols.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Privacy by Design",
    description:
      "Built with privacy principles from the ground up, ensuring patient data protection.",
  },
];

const certifications = [
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
  },
  { name: "SOC 2 Type II", description: "Service Organization Control 2" },
  { name: "GDPR", description: "General Data Protection Regulation" },
  { name: "ISO 27001", description: "Information Security Management" },
];

export function SecuritySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full text-green-300 font-medium tracking-wide text-sm uppercase border border-green-500/20 mb-4 inline-block">
            Security & Compliance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your data security is our top priority. We maintain the highest
            standards of security and compliance to protect sensitive healthcare
            information.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Certifications */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Security Promise
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We understand that healthcare data is among the most sensitive
              information. That&apos;s why we&apos;ve built our platform with
              security as a foundational principle, not an afterthought. Every
              feature, every integration, and every update is designed with your
              data protection in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
