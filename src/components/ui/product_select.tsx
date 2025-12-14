import React, { useState } from 'react';
import { Droplets, Flame, Snowflake, Cloud, Check, ArrowRight, Download } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

interface Product {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  image: string;
  features: string[];
  links?: { label: string; icon: string; subLabel: string }[];
  actions?: { label: string; href: string; primary: boolean }[];
}

const products: Record<string, Product> = {
  'SolaApp': {
    icon: Droplets,
    title: 'SolaApp',
    subtitle: 'Your Complete Health & Fitness Companion',
    description: 'The ultimate app for users who want to take control of their health and fitness journey. Get personalized workout plans, nutrition guidance, and direct access to certified professionals.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    image: '/FoodApp.jpg',
    features: [
      'Personalized workout and nutrition plans',
      'Direct access to certified professionals',
      'Progress tracking and health monitoring',
      'Community support and motivation'
    ],
    links: [
      { label: 'App Store', icon: '/icons/apple.svg', subLabel: 'Download on the' },
      { label: 'Google Play', icon: '/icons/google-play.svg', subLabel: 'Get it on' }
    ]
  },
  'SolaClub': {
    icon: Flame,
    title: 'SolaClub',
    subtitle: 'Personal Trainer Dashboard',
    description: 'Streamline your personal training business with our comprehensive dashboard. Manage clients, track progress, schedule sessions, and grow your business.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    image: '/teams_dashboard.png',
    features: [
      'Client management and progress tracking',
      'Session scheduling and payments',
      'Business analytics and insights',
      'Automated workout plan creation'
    ],
    actions: [
      { label: 'Explore Dashboard', href: '/soladash', primary: true },
      { label: 'Start Free Trial', href: '/solaclub', primary: false }
    ]
  },
  'SolaPro': {
    icon: Snowflake,
    title: 'SolaPro',
    subtitle: 'Health Professional Platform',
    description: 'Specialized platform for physiotherapists, chiropractors, and other health professionals. Manage patient care, treatment plans, and practice operations.',
    gradient: 'from-blue-400/20 to-cyan-300/20',
    image: '/dashboard.png',
    features: [
      'Patient records and treatment history',
      'Appointment scheduling and reminders',
      'Treatment plan management',
      'Insurance and billing integration'
    ],
    actions: [
      { label: 'Discover Platform', href: '/solapro', primary: true },
      { label: 'Schedule Demo', href: '/contact', primary: false }
    ]
  },
  'Coming Soon': {
    icon: Cloud,
    title: 'Coming Soon',
    subtitle: 'Future Innovations',
    description: 'Our latest product that will be released soon. Stay tuned for revolutionary features that will transform your experience.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    features: [
      'Advanced AI integration',
      'Next-gen biometrics',
      'Virtual reality workouts',
      'Global challenges'
    ],
    actions: [
      { label: 'Notify Me', href: '#', primary: true }
    ]
  }
};

export default function ProductSelect() {
  const [selected, setSelected] = useState('SolaApp');

  const currentProduct = products[selected as keyof typeof products];
  const SelectedIcon = currentProduct.icon;

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Controls */}
        <div className="space-y-6">

          {/* Products Grid */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              Our Products
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(products).map(([name, product]) => {
                const Icon = product.icon;
                return (
                  <button
                    key={name}
                    onClick={() => setSelected(name)}
                    className={`aspect-square rounded-xl transition-all duration-300 ${selected === name
                      ? 'bg-gradient-to-br ' + product.gradient + ' border-2 border-purple-500 shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                  >
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <Icon className={`w-8 h-8 ${selected === name ? 'text-white' : 'text-gray-400'}`} />
                      <span className={`text-xs ${selected === name ? 'text-white font-medium' : 'text-gray-400'}`}>
                        {name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Details Control Panel */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex-grow flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Product Details
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentProduct.title}</h3>
                <p className="text-purple-300 font-medium mb-3">{currentProduct.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Key Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className={`mt-1 p-1 rounded-full bg-gradient-to-br ${currentProduct.gradient}`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-3">
                  {/* Render App Store / Google Play buttons if they exist */}
                  {currentProduct.links && currentProduct.links.map((link, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white hover:bg-white/10 transition-colors shadow-sm flex-1 min-w-[140px]"
                    >
                      {link.icon && (
                        <div className="relative w-6 h-6">
                          {/* Using simple div placeholder if image not found, or standard img tag if path is valid. 
                               Assuming public/icons exist as per previous file content */}
                          <img src={link.icon} alt={link.label} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div className="flex flex-col leading-tight text-left">
                        <span className="text-[10px] uppercase tracking-wide text-gray-400">{link.subLabel}</span>
                        <span className="text-sm font-semibold">{link.label}</span>
                      </div>
                    </button>
                  ))}

                  {/* Render Action buttons if they exist */}
                  {currentProduct.actions && currentProduct.actions.map((action, index) => (
                    <Link
                      key={index}
                      href={action.href}
                      className={`flex-1 min-w-[140px] px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${action.primary
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02]'
                        : 'border border-white/20 text-white hover:bg-white/10'
                        }`}
                    >
                      {action.label}
                      {action.primary && <ArrowRight className="w-4 h-4" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Preview
              </h2>
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
                  <button className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Display */}
            <div className="relative w-full rounded-2xl overflow-hidden group flex-1 min-h-0">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
              </div>

              {/* Product Content */}
              <div className="relative p-8 flex items-center justify-center h-full">
                {currentProduct.title === 'Coming Soon' ? (
                  /* Glassmorphism Card for Coming Soon */
                  <div className={`bg-gradient-to-br ${currentProduct.gradient} backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full transform transition-all duration-500`}>
                    {/* User Badge */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full bg-purple-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <span className="text-white font-semibold">JD</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Jane Doe</p>
                        <p className="text-white/60 text-sm">@janedoe</p>
                      </div>
                      <button className="ml-auto text-white/60 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>

                    {/* Product Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <SelectedIcon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {currentProduct.title}
                      </h3>
                      <p className="text-white/80">
                        {currentProduct.subtitle}
                      </p>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]">
                      Notify Me
                    </button>
                  </div>
                ) : (
                  /* Product Image for others */
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 transform hover:scale-[1.02]">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.title}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}