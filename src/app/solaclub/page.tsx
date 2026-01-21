"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { BookOpen, Users, Calendar, Activity, ArrowRight, TrendingUp } from "lucide-react";

export default function SolaClubPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col bg-gray-950 min-h-screen text-white selection:bg-green-500/30">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">


        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-1.5 bg-green-500/10 rounded-full text-green-300 font-medium text-xs uppercase tracking-wider border border-green-500/20 inline-block backdrop-blur-sm"
                >
                  For Coaches & Communities
                </motion.span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Grow Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500">
                    Community
                  </span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  A powerful hub to plan programs, manage clients, and deliver premium content. Turn your passion into a thriving business with SolaClub.
                </p>
                {/* Store badges */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="#" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white hover:bg-white/10 transition-colors shadow-sm group">
                    <Image src="/icons/apple.svg" alt="Apple" width={30} height={30} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col leading-none text-left">
                      <span className="text-[10px] uppercase tracking-wide text-gray-400">Download on the</span>
                      <span className="text-sm font-semibold">App Store</span>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors shadow-sm group">
                    <Image src="/icons/google-play.svg" alt="Google Play" width={30} height={30} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col leading-none text-left">
                      <span className="text-[10px] uppercase tracking-wide text-gray-400">Download it on</span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </div>
                  </Link>
                </div>

                {/* Rating */}
                <div className="flex flex-col gap-3 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xl font-bold text-white">4.9</span>
                    <span className="text-sm text-gray-400 font-medium">/ 5.0</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Trusted by <span className="text-white font-semibold">12,000+ coaches</span> to power their communities.
                  </p>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 -z-10" />

                <div className="rounded-[1rem] overflow-hidden border border-white/5">
                  <Image
                    src="/FoodApp.jpg"
                    alt="SolaClub App Interface"
                    width={600}
                    height={800} // Increased height for better aspect ratio if needed, or keep 400
                    priority
                    className="w-[70%] h-auto object-cover scale-95 group-hover:scale-100 transition-transform duration-700 mx-auto"
                  />
                </div>
                {/* Floating badge 1 (Bottom Left) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: [0, -10, 0], opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.5 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5, // Sync with opacity delay slightly
                    },
                  }}
                  className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-green-500/30 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Active Members</p>
                    <p className="text-lg font-bold text-white">2,500+</p>
                  </div>
                </motion.div>

                {/* Floating badge 2 (Top Right) */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: [0, -10, 0], opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.7 },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    },
                  }}
                  className="absolute -top-6 -right-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-blue-500/30 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Monthly Revenue</p>
                    <p className="text-lg font-bold text-white">+$12.5k</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-950 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Everything you need"
              subtitle="Built to scale your coaching business without the headaches."
              align="center"
            />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            >
              {[
                {
                  icon: <BookOpen className="w-6 h-6 text-green-400" />,
                  title: "Programs & Content",
                  desc: "Publish workouts, challenges, and premium content effortlessly.",
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-400" />,
                  title: "Client Management",
                  desc: "Track progress, chat in real-time, and manage memberships.",
                },
                {
                  icon: <Calendar className="w-6 h-6 text-purple-400" />,
                  title: "Community & Events",
                  desc: "Host physical or virtual events and keep your members engaged.",
                },
                {
                  icon: <Activity className="w-6 h-6 text-orange-400" />,
                  title: "Integrations",
                  desc: "Seamless sync with Apple Health, Strava, and other wearables.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials (Restored & Improved) */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              title="Success Stories"
              subtitle="See how top coaches are scaling with SolaClub."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  quote: "SolaClub is the backbone of my business. We grew from 20 to 200 members in 3 months.",
                  author: "Sarah Jenkins",
                  role: "Head Coach, TriPeak",
                },
                {
                  quote: "The community features are a game changer. My clients actually talk to each other now!",
                  author: "Mike Thompson",
                  role: "Founder, RunFast",
                },
                {
                  quote: "I used to use 5 different apps. Now I just use SolaClub. It saves me 10 hours a week.",
                  author: "Elena Rodriguez",
                  role: "Owner, CoreFit",
                },
              ].map((t, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              title="Trusted by Pros"
              subtitle="Join hundreds of coaches scaling their communities."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  quote: "SolaClub completely transformed how I manage my triathlon team. The programming tools are second to none.",
                  author: "Sarah J.",
                  role: "Head Coach, TriPeak",
                },
                {
                  quote: "Finally, a platform that understands community. Engagement has gone up 200% since we switched.",
                  author: "Mike T.",
                  role: "Founder, RunFast Club",
                },
                {
                  quote: "The ability to monetize premium content seamlessly has created a new revenue stream for my gym.",
                  author: "Elena R.",
                  role: "Owner, CoreFit Studio",
                },
              ].map((t, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1 mb-4 text-green-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>




      </main>
      <Footer />
    </div>
  );
}
