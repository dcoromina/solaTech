import React from "react";
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

export function ProductShowcase() {
  return (
    <>
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-green-300 font-semibold tracking-wide text-sm uppercase border border-green-500/30 inline-block backdrop-blur-sm">
                  All-in-One Solution
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Your Complete Health &{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Fitness Companion
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                The ultimate app for users who want to take control of their
                health and fitness journey. Get personalized workout plans,
                nutrition guidance, and direct access to certified professionals
                for expert advice and support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Personalized workout and nutrition plans
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Direct access to certified professionals
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Progress tracking and health monitoring
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Community support and motivation
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-green-500/30 text-green-300 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              {/* Store download buttons (no links yet) */}
              <div className="flex sm:items-center justify-center md:justify-start flex-row flex-wrap gap-3">
                <button
                  aria-label="Download on the App Store"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors shadow-sm"
                >
                  {/* Apple icon */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M16.365 1.43c0 1.14-.456 2.229-1.196 3.033-.746.81-1.964 1.43-3.108 1.35-.137-1.095.402-2.253 1.12-3.046.73-.805 2.02-1.392 3.184-1.337zM20.69 17.005c-.6 1.38-.88 1.986-1.652 3.208-1.072 1.72-2.582 3.868-4.453 3.877-1.01.01-1.7-.288-2.58-.288-.886 0-1.61.28-2.59.298-1.86.035-3.31-1.86-4.387-3.574-3-4.7-3.32-10.22-1.47-13.102 1.32-2.08 3.41-3.41 5.787-3.445 1.104-.02 2.15.316 2.922.316.77 0 2.033-.39 3.435-.334 1.168.047 4.05.473 5.96 3.22-5.248 2.85-4.41 10.28-.972 12.824z"/>
                  </svg>
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase tracking-wide text-gray-300">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </button>
                <button
                  aria-label="Get it on Google Play"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors shadow-sm"
                >
                  {/* Google Play icon */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <defs>
                      <linearGradient id="gplay-a" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f260" />
                        <stop offset="100%" stopColor="#0575e6" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gplay-a)" d="M2.01 1.8l12.2 10.2-12.2 10.2c-.63-.36-1.01-1.03-1.01-1.77V3.57c0-.74.38-1.41 1.01-1.77zM15.43 12.7l3.03 2.54c.52.44.85 1.08.85 1.75 0 .66-.33 1.3-.85 1.74l-2.02 1.7-5.28-4.41 4.27-3.32zm1.83-1.42l2.02 1.71 3.3-2.76c.26-.22.42-.54.42-.89s-.16-.67-.42-.89l-3.3-2.76-2.02 1.71-4.47 3.7 4.47 3.7z"/>
                  </svg>
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase tracking-wide text-gray-300">Get it on</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <Image
                  src="/FoodApp.jpg"
                  alt="All-in-One Health & Fitness App"
                  width={600}
                  height={400}
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <Image
                  src="/teams_dashboard.png"
                  alt="Personal Trainer Dashboard"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 font-semibold tracking-wide text-sm uppercase border border-purple-500/30 inline-block backdrop-blur-sm">
                  Business Management
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Personal Trainer{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Streamline your personal training business with our
                comprehensive dashboard. Manage clients, track progress,
                schedule sessions, and grow your business with powerful
                analytics and client management tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Client management and progress tracking
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Session scheduling and payments
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Business analytics and insights
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Automated workout plan creation
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Dashboard
                </button>
                <button className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300">
                  Start Free Trial
                </button>
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
                <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-blue-300 font-semibold tracking-wide text-sm uppercase border border-blue-500/30 inline-block backdrop-blur-sm">
                  Healthcare Solutions
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Health Professional{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Platform
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Specialized platform for physiotherapists, chiropractors, and
                other health professionals. Manage patient care, treatment
                plans, and practice operations with our comprehensive healthcare
                management system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Patient records and treatment history
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Appointment scheduling and reminders
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Treatment plan management
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="text-gray-300">
                    Insurance and billing integration
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Discover Platform
                </button>
                <button className="px-8 py-4 border-2 border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <Image
                  src="/dashboard.png"
                  alt="Health Professional Platform"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Trainer Dashboard */}
      
      
    </>
  );
}

export default ProductShowcase;