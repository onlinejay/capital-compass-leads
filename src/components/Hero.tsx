
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

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
    <section className="relative min-h-[calc(100vh-0px)] flex items-center bg-navy-800 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80)'}}
      >
        <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 text-white reveal">
            <div className="inline-block bg-gold-500/20 text-gold-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Trusted Financial Partner
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Secure Funding for Your <span className="text-gold-400">Real Estate</span> Investments
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Private capital solutions tailored for investors, with efficient approvals and structured financing for fix-and-flip, new construction, and rental properties.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center reveal delay-100">
                <span className="text-3xl font-bold text-gold-400 mr-2">24hr</span>
                <span className="text-sm">Pre-Approval <br/>Process</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center reveal delay-200">
                <span className="text-3xl font-bold text-gold-400 mr-2">7-14</span>
                <span className="text-sm">Days to<br/>Closing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center reveal delay-300">
                <span className="text-3xl font-bold text-gold-400 mr-2">90%</span>
                <span className="text-sm">ARV <br/>Financing</span>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-navy-900/60 backdrop-blur-md p-6 rounded-lg border border-gold-500/30 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Funding Request</h2>
                <div className="bg-gold-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
              <p className="text-white/80 mb-6">Complete this form for pre-approval within 24 hours</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
