
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="reveal-on-scroll reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
              Ready to <span className="text-gold-500">Get Funded?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form to start your application process. Our team will contact you within 24 hours to discuss your investment needs.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <LeadCaptureForm variant="secondary" />
            </div>
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <div className="bg-navy-800 text-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-2 mr-4">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Office</h4>
                    <p className="text-white/80">
                      123 Finance Street<br />
                      Suite 400<br />
                      Los Angeles, CA 90017
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-2 mr-4">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-white/80">
                      (800) 555-9000<br />
                      Monday-Friday: 8am-6pm PT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-2 mr-4">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-white/80">
                      loans@capitalcompass.com<br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Areas We Serve</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-white/80">• California</p>
                    <p className="text-white/80">• Arizona</p>
                    <p className="text-white/80">• Nevada</p>
                    <p className="text-white/80">• Oregon</p>
                  </div>
                  <div>
                    <p className="text-white/80">• Texas</p>
                    <p className="text-white/80">• Florida</p>
                    <p className="text-white/80">• New York</p>
                    <p className="text-white/80">• Colorado</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  Contact us to inquire about other states not listed.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
