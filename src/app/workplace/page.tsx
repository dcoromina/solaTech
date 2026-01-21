"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Globe, Layout, Users, Zap, MapPin } from "lucide-react";

export default function WorkplacePage() {
  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Open Collaboration",
      description: "Our spaces are designed to foster unplanned interactions and creative collisions.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "State-of-the-art Tech",
      description: "From curved monitors to VR testing labs, we provide the best tools for the job.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Recharge Zones",
      description: "Dedicated spaces for rest, meditation, and of course, premium coffee.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white selection:bg-purple-500/30">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-900/80 backdrop-blur-xl">
        <Navbar />
      </header>

      <main className="flex-1 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-40" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium tracking-wide mb-6"
              >
                <MapPin className="w-4 h-4" />
                <span>Global Headquarters</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
              >
                Designed for <br />
                <span className="text-white">Visionaries.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
              >
                Our workspace is more than just a physical location. It&apos;s a living ecosystem tailored to inspire creativity, support deep focus, and celebrate community.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 aspect-[4/3] relative group">
                <Image
                  src="/office/office1.png"
                  alt="SolaTech Office"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-semibold text-lg">The Main Hub</p>
                  <p className="text-gray-300 text-sm">Where ideas take flight</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-white/5 rounded-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-900/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Remote Statement */}
        <section className="py-24 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Built for Hybrid</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            While we love our hub, we embrace the freedom of remote work.
            Our digital workplace is just as robust as our physical one, ensuring you stay connected from anywhere in the world.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
