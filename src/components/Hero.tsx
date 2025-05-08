
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { Rocket, Zap, TrendingUp, Target } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Reveal animation for hero elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      setTimeout(() => {
        element.classList.add('active');
      }, 100);
    });
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-0px)] flex items-center bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
      {/* Real Estate Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gold-500 blur-3xl"></div>
          <div className="absolute top-[50%] left-[80%] w-80 h-80 rounded-full bg-gold-400 blur-3xl"></div>
          <div className="absolute top-[80%] left-[30%] w-72 h-72 rounded-full bg-indigo-500/50 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          {/* Building/Property Pattern */}
          <div className="grid grid-cols-12 w-full h-full overflow-hidden select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span key={j} className="text-white/10" style={{fontSize: '60px', lineHeight: '70px', animationDelay: `${(i + j) * 0.1}s`}}>
                    {Math.random() > 0.7 ? '🏢' : Math.random() > 0.5 ? '🏠' : '🏘️'}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 text-white reveal">
            <div className="inline-block bg-gradient-to-r from-gold-500/20 to-gold-400/20 px-4 py-1 rounded-full text-sm font-bold mb-6 text-gold-400">
              Take Action Today
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gradient">Seize</span> Your Next Real Estate Opportunity
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl font-medium">
              Stop waiting on slow banks. Get the capital you need to move on hot deals now, while other investors are still filling out paperwork.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-100 shadow-lg hover:scale-105 transition-all">
                <span className="text-3xl font-bold text-gradient mr-2">24hr</span>
                <span className="text-sm text-white font-bold">Decision<br/>Speed</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-200 shadow-lg hover:scale-105 transition-all">
                <span className="text-3xl font-bold text-gradient mr-2">90%</span>
                <span className="text-sm text-white font-bold">LTV<br/>Financing</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-300 shadow-lg hover:scale-105 transition-all">
                <span className="text-3xl font-bold text-gradient mr-2">7-Day</span>
                <span className="text-sm text-white font-bold">Fast<br/>Closing</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center text-white">
                <Rocket className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">Close Deals Fast</span>
              </div>
              <div className="flex items-center text-white">
                <Zap className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">Minimal Documentation</span>
              </div>
              <div className="flex items-center text-white">
                <TrendingUp className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">Scale Your Portfolio</span>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-navy-800/95 border border-white/20 p-6 rounded-2xl shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Start Moving Now</h2>
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-2 rounded-full">
                  <Target className="w-5 h-5 text-navy-900" />
                </div>
              </div>
              <p className="text-white font-bold mb-6">Complete this form to secure funding today</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
