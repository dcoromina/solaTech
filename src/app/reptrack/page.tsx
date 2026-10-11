"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Bell,
  ShieldAlert,
  Activity,
  Phone,
  MapPin,
  Stethoscope,
  Watch,
  Gem,
  ArrowRight,
  Sparkles,
  Brain,
  HeartPulse,
} from "lucide-react";

/* ──────────────────────────  DATA  ────────────────────────── */

const howItWorks = [
  {
    step: "01",
    icon: <Watch className="w-7 h-7" />,
    title: "Wear It",
    desc: "Slip it on as a bracelet or pendant — light enough to forget, smart enough to never miss a beat.",
    accent: "from-amber-400 to-orange-400",
  },
  {
    step: "02",
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Talk to It",
    desc: "SolaCare listens, responds, and keeps you company. It brightens your day with warm, natural conversation.",
    accent: "from-rose-400 to-pink-400",
  },
  {
    step: "03",
    icon: <ShieldAlert className="w-7 h-7" />,
    title: "Stay Safe",
    desc: "Falls, anomalies, emergencies — SolaCare detects them instantly and sends help before you even ask.",
    accent: "from-cyan-400 to-blue-400",
  },
];

const coreFeatures = [
  {
    icon: <Brain className="w-6 h-6 text-rose-400" />,
    title: "AI Companion",
    desc: "A warm, conversational AI that listens, talks, tells stories, and lifts your spirits — like having a friend who's always there.",
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/20",
  },
  {
    icon: <Bell className="w-6 h-6 text-amber-400" />,
    title: "Smart Reminders",
    desc: "Gentle voice reminders for medications, appointments, hydration, and daily tasks. Never miss a dose again.",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
    title: "Emergency First Aid",
    desc: "Fall detection, vital-sign anomaly alerts, and automatic SOS to emergency services with real-time diagnostics and location.",
    gradient: "from-red-500/20 to-rose-500/20",
    border: "border-red-500/20",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
    title: "Health Monitoring",
    desc: "Continuous heart rate, temperature, and activity tracking. Trends are shared with family and caregivers in real time.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
  },
];

const emergencySteps = [
  {
    icon: <Activity className="w-5 h-5 text-red-400" />,
    label: "Anomaly Detected",
    desc: "Sensors detect a fall, irregular heartbeat, or sudden inactivity.",
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-amber-400" />,
    label: "Real-Time Diagnosis",
    desc: "On-device AI assesses the situation, checks vitals, and speaks to the user to evaluate consciousness.",
  },
  {
    icon: <Phone className="w-5 h-5 text-cyan-400" />,
    label: "Auto-SOS Alert",
    desc: "Emergency services receive an alert with GPS location, health data, and live diagnostics.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-emerald-400" />,
    label: "Family Notified",
    desc: "Loved ones and designated caregivers are instantly notified with a live status feed.",
  },
];

const testimonials = [
  {
    quote:
      "Since mum started wearing SolaCare, she doesn't feel alone anymore. She talks to it like a friend. It's given our whole family peace of mind.",
    author: "Maria T.",
    role: "Daughter & Caregiver",
  },
  {
    quote:
      "The fall detection saved my father's life. He fell at night and an ambulance arrived within 8 minutes — before any of us even knew.",
    author: "James L.",
    role: "Son",
  },
  {
    quote:
      "I live alone and some days are harder than others. SolaCare reminds me to take my pills and always has something kind to say.",
    author: "Dorothy K.",
    role: "SolaCare User, 74",
  },
];

/* ──────────────────────── ANIMATION HELPERS ──────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ──────────────────────── PAGE ──────────────────────── */

