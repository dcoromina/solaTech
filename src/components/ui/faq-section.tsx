"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does SolaTech ensure HIPAA compliance?",
    answer: "SolaTech is built with HIPAA compliance at its core. We implement end-to-end encryption, role-based access controls, audit logging, and regular security assessments. Our platform undergoes annual third-party security audits and maintains SOC 2 Type II certification."
  },
  {
    question: "What integrations are available?",
    answer: "We integrate with major EHR systems (Epic, Cerner, Allscripts), wearable devices (Apple Watch, Fitbit, Garmin), lab systems (LabCorp, Quest), and imaging systems (DICOM, PACS). Our RESTful APIs also allow custom integrations with your existing systems."
  },
  {
    question: "How quickly can we implement SolaTech?",
    answer: "Implementation timelines vary based on your organization's size and requirements. Typical deployments range from 2-8 weeks for standard implementations, while enterprise customizations may take 3-6 months. We provide dedicated implementation support throughout the process."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer tiered support based on your plan: email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise clients. All plans include comprehensive documentation, training materials, and onboarding assistance."
  },
  {
    question: "Can SolaTech scale with our organization?",
    answer: "Absolutely. Our cloud-native architecture is designed to scale from small practices to large health systems. We support multi-location deployments, unlimited users on Enterprise plans, and can handle millions of patient records with consistent performance."
  },
  {
    question: "What about data migration from our current system?",
    answer: "We provide comprehensive data migration services as part of our implementation process. Our team works with you to map your existing data structure, ensure data integrity during transfer, and minimize downtime during the transition."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we offer native mobile apps for both iOS and Android, as well as responsive web applications. Healthcare providers and patients can access the platform from any device with full functionality and offline capabilities."
  },
  {
    question: "How do you handle data backup and disaster recovery?",
    answer: "We maintain automated daily backups with point-in-time recovery capabilities. Our disaster recovery plan includes geographically distributed data centers, 99.9% uptime SLA, and rapid failover procedures to ensure continuous service availability."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our platform, implementation, and support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}