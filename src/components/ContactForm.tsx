
import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

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
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-heading">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of investment specialists is ready to help you secure the funding you need.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto text-lg"
              size="lg"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 h-auto text-lg"
              size="lg"
              onClick={() => window.location.href = 'tel:+18005551234'}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
