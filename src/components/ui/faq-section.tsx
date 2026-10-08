"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does SolaTech ensure HIPAA compliance?",
    answer:
      "SolaTech is built with HIPAA compliance at its core. We implement end-to-end encryption, role-based access controls, audit logging, and regular security assessments. Our platform undergoes annual third-party security audits and maintains SOC 2 Type II certification.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with major EHR systems (Epic, Cerner, Allscripts), wearable devices (Apple Watch, Fitbit, Garmin), lab systems (LabCorp, Quest), and imaging systems (DICOM, PACS). Our RESTful APIs also allow custom integrations with your existing systems.",
  },
  {
    question: "How quickly can we implement SolaTech?",
    answer:
      "Implementation timelines vary based on your organization's size and requirements. Typical deployments range from 2-8 weeks for standard implementations, while enterprise customizations may take 3-6 months. We provide dedicated implementation support throughout the process.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer tiered support based on your plan: email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise clients. All plans include comprehensive documentation, training materials, and onboarding assistance.",
  },
  {
    question: "Can SolaTech scale with our organization?",
    answer:
      "Absolutely. Our cloud-native architecture is designed to scale from small practices to large health systems. We support multi-location deployments, unlimited users on Enterprise plans, and can handle millions of patient records with consistent performance.",
  },
  {
    question: "What about data migration from our current system?",
    answer:
      "We provide comprehensive data migration services as part of our implementation process. Our team works with you to map your existing data structure, ensure data integrity during transfer, and minimize downtime during the transition.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, we offer native mobile apps for both iOS and Android, as well as responsive web applications. Healthcare providers and patients can access the platform from any device with full functionality and offline capabilities.",
  },
  {
    question: "How do you handle data backup and disaster recovery?",
    answer:
      "We maintain automated daily backups with point-in-time recovery capabilities. Our disaster recovery plan includes geographically distributed data centers, 99.9% uptime SLA, and rapid failover procedures to ensure continuous service availability.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`bg-white/[0.03] rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-purple-500/30 shadow-lg shadow-purple-500/5"
          : "border-white/[0.06] hover:border-white/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-200"
      >
        <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? "text-purple-400" : "text-gray-500"
            }`}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block"
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Got Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Find answers to common questions about our platform, implementation,
            and support.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-5">Still have questions?</p>
          <a
            href="/contact"
            className="group relative inline-flex px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 overflow-hidden"
          >
            <span className="relative z-10">Contact Our Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
