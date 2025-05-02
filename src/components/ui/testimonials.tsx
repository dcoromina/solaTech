import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

// Updated testimonials with more health-tech focused content
const testimonialsList: TestimonialProps[] = [
  {
    quote:
      "The AI-powered analytics have revolutionized how we predict and prevent health issues. We've seen a 40% improvement in early intervention success rates.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "HealthFirst Partners",
  },
  {
    quote:
      "This platform has transformed our patient care. The real-time monitoring and predictive analytics have helped us reduce readmission rates by 35%.",
    author: "Dr. James Wilson",
    role: "Director of Digital Health",
    company: "Metro Medical Center",
  },
  {
    quote:
      "As someone managing diabetes, this platform has been life-changing. The personalized insights and real-time monitoring give me confidence in managing my health.",
    author: "Michael Rodriguez",
    role: "Patient",
    company: "Wellness Program Member",
  },
];

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800",
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-80 h-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of healthcare providers and patients who are
            transforming healthcare with our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-purple-500/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.379.132-.79.198-1.213.198-2.210 0-3.901-1.617-3.901-3.9 0-2.249 1.876-4.007 4.134-4.007 1.485 0 2.775.650 3.73 1.806zm9.143 0C24.590 7.773 25.143 9 25.143 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.379.132-.79.198-1.213.198C19.044 12.376 17.353 10.759 17.353 8.476c0-2.249 1.876-4.007 4.134-4.007 1.485 0 2.775.650 3.73 1.806z" />
                </svg>
              </div>
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">
                    {testimonial.author}
                  </h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ", "}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
