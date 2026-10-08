"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const storeButtons = [
    {
        id: "ios",
        eyebrow: "Download on the",
        label: "App Store",
        icon: "/icons/apple.svg",
        href: "https://apps.apple.com",
    },
    {
        id: "android",
        eyebrow: "Get it on",
        label: "Google Play",
        icon: "/icons/google-play.svg",
        href: "https://play.google.com/store",
    },
];

const pathways = [
    {
        title: "Start as a Club",
        description: "Launch your community hub for teams, gyms, and hybrid programs.",
        href: "/solaclub",
        badge: "Coaches & Communities",
    },
    {
        title: "Start as a Pro",
        description: "Unlock client management, premium content, and direct-to-athlete tools.",
        href: "/solapro",
        badge: "Creators & Trainers",
    },
];

export default function JoinNowPage() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-white selection:bg-purple-500/30">
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-900/80 backdrop-blur-xl">
                <Navbar />
            </header>

            <main className="grid flex-1 grid-cols-1 lg:grid-cols-2">
                {/* Visual / App Download Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-gray-900 to-purple-900/40 p-8 lg:p-16 flex flex-col justify-center">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 max-w-xl mx-auto lg:mx-0 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 uppercase tracking-widest">
                                Mobile Experience
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Take SolaTech <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Everywhere.</span>
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                                Keep coaching, tracking, and engaging your community on the go. Scan to download the app instantly.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col sm:flex-row items-center gap-8 bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="bg-white p-2 rounded-xl border-4 border-white/10 shadow-xl">
                                {/* Placeholder QR Code - In production use a real QR for the app link */}
                                <Image
                                    src="/qr-placeholder.svg"
                                    alt="Scan to Download SolaTech App"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="text-center sm:text-left space-y-2">
                                <p className="font-semibold text-lg">Scan to Download</p>
                                <p className="text-sm text-gray-400 max-w-[200px]">Available on iOS and Android devices.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            {storeButtons.map((button) => (
                                <Link
                                    key={button.id}
                                    href={button.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 transition hover:bg-white/10 hover:scale-105"
                                >
                                    <Image src={button.icon} alt={button.label} width={24} height={24} className="opacity-80" />
                                    <div className="flex flex-col text-left leading-none">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                                            {button.eyebrow}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-200">{button.label}</span>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Pathway Section */}
                <section className="flex items-center justify-center p-8 lg:p-16 bg-gray-950 border-t lg:border-t-0 lg:border-l border-white/10">
                    <div className="w-full max-w-lg space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Choose your path.</h2>
                            <p className="text-gray-400">
                                Whether you represents a team or yourself, we have a tailored experience waiting for you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {pathways.map((pathway, idx) => (
                                <Link
                                    key={pathway.title}
                                    href={pathway.href}
                                    className="group relative block"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="relative z-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gray-900 p-6 transition-all group-hover:bg-gray-800 group-hover:border-purple-500/30 group-hover:translate-x-2"
                                    >
                                        <div className="flex justify-between items-start">
                                            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-purple-300">
                                                {pathway.badge}
                                            </span>
                                            <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-200 transition-colors">{pathway.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed text-balance">
                                                {pathway.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </Link>
                            ))}

                            {/* Login / Dashboard Access */}
                            <Link href="/soladash" className="group relative block mt-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative z-10 flex flex-row items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-gray-900 to-gray-800 p-4 transition-all group-hover:border-blue-500/30 group-hover:translate-x-2"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-bold text-gray-200 group-hover:text-blue-200 transition-colors">Wait, I already have an account</h3>
                                        <p className="text-xs text-gray-400">Log in to your SolaDash dashboard</p>
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors pr-2">→</span>
                                </motion.div>
                            </Link>
                        </div>

                        <div className="pt-8 border-t border-white/5 text-center sm:text-left">
                            <p className="text-sm text-gray-500">
                                Not sure where to start?{" "}
                                <Link href="/contact" className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition-colors">
                                    Chat with our team
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}