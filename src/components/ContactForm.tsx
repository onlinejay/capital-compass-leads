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

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
      </div>
    </section>
  );
};

export default ContactForm;
