
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { Building, Key, Wallet, ChartBarIcon } from 'lucide-react';

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
              Real Estate Investment Capital
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Fast <span className="text-gradient">Funding</span> for Property Investors
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl font-medium">
              Access the capital you need for fix-and-flips, rentals, and development projects with our streamlined lending solutions designed for real estate investors.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-100 shadow-lg">
                <span className="text-3xl font-bold text-gradient mr-2">24hr</span>
                <span className="text-sm text-white font-bold">Loan<br/>Approvals</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-200 shadow-lg">
                <span className="text-3xl font-bold text-gradient mr-2">90%</span>
                <span className="text-sm text-white font-bold">LTV<br/>Financing</span>
              </div>
              <div className="glass-card p-3 rounded-lg flex items-center reveal delay-300 shadow-lg">
                <span className="text-3xl font-bold text-gradient mr-2">100%</span>
                <span className="text-sm text-white font-bold">Rehab<br/>Costs</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center text-white">
                <Key className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">Quick Closings</span>
              </div>
              <div className="flex items-center text-white">
                <Building className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">All Property Types</span>
              </div>
              <div className="flex items-center text-white">
                <Wallet className="w-5 h-5 text-gold-400 mr-2" />
                <span className="font-medium">Flexible Terms</span>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-navy-800/95 border border-white/20 p-6 rounded-2xl shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Get Funded</h2>
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
              <p className="text-white font-medium mb-6">Complete this form for fast pre-approval</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
