
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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-navy-400/10"></div>
        </div>
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-secondary/80 filter blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-accent/50 filter blur-3xl"></div>
        
        {/* Added decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-secondary/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left column - OPTIMIZED for better balance */}
          <div className="md:col-span-5 reveal">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 text-emerald-800 shadow-sm hover:shadow-emerald-200/30 transition-all duration-300 border border-emerald-400/30">
              <Wallet className="w-4 h-4 text-emerald-700" />
              <span>Fast Capital for Real Estate Investors</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900 font-heading">
              Fast, <span className="fintech-gradient-text">Flexible Funding</span> for Your Next Investment Property
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
              Start the process to smarter funding.
            </p>
            
            {/* Updated feature cards - 2x2 grid on mobile, consistent sizing */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Fast Decisions</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Flexible Terms</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Headphones className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Dedicated Support</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                <span className="font-medium text-sm text-gray-700">Smarter Financing</span>
              </div>
            </div>
            
            <div className={`mt-6 flex ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-5 py-5 md:px-6 md:py-6 shadow-md hover:shadow-lg transition-all"
                size={isMobile ? "default" : "lg"}
                onClick={handleViewLoanOptionsClick}
              >
                View Funding Options
                <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right column - ADJUSTED WIDTH AND ENHANCED */}
          <div className="md:col-span-7 reveal delay-200 flex justify-center mt-8 md:mt-0">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative transform hover:scale-[1.01] transition-all duration-300 z-20 max-w-xl w-full">
              {/* Enhanced halo effect behind the form */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-secondary/20 rounded-3xl blur-xl -z-10 opacity-80"></div>
              
              <div className="absolute -top-3 left-6 bg-accent px-4 py-1 rounded-full text-xs font-medium text-primary shadow-sm">
                <span className="animate-pulse">Priority Application</span>
              </div>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-heading">Quick Capital Request</h2>
                <div className="bg-primary p-1.5 rounded-full">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-6">Get pre-approved today for your next investment</p>
              
              {/* Enhanced form styling with subtle animation */}
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
