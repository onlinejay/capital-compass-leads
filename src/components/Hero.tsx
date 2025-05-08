
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
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80)'}}
      >
        <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 text-white reveal">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Fast Funding for Your <span className="text-gold-400">Real Estate</span> Investments
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Hard money loans tailored for investors, with quick approvals and competitive rates for fix-and-flip, new construction, and rental properties.
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
            
            <div className="hidden md:block">
              <p className="font-semibold mb-2">Trusted by investors nationwide:</p>
              <div className="flex gap-6 opacity-60">
                <div className="text-sm">
                  ★★★★★<br/>
                  <span className="text-xs">250+ Reviews</span>
                </div>
                <div className="h-8 border-l border-white/30"></div>
                <div>500+ Properties Funded</div>
                <div className="h-8 border-l border-white/30"></div>
                <div>$100M+ Loan Volume</div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-navy-900/60 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Get Funded Fast</h2>
              <p className="text-white/80 mb-6">Fill out this form to get pre-approved in 24 hours</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
