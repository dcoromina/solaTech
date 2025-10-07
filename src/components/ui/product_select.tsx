import React, { useState } from 'react';
import { Droplets, Flame, Snowflake, Cloud, Waves, Sparkles } from 'lucide-react';
import Dashboard from "/public/dashboard.png";
import FoodAppImage from "/public/FoodApp.jpg";
import ReptrackImage from "/public/RepTrack.jpg";

const products = {
  'SolaApp': {
    icon: Droplets,
    title: 'SolaApp',
    description: 'Experience health and fitness in a new way',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  'SolaClub': {
    icon: Flame,
    title: 'SolaClub',
    description: 'Fill your management needs in one place',
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  'SolaPro': {
    icon: Snowflake,
    title: 'SolaPro',
    description: 'Create your health professional clinic in one place',
    gradient: 'from-blue-400/20 to-cyan-300/20'
  },
  'Coming Soon': {
    icon: Cloud,
    title: 'Coming Soon',
    description: 'Our latest product that will be released soon',
    gradient: 'from-purple-500/20 to-pink-500/20'
  }
};

export default function ProductSelect() {
  const [selected, setSelected] = useState('SolaApp');
  const [activeTab, setActiveTab] = useState('Glassmorphism');

  const SelectedIcon = products[selected as keyof typeof products].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Controls */}
        <div className="space-y-6">
         

          {/* Presets Grid */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              Presets
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(products).map(([name, product]) => {
                const Icon = product.icon;
                return (
                  <button
                    key={name}
                    onClick={() => setSelected(name)}
                    className={`aspect-square rounded-xl transition-all duration-300 ${
                      selected === name
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
           {/* Header with tabs */}
           <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Controls
              </h2>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {['Glassmorphism', 'Neumorphism'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeTab === tab
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="ml-auto text-gray-400 hover:text-white">
                Advanced
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
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
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
              </div>

              {/* Glassmorphism Card */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className={`bg-gradient-to-br ${products[selected as keyof typeof products].gradient} backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full transform transition-all duration-500`}>
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
                      {products[selected as keyof typeof products].title}
                    </h3>
                    <p className="text-white/80">
                      {products[selected as keyof typeof products].description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]">
                    Action Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}