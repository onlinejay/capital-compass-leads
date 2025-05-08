
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
    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
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
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">
              Fast Financing For Your Real Estate Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          <QuickCapitalRequestForm />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
