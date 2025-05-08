
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
      <Hero />
      <div id="quick-capital-form" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/15 via-blue-100 to-primary/20">
        {/* Enhanced dramatic background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 z-0"></div>
        <div className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full bg-primary/20 filter blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[800px] h-[800px] rounded-full bg-blue-400/20 filter blur-3xl z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary/80 to-blue-500/80 z-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full backdrop-blur-sm z-0 animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full backdrop-blur-sm z-0 animate-pulse-glow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-8 py-3 rounded-full text-base font-bold mb-8 text-primary shadow-lg animate-pulse">
              <span className="animate-pulse text-lg">🔥 Act Fast - Limited Time Financing</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gray-800 font-heading drop-shadow-md">
              Fast <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Financing</span> For Your Real Estate Goals
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          
          {/* Highlighted box with glow effect */}
          <div className="relative w-full max-w-6xl mx-auto mb-8">
            {/* Animated glow border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-md opacity-75 animate-pulse-glow"></div>
            
            <div className="relative w-full scale-105 reveal-on-scroll transform hover:scale-[1.02] transition-transform duration-500 z-10">
              <QuickCapitalRequestForm />
            </div>
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 reveal-on-scroll">
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-700">24-Hour Approval</span>
            </div>
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-700">Competitive Rates</span>
            </div>
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-700">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
      <LoanPrograms />
      <WhyChooseUs />
      <CustomApplicationProcess />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
