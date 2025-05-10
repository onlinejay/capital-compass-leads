
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { CreditCard, Clock, CheckCircle, Wallet, Shield, ArrowUpRight, Headphones, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Reveal animation for hero elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      setTimeout(() => {
        element.classList.add('active');
      }, 100);
    });
  }, []);

  const handleApplyNowClick = () => {
    // Scroll to the form section
    const formSection = document.querySelector('#quick-capital-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewLoanOptionsClick = () => {
    // Scroll to the loan programs section
    const loanProgramsSection = document.querySelector('#programs');
    if (loanProgramsSection) {
      loanProgramsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-white overflow-hidden">
      {/* Enhanced Background Elements - Lightened backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-blue-100/20"></div>
        </div>
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-blue-50/50 filter blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-blue-100/20 filter blur-3xl"></div>
        
        {/* Added decorative elements with lighter backgrounds */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-100/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-blue-50/50 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left column */}
          <div className="md:col-span-5 reveal">
            <div className="inline-flex items-center gap-2 bg-blue-50/70 px-4 py-1.5 rounded-full text-sm font-bold mb-6 text-blue-700 shadow-sm hover:shadow-blue-100/30 transition-all duration-300 border border-blue-100/50">
              <Wallet className="w-4 h-4 text-blue-600" />
              <span>Fast Capital for Real Estate Investors</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900 font-heading">
              Fast, <span className="fintech-gradient-text bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Flexible Funding</span> for Your Next Investment Property
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
              Start the process to smarter funding with Blue Mint Financial.
            </p>
            
            {/* Updated feature cards - 2x2 grid on mobile, consistent sizing */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Fast Decisions</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Flexible Terms</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Headphones className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Dedicated Support</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Smarter Financing</span>
              </div>
            </div>
            
            <div className={`mt-6 flex ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Button 
                className="bg-blue-600 hover:bg-blue-600/90 text-white font-semibold rounded-xl px-5 py-5 md:px-6 md:py-6 shadow-md hover:shadow-lg transition-all"
                size={isMobile ? "default" : "lg"}
                onClick={handleViewLoanOptionsClick}
              >
                View Funding Options
                <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right column - Enhanced CTA */}
          <div className="md:col-span-7 reveal delay-200 flex justify-center mt-8 md:mt-0 relative">
            {/* Attention-grabbing pulse animation around the form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-blue-400/30 to-blue-300/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
            
            {/* Enlarged, more prominent form container */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-blue-200 relative transform hover:scale-[1.01] transition-all duration-300 z-20 max-w-xl w-full">
              {/* Enhanced visual highlight for the form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-blue-100/40 to-blue-200/30 rounded-3xl blur-md -z-10"></div>
              
              {/* Priority label with animated attention-grabber */}
              <div className="absolute -top-4 left-6 right-6 bg-blue-600 px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg flex items-center justify-center">
                <span className="animate-pulse mr-2">●</span>
                <span>PRIORITY FUNDING REQUEST</span>
                <span className="animate-pulse ml-2">●</span>
              </div>
              
              <div className="mb-8 mt-4 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-heading">Quick Capital Request</h2>
                <div className="bg-blue-600 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Enhanced form description */}
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-6">
                <p className="text-gray-800 font-semibold">Get pre-approved today in as little as 1 hour</p>
                <p className="text-sm text-gray-600">No impact to credit score • Competitive rates • Fast closing</p>
              </div>
              
              {/* Form with enhanced styling */}
              <div className="transform hover:scale-[1.02] transition-all duration-300"> 
                <LeadCaptureForm variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
