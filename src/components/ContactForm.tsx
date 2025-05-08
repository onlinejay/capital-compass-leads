
import React, { useEffect } from 'react';
import MultiStepSurveyForm from './MultiStepSurveyForm';
import { CreditCard, FileCheck } from 'lucide-react';

const ContactForm = () => {
  useEffect(() => {
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
    <section id="contact" className="py-20 bg-secondary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto reveal-on-scroll reveal">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <CreditCard className="w-4 h-4" />
              <span className="font-medium text-sm">Secure Application</span>
              <FileCheck className="w-4 h-4" />
            </div>
            <MultiStepSurveyForm />
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              <span>Bank-level encryption and security</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
