import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  // Scroll to form function
  const scrollToForm = () => {
    const formSection = document.querySelector('#quick-capital-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Capital Compass</h3>
            <p className="text-white/90 mb-4">
              Private lending solutions for real estate investors. Fast funding for your investment opportunities.
            </p>
            <div className="flex space-x-4">
              {/* Social media links will open in a new tab if they existed */}
              {/* Since we're removing placeholders, we'll keep only one example */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">Loan Programs</a>
              </li>
              <li>
                <a href="#why-us" className="text-white/90 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="text-white/90 hover:text-white transition-colors">Application Process</a>
              </li>
              <li>
                <a 
                  href="#quick-capital-form" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToForm();
                  }}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
          
          {/* Loan Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Loan Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">Fix-and-Flip</a>
              </li>
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">New Construction</a>
              </li>
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">DSCR Rental</a>
              </li>
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">Rental Portfolio</a>
              </li>
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">Commercial Bridge</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-white/60 mr-3 flex-shrink-0" />
                <span className="text-white/90">
                  123 Finance Street, Suite 400<br />
                  Los Angeles, CA 90017
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-white/60 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+18005559000" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  (800) 555-9000
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-white/60 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:loans@capitalcompass.com" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  loans@capitalcompass.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Capital Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
