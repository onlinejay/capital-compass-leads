
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
      <LoanPrograms />
      <WhyChooseUs />
      <CustomApplicationProcess />
      <div id="quick-capital-form" className="py-28 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 z-0"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 filter blur-3xl z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 filter blur-3xl z-0"></div>
        
        {/* Diagonal decorative line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-blue-500/40 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-emerald-800 shadow-sm">
              <span>Fast Capital for Real Estate Investors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800 font-heading">
              Fast <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Financing</span> For Your Real Estate Goals
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          
          <div className="w-full mx-auto reveal-on-scroll">
            <QuickCapitalRequestForm />
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 reveal-on-scroll">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-gray-700">Fast Decisions</span>
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
