
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { TrendingUp, Clock, CreditCard, CheckCircle } from 'lucide-react';

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
    <section className="relative min-h-[calc(100vh-0px)] flex items-center bg-white overflow-hidden">
      {/* Real Estate Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-blue-400/5"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 reveal">
            <div className="inline-block bg-secondary px-4 py-1 rounded-full text-sm font-bold mb-6 text-primary">
              Fast Funding for Real Estate Investors
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 font-heading">
              <span className="text-primary">Seize</span> Your Next Real Estate Opportunity
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Stop waiting on slow banks. Get the capital you need to move on hot deals now, while other investors are still filling out paperwork.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="stat-card px-6 py-4 reveal delay-100">
                <span className="text-3xl font-bold text-primary mb-1">24hr</span>
                <span className="text-sm text-gray-600 font-medium">Decision Time</span>
              </div>
              <div className="stat-card px-6 py-4 reveal delay-200">
                <span className="text-3xl font-bold text-primary mb-1">90%</span>
                <span className="text-sm text-gray-600 font-medium">LTV Financing</span>
              </div>
              <div className="stat-card px-6 py-4 reveal delay-300">
                <span className="text-3xl font-bold text-primary mb-1">7-Day</span>
                <span className="text-sm text-gray-600 font-medium">Fast Closing</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Close Deals Fast</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CreditCard className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Minimal Documentation</span>
              </div>
              <div className="flex items-center text-gray-700">
                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Scale Your Portfolio</span>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 font-heading">Start Moving Now</h2>
                <div className="bg-primary p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-6">Complete this form to secure funding today</p>
              <LeadCaptureForm variant="primary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
