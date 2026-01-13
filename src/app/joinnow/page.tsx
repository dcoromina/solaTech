"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Code, Coffee, Globe, Heart, Rocket, UserPlus } from "lucide-react";

export default function JoinNowPage() {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Health First",
            description: "We practice what we preach. Wellness is at the core of our culture.",
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Innovation",
            description: "We push boundaries to build the most advanced fitness tech.",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Impact",
            description: "Our work empowers athletes and coaches around the world.",
        },
    ];

    const perks = [
        { title: "Remote-First", icon: <Globe className="w-5 h-5" /> },
        { title: "Competitive Pay", icon: <Award className="w-5 h-5" /> },
        { title: "Health Benefits", icon: <Heart className="w-5 h-5" /> },
        { title: "Flexible Hours", icon: <Coffee className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-white selection:bg-purple-500/30">
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-900/80 backdrop-blur-xl">
                <Navbar />
            </header>

            <main className="flex-1 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] opacity-40" />
                    <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-40" />
                </div>

                {/* Hero */}
                <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium tracking-wide mb-8"
                    >
                        <Rocket className="w-4 h-4" />
                        <span>We are hiring</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
                    >
                        Build the Future of <br className="hidden md:block" /> Fitness Technology.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        At SolaTech, we're not just coding; we're crafting experiences that transform lives.
                        Join a team of passionate creators, engineers, and fitness enthusiasts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="#openings"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            View Open Roles <UserPlus className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </section>

                {/* Culture / Values */}
                <section className="py-24 bg-gray-900/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
                            <p className="text-gray-400">Driven by passion, united by purpose.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-300 mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Perks Grid */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Work where you thrive.</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We believe that great work happens when people are happy, healthy, and inspired.
                                    That's why we offer a flexible, remote-first environment with benefits that support your whole self.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {perks.map((perk, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="text-purple-400">{perk.icon}</div>
                                            <span className="font-medium">{perk.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gray-800/50 relative">
                                    {/* Placeholder for team image */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium">
                                        Team Collaboration Photo
                                    </div>
                                </div>
                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-gray-800 border border-white/10 shadow-xl max-w-xs"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                            <Heart className="w-5 h-5 fill-current" />
                                        </div>
                                        <div>
                                            <div className="font-bold">Health Stipend</div>
                                            <div className="text-xs text-gray-400">Monthly Wellness</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA / Open Roles Placeholder */}
                <section id="openings" className="py-24 bg-gradient-to-t from-black to-gray-900 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
                        <p className="text-gray-400 mb-10">
                            We are constantly looking for talent. If you don't see a role that fits, send us your resume anyway.
                        </p>

                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 mb-8">
                            <p className="text-lg text-gray-300">No specific positions listed at the moment.</p>
                        </div>

                        <Link href="mailto:careers@solatech.com" className="text-purple-400 hover:text-white transition-colors underline underline-offset-4">
                            Contact Recruiting Team &rarr;
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
