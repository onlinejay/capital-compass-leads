
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoanPrograms from '@/components/LoanPrograms';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomApplicationProcess from '@/components/CustomApplicationProcess';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import QuickCapitalRequestForm from '@/components/QuickCapitalRequestForm';

const Index = () => {
  useEffect(() => {
    // Enhanced scroll animation with timing
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a slight delay for each element based on its position
          setTimeout(() => {
            entry.target.classList.add('active');
          }, index * 100);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* New prominent Quick Capital Request section above the fold */}
      <div id="quick-capital-form" className="pt-24 md:pt-28 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 z-0"></div>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 filter blur-3xl animate-pulse-glow z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-400/10 filter blur-3xl animate-pulse-glow z-0" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-blue-500/40 z-0"></div>
        <div className="absolute top-20 left-1/4 w-8 h-8 rounded-full bg-blue-200/30 backdrop-blur-sm z-0"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-14 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-primary shadow-sm">
              <span className="animate-pulse">Act Fast - Limited Time Financing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-5 text-gray-800 font-heading">
              Fast <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Financing</span> For Your Real Estate Goals
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto reveal-on-scroll">
            <div className="relative">
              {/* Highlight glow behind the form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-lg z-0"></div>
              <div className="relative z-10">
                <QuickCapitalRequestForm />
              </div>
              
              {/* Security badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-gray-100">
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium whitespace-nowrap">Secure Application - 256-bit encryption</span>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 reveal-on-scroll">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-gray-700">24-Hour Approval</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-gray-700">Competitive Rates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-gray-700">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <Hero />
      <LoanPrograms />
      <WhyChooseUs />
      <CustomApplicationProcess />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
