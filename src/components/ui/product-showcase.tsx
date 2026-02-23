import React from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    number: "70K+",
    label: "Active Members",
  },
  {
    number: "20K+",
    label: "Workouts & Diets",
  },
  {
    number: "500+",
    label: "Events",
  },
  {
    number: "1K+",
    label: "Partner Clubs",
  },
];

function ProductShowcaseInner() {
  return (
    <>
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="px-6 py-3 bg-gradient-to-r from-teal/20 to-blue/20 rounded-full text-teal font-semibold tracking-wide text-sm uppercase border border-teal/30 inline-block backdrop-blur-sm">
                  All-in-One Solution
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Complete Health &{" "}
                  <span className="bg-gradient-to-r from-teal to-blue bg-clip-text text-transparent">
                    Fitness Companion
                  </span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The ultimate app for users who want to take control of their
                health and fitness journey. Get personalized workout plans,
                nutrition guidance, and direct access to certified professionals
                for expert advice and support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal to-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Personalized workout and nutrition plans
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal to-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Direct access to certified professionals
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal to-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Progress tracking and health monitoring
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal to-blue rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Community support and motivation
                  </span>
                </div>
              </div>

              {/* Store download buttons (no links yet) */}
              <div className="flex sm:items-center justify-center md:justify-start flex-row flex-wrap gap-3">
                <button
                  aria-label="Download on the App Store"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:bg-muted/10 transition-colors shadow-sm"
                >
                  {/* Apple icon from public/icons/apple.svg */}
                  <Image src="/icons/apple.svg" alt="Apple" width={24} height={24} className="w-6 h-6" />
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </button>
                <button
                  aria-label="Get it on Google Play"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:bg-muted/10 transition-colors shadow-sm"
                >
                  {/* Google Play icon from public/icons/google-play.svg */}
                  <Image src="/icons/google-play.svg" alt="Google Play" width={24} height={24} className="w-6 h-6" />
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Get it on</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal/20 to-blue/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card rounded-3xl p-8 backdrop-blur-sm border border-border heroMedia">
                <Image
                  src="/FoodApp.jpg"
                  alt="All-in-One Health & Fitness App"
                  width={600}
                  height={400}
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Trainer Dashboard */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple/20 to-pink/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card rounded-3xl p-8 backdrop-blur-sm border border-border">
                <Image
                  src="/teams_dashboard.png"
                  alt="Personal Trainer Dashboard"
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="px-6 py-3 bg-gradient-to-r from-purple/20 to-pink/20 rounded-full text-purple font-semibold tracking-wide text-sm uppercase border border-purple/30 inline-block backdrop-blur-sm">
                  Business Management
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Personal Trainer{" "}
                  <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Streamline your personal training business with our
                comprehensive dashboard. Manage clients, track progress,
                schedule sessions, and grow your business with powerful
                analytics and client management tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple to-pink rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Client management and progress tracking
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple to-pink rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Session scheduling and payments
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple to-pink rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Business analytics and insights
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple to-pink rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Automated workout plan creation
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/soladash" prefetch className="px-8 py-4 bg-gradient-to-r from-purple to-pink text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" role="button">
                  Explore Dashboard
                </Link>
                <Link href="/solaclub" prefetch className="px-8 py-4 border-2 border-purple/30 text-purple font-semibold rounded-xl hover:bg-purple/10 transition-all duration-300" role="button">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Professional Platform */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="px-6 py-3 bg-gradient-to-r from-blue/20 to-cyan/20 rounded-full text-blue font-semibold tracking-wide text-sm uppercase border border-blue/30 inline-block backdrop-blur-sm">
                  Healthcare Solutions
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Health Professional{" "}
                  <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">
                    Platform
                  </span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Specialized platform for physiotherapists, chiropractors, and
                other health professionals. Manage patient care, treatment
                plans, and practice operations with our comprehensive healthcare
                management system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue to-cyan rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Patient records and treatment history
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue to-cyan rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Appointment scheduling and reminders
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue to-cyan rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Treatment plan management
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue to-cyan rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">
                    Insurance and billing integration
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solapro" prefetch className="px-8 py-4 bg-gradient-to-r from-blue to-cyan text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" role="button">
                  Discover Platform
                </Link>
                <Link href="/contact" prefetch className="px-8 py-4 border-2 border-blue/30 text-blue font-semibold rounded-xl hover:bg-blue/10 transition-all duration-300" role="button">
                  Schedule Demo
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue/20 to-cyan/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card rounded-3xl p-8 backdrop-blur-sm border border-border">
                <Image
                  src="/dashboard.png"
                  alt="Health Professional Platform"
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Trainer Dashboard */}


      <style jsx>{`
        .heroMedia { min-height: 500px; }
      `}</style>
    </>
  );
}

export const ProductShowcase = React.memo(ProductShowcaseInner);

export default ProductShowcase;