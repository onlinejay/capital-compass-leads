
import React, { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

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
    <section id="contact" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800 text-center">
            Ready to <span className="text-gold-500">Get Funded?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Fill out the form to start your application process. Our team will contact you within 24 hours to discuss your investment needs.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <LeadCaptureForm variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
