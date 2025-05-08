
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
      <div id="quick-capital-form" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 z-0"></div>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/15 filter blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-400/15 filter blur-3xl z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/60 to-blue-500/60 z-10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full backdrop-blur-sm z-0"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500/5 rounded-full backdrop-blur-sm z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 text-primary shadow-md animate-pulse">
              <span className="animate-pulse">🔥 Act Fast - Limited Time Financing</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 font-heading drop-shadow-sm">
              Fast <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Financing</span> For Your Real Estate Goals
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          
          <div className="w-full max-w-5xl mx-auto reveal-on-scroll transform hover:scale-[1.01] transition-transform duration-300">
            <QuickCapitalRequestForm />
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 reveal-on-scroll">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span className="text-base font-semibold text-gray-700">24-Hour Approval</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span className="text-base font-semibold text-gray-700">Competitive Rates</span>
            </div>
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span className="text-base font-semibold text-gray-700">Expert Support</span>
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
