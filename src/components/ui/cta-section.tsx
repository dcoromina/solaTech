import React from "react";

export function CTASection() {
  return (
    <section className="pb-10 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute inset-0 " />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations who trust our technology to
              power their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25">
                Request Enterprise Demo
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 border border-white/20">
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
