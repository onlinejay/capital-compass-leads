
import React, { useEffect } from 'react';
import { FileCheck } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">
            Ready to Explore Financing Options?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our team of investment specialists is ready to help you find the perfect funding solution.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="tel:+18005551234" 
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              Call Now
            </a>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              <span>No obligation consultation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
