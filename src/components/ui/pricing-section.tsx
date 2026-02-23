"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 100 patient records",
      "Basic health tracking",
      "Mobile app access",
      "Email support",
      "Basic analytics",
    ],
    limitations: [
      "Limited integrations",
      "No custom branding",
      "Standard security",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Advanced features for growing healthcare practices",
    features: [
      "Up to 1,000 patient records",
      "Advanced health analytics",
      "API integrations",
      "Priority support",
      "Custom dashboards",
      "HIPAA compliance tools",
      "Team collaboration",
      "Advanced reporting",
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large healthcare organizations",
    features: [
      "Unlimited patient records",
      "Full API access",
      "Custom integrations",
      "24/7 dedicated support",
      "White-label solutions",
      "Advanced security",
      "Multi-location support",
      "Custom training",
      "SLA guarantees",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple/10 to-blue/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple/20 mb-4 inline-block">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options to fit your healthcare organization&apos;s
            needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span
              className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"
                }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="mx-3 relative inline-flex h-6 w-11 items-center rounded-full bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-foreground transition-transform ${isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
              />
            </button>
            <span
              className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual
              <span className="ml-1 text-teal text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${plan.popular
                ? "bg-gradient-to-b from-purple/10 to-blue/10 border-purple/50 shadow-xl shadow-purple/10"
                : "bg-card border-border hover:border-purple/30"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple to-blue text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">
                      {isAnnual && plan.price !== "Custom"
                        ? "/year"
                        : plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-teal mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <li
                    key={limitationIndex}
                    className="flex items-center text-sm"
                  >
                    <X className="w-4 h-4 text-red mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground/60">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${plan.popular
                  ? "bg-gradient-to-r from-purple to-blue text-primary hover:scale-105 shadow-lg shadow-purple/25"
                  : "bg-muted/10 text-foreground hover:bg-muted/20 border border-border"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
