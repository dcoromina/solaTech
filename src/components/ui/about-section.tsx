"use client";
import React from "react";
import { Users, Target, Award, Globe } from "lucide-react";

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Patient-Centered",
    description:
      "Every solution we build puts patient care and outcomes at the center of our design philosophy.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation-Driven",
    description:
      "We leverage cutting-edge technology to solve complex healthcare challenges and improve lives.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Excellence",
    description:
      "Our commitment to quality ensures reliable, secure, and compliant healthcare solutions.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description:
      "Building scalable solutions that can transform healthcare delivery worldwide.",
  },
];

const stats = [
  { number: "2019", label: "Founded" },
  { number: "50+", label: "Team Members" },
  { number: "100+", label: "Healthcare Partners" },
  { number: "1M+", label: "Lives Impacted" },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            About SolaTech
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transforming Healthcare Through Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Founded with a mission to revolutionize healthcare delivery,
            SolaTech combines cutting-edge technology with deep healthcare
            expertise to create solutions that improve patient outcomes and
            streamline operations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                SolaTech was born from a simple observation: healthcare
                technology was fragmented, complex, and often failed to serve
                the people who needed it most - patients and healthcare
                providers.
              </p>
              <p>
                Our founders, with backgrounds in both healthcare and
                technology, set out to bridge this gap. We believe that
                technology should enhance human connection in healthcare, not
                replace it.
              </p>
              <p>
                Today, we&apos;re proud to serve healthcare organizations
                worldwide, helping them deliver better care through innovative,
                user-friendly solutions that scale with their needs.
              </p>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-6">
              Key Milestones
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                <div>
                  <div className="text-white font-medium">
                    2019 - Company Founded
                  </div>
                  <div className="text-gray-400 text-sm">
                    Started with a vision to transform healthcare
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <div>
                  <div className="text-white font-medium">
                    2021 - First Enterprise Client
                  </div>
                  <div className="text-gray-400 text-sm">
                    Deployed our first large-scale solution
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <div>
                  <div className="text-white font-medium">
                    2023 - HIPAA Certification
                  </div>
                  <div className="text-gray-400 text-sm">
                    Achieved full compliance certification
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                  <div className="text-white font-medium">
                    2024 - Global Expansion
                  </div>
                  <div className="text-gray-400 text-sm">
                    Serving clients across 15 countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(value.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
