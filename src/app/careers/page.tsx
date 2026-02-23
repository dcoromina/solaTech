"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Code, Coffee, Globe, Heart, Rocket, UserPlus } from "lucide-react";

export default function CareersPage() {
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

  const jobOpenings = [
    {
      title: "Senior Full Stack Engineer",
      category: "Engineering",
      location: "Remote / HQ - SF",
      type: "Full-Time",
    },
    {
      title: "AI/ML Health Scientist",
      category: "Research",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Product Designer",
      category: "Design",
      location: "HQ - Barcelona",
      type: "Full-Time",
    },
    {
      title: "Marketing Lead",
      category: "Growth",
      location: "Remote / London",
      type: "Full-Time",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-purple/30">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/5 border border-border text-purple text-sm font-medium tracking-wide mb-8"
          >
            <Rocket className="w-4 h-4" />
            <span>We are hiring</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-muted"
          >
            Build the Future of <br className="hidden md:block" /> Fitness Technology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            At SolaTech, we&apos;re not just coding; we&apos;re crafting experiences that transform lives.
            Join a team of passionate creators, engineers, and fitness enthusiasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-all hover:scale-105"
            >
              View Open Roles <UserPlus className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Culture / Values */}
        <section className="py-24 bg-background/50 border-y border-border">
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
                  className="p-8 rounded-3xl bg-card border border-border hover:border-purple/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center text-purple mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Work where you thrive.</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We believe that great work happens when people are happy, healthy, and inspired.
                  That&apos;s why we offer a flexible, remote-first environment with benefits that support your whole self.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                      <div className="text-purple">{perk.icon}</div>
                      <span className="font-medium text-foreground">{perk.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-border bg-card relative">
                  {/* Placeholder for team image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple/20 to-blue/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                    Team Collaboration Photo
                  </div>
                </div>
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-border shadow-xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Health Stipend</div>
                      <div className="text-xs text-muted-foreground">Monthly Wellness</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="openings" className="py-24 bg-gradient-to-t from-background to-background/50 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Current Openings</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are constantly looking for talent to join our mission.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {jobOpenings.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold group-hover:text-purple transition-colors text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-md bg-muted/5 border border-border">{job.category}</span>
                      <span>&bull;</span>
                      <span>{job.location}</span>
                      <span>&bull;</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:careers@solatech.com?subject=Application for ${job.title}`}
                    className="px-6 py-2 rounded-xl bg-purple hover:bg-purple/90 text-primary-foreground font-semibold transition-all text-center whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">Don&apos;t see a role that fits? Send us your resume anyway.</p>
              <Link href="mailto:careers@solatech.com" className="text-purple hover:text-foreground transition-colors underline underline-offset-4">
                Contact Recruiting Team &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
