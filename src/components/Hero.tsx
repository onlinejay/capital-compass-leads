
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { CreditCard, Clock, BarChart3, CheckCircle, Wallet, Shield, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

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
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-white overflow-hidden">
      {/* Fintech Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-navy-400/5"></div>
        </div>
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-secondary/80 filter blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-accent/50 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left column */}
          <div className="md:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1 rounded-full text-sm font-bold mb-6 text-primary">
              <Wallet className="w-4 h-4" />
              <span>Fast Capital for Real Estate Investors</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 font-heading">
              Instant <span className="fintech-gradient-text">Financing</span> for Your Next Investment Property
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Access fast, reliable funding while traditional banks are still processing paperwork. Close on properties quickly and grow your real estate portfolio with our tech-enabled lending platform.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="data-card px-4 py-3 reveal delay-100">
                <span className="data-label">Decision Time</span>
                <div className="flex items-end gap-1">
                  <span className="data-value text-primary">24hr</span>
                </div>
              </div>
              <div className="data-card px-4 py-3 reveal delay-200">
                <span className="data-label">LTV Available</span>
                <div className="flex items-end gap-1">
                  <span className="data-value text-primary">90%</span>
                </div>
              </div>
              <div className="data-card px-4 py-3 reveal delay-300">
                <span className="data-label">Fast Closing</span>
                <div className="flex items-end gap-1">
                  <span className="data-value text-primary">7-Day</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="font-medium">Same-Day Approval</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CreditCard className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="font-medium">Flexible Terms</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BarChart3 className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                <span className="font-medium">Competitive Rates</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 py-6"
                size="lg"
              >
                Get Pre-Approved Now
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-full px-6"
                size="lg"
              >
                View Loan Options
              </Button>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 reveal delay-200">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-3 left-6 bg-accent px-4 py-1 rounded-full text-xs font-medium text-primary">
                Apply in 2 minutes
              </div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 font-heading">Quick Capital Request</h2>
                <div className="bg-primary p-1.5 rounded-full">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-6">Get approved today, funded tomorrow</p>
              <LeadCaptureForm variant="secondary" />
            </div>
            
            <div className="mt-4 p-3 bg-secondary/50 rounded-lg flex items-center justify-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Trusted by over 10,000+ real estate investors</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
