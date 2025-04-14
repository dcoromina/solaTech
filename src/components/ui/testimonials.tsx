import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export function TestimonialsSection({
  className,
  testimonials,
}: {
  className?: string;
  testimonials: TestimonialProps[];
}) {
  return (
    <section className={cn("py-16 bg-gray-50 dark:bg-gray-900", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've helped thousands of healthcare providers and patients improve
            health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                    <span className="text-primary-700 dark:text-primary-300 font-medium text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ", "}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