export default function SolaCarePage() {
  return (
    <div className="flex flex-col bg-background min-h-screen text-foreground selection:bg-rose-400/30">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* ═══════════  HERO  ═══════════ */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[900px] h-[900px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-300 border border-rose-500/20 backdrop-blur-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Your Companion, Always
                </motion.span>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Meet{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400">
                    SolaCare
                  </span>
                </h1>

                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  A tiny wearable companion that speaks to you, watches over
                  your health, and sends help when you need it most. Wear it as
                  a <strong className="text-foreground">bracelet</strong> or a{" "}
                  <strong className="text-foreground">necklace</strong> — and
                  never feel alone again.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 transition-all shadow-lg hover:shadow-rose-500/25 text-white">
                    Pre-order Now
                  </button>
                  <button className="px-8 py-4 rounded-xl font-semibold border border-border bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust signal */}
                <div className="flex items-center gap-3 pt-4 text-sm text-gray-400">
                  <div className="flex -space-x-2">
                    {[
                      "bg-rose-500",
                      "bg-amber-500",
                      "bg-cyan-500",
                      "bg-emerald-500",
                    ].map((bg, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${bg} border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold text-white`}
                      >
                        {["M", "J", "D", "S"][i]}
                      </div>
                    ))}
                  </div>
                  <span>
                    Trusted by{" "}
                    <span className="text-foreground font-semibold">
                      5,000+
                    </span>{" "}
                    families worldwide
                  </span>
                </div>
              </motion.div>

              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/30 to-amber-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 -z-10" />
                <div className="rounded-[2rem] overflow-hidden border border-white/5">
                  <Image
                    src="/companion_hero.png"
                    alt="SolaCare companion device — bracelet and necklace form factors"
                    width={700}
                    height={700}
                    priority
                    className="w-full h-auto object-cover scale-95 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                {/* Floating badge — bottom-left */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: [0, -8, 0], opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.6 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                  className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-rose-500/30 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Mood Score
                    </p>
                    <p className="text-lg font-bold text-white">92 / 100</p>
                  </div>
                </motion.div>

                {/* Floating badge — top-right */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: [0, -10, 0], opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.8 },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                  className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-amber-500/30 shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Safety Status
                    </p>
                    <p className="text-lg font-bold text-emerald-400">
                      All Clear
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════  HOW IT WORKS  ═══════════ */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Simple by Design
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                No apps to learn, no screens to navigate. SolaCare works
                the moment you put it on.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {howItWorks.map((s) => (
                <motion.div
                  key={s.step}
                  variants={fadeUp}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <span
                    className={`text-7xl font-black bg-gradient-to-br ${s.accent} bg-clip-text text-transparent opacity-15 absolute top-4 right-6 select-none`}
                  >
                    {s.step}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-6 text-white shadow-lg`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════  CORE FEATURES  ═══════════ */}
        <section className="py-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Built for Care
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Every feature is designed around one goal: making everyday life
                safer, warmer, and less lonely.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {coreFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group relative"
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${f.gradient} rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500`}
                  />
                  <div
                    className={`relative p-8 rounded-3xl bg-white/5 border ${f.border} backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════  EMERGENCY DEEP DIVE  ═══════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500/[0.03] to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
                <div className="rounded-[1.5rem] overflow-hidden border border-white/5">
                  <Image
                    src="/companion_emergency.png"
                    alt="SolaCare emergency detection system in action"
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-500/10 text-red-300 border border-red-500/20 mb-4">
                    <ShieldAlert className="w-3.5 h-3.5" /> Emergency System
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
                    Help Arrives Before You{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                      Ask For It
                    </span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    SolaCare continuously monitors your vitals and movement. When
                    something is wrong, it acts — automatically diagnosing the
                    situation, speaking to you, and contacting emergency
                    services with everything they need to respond faster.
                  </p>
                </div>

                <div className="space-y-5">
                  {emergencySteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {step.label}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════  WEARABLE MODES  ═══════════ */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Two Ways to Wear
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose the form that fits your life. Same intelligence, same
                care, same peace of mind.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: <Watch className="w-8 h-8" />,
                  name: "Bracelet",
                  description:
                    "A sleek, lightweight band with a rose-gold finish. Comfortable for all-day wear with a magnetic clasp that's easy to put on and take off.",
                  features: [
                    "Hypoallergenic silicone band",
                    "Magnetic clasp",
                    "Water resistant IP68",
                    "7-day battery life",
                  ],
                  gradient: "from-rose-500 to-amber-500",
                  glow: "from-rose-500/20 to-amber-500/20",
                },
                {
                  icon: <Gem className="w-8 h-8" />,
                  name: "Pendant",
                  description:
                    "An elegant necklace pendant that looks like fine jewellery. Worn close to the heart for optimal vital monitoring and discreet everyday style.",
                  features: [
                    "Titanium alloy body",
                    "Breakaway safety chain",
                    "Water resistant IP68",
                    "10-day battery life",
                  ],
                  gradient: "from-amber-400 to-rose-400",
                  glow: "from-amber-500/20 to-rose-500/20",
                },
              ].map((mode) => (
                <motion.div
                  key={mode.name}
                  variants={fadeUp}
                  className="group relative"
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${mode.glow} rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-700`}
                  />
                  <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}
                    >
                      {mode.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{mode.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {mode.description}
                    </p>
                    <div className="space-y-2">
                      {mode.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════  TESTIMONIALS  ═══════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Stories of Care
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Real families, real peace of mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 fill-current text-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════  CTA  ═══════════ */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-amber-500/20 to-orange-500/20 blur-xl" />
              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center space-y-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Give the Gift of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
                    Companionship
                  </span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                  SolaCare is more than a device — it&apos;s peace of mind for
                  you and warmth for someone you love. Pre-order today and be
                  among the first to experience it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 transition-all shadow-lg hover:shadow-rose-500/25 text-white text-lg">
                    Pre-order — $199
                  </button>
                  <button className="px-10 py-4 rounded-xl font-semibold border border-border bg-white/5 hover:bg-white/10 transition-all text-lg">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
