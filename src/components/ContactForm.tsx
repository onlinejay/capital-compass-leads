
import React, { useEffect } from 'react';
import { FileCheck, Phone, Calendar } from 'lucide-react';
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

  const handleApplyNowClick = () => {
    // Scroll to the form section
    const formSection = document.querySelector('#quick-capital-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-heading">
            Fast Financing For Your Real Estate Goals
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get funding approval in as little as 24 hours. Our experienced team is here to guide you 
            through the process and help you secure the best financing options for your investment properties.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 bg-secondary rounded-xl flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">24hr Decisions</h3>
              <p className="text-gray-600 text-sm">Get approved today, funded tomorrow</p>
            </div>
            
            <div className="p-5 bg-secondary rounded-xl flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">No Obligation</h3>
              <p className="text-gray-600 text-sm">Free consultation with our experts</p>
            </div>
            
            <div className="p-5 bg-secondary rounded-xl flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">Personal advisor throughout process</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto text-lg"
              size="lg"
              onClick={handleApplyNowClick}
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
