import React from "react";

export function CTASection() {
  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-card backdrop-blur-xl p-12 rounded-3xl border border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Scale Your Healthcare Platform?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading healthcare organizations who trust our technology to
              power their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple to-blue text-primary rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple/25">
                Request Enterprise Demo
              </button>
              <button className="px-8 py-4 bg-muted/10 text-foreground rounded-xl font-medium hover:scale-105 transition-all duration-200 border border-border">
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
