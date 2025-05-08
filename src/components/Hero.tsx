
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
    <section className="relative min-h-[calc(100vh-0px)] flex items-center bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
      {/* Fintech Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
          <div className="absolute top-[50%] left-[80%] w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
          <div className="absolute top-[80%] left-[30%] w-72 h-72 rounded-full bg-purple-500 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          {/* Binary/Data Patterns */}
          <div className="grid grid-cols-12 w-full h-full text-[8px] text-white/10 overflow-hidden select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex flex-col">
                {Array.from({ length: 30 }).map((_, j) => (
                  <span key={j} className="animate-pulse" style={{animationDelay: `${(i + j) * 0.1}s`}}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 text-white reveal">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-teal-400 px-4 py-1 rounded-full text-sm font-medium mb-6 text-white">
              Next-Gen Financial Solutions
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Smart <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">Capital</span> for Tomorrow's Investors
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Algorithmic lending precision with human expertise. Access capital for your real estate investments through our AI-enhanced approval system.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center reveal delay-100 shadow-lg">
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent mr-2">24hr</span>
                <span className="text-sm">AI-Powered <br/>Approvals</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center reveal delay-200 shadow-lg">
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent mr-2">7-14</span>
                <span className="text-sm">Days to<br/>Closing</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center reveal delay-300 shadow-lg">
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent mr-2">90%</span>
                <span className="text-sm">ARV <br/>Financing</span>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Apply Now</h2>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
              <p className="text-white/80 mb-6">Complete this form for AI-powered pre-approval</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
