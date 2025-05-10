
import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-800 to-navy-900 text-white">
      {/* Wave separator */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto -mb-1">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,53.3C960,43,1056,53,1152,64C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pb-12 pt-12">
        {/* Top section with CTA - Enhanced styling */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600/30 to-teal-500/30 rounded-2xl p-8 border border-white/20 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-md">
                  <span className="text-gradient-primary bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                    Ready to fund your next property?
                  </span>
                </h3>
                <p className="text-blue-200 text-lg font-medium">Get pre-approved in minutes and close within days.</p>
              </div>
              <Button 
                onClick={() => handleSmoothScroll('quick-capital-form')}
                className="bg-white hover:bg-white/90 text-blue-600 rounded-full px-8 py-6 group shadow-md transform hover:scale-105 transition-all duration-300"
              >
                Apply Now 
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main footer content - Now with logo in first column */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo and description - First column */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1E88E5" />
                    <path d="M2 17L12 22L22 17" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  <span className="text-blue-400">Blue</span>
                  <span className="text-teal-400">Mint</span>
                  <span className="text-white"> Financial</span>
                </span>
              </div>
              <p className="text-white/70 mb-6">
                Providing innovative financial solutions for real estate investors with speed, transparency, and expertise since 2010.
              </p>
            </div>
          </div>
          
          {/* Menu - Second column (swapped with Loan Programs) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Loan Programs
                </a>
              </li>
              <li>
                <a 
                  href="#why-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('why-us');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('process');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Application Process
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('contact');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#quick-capital-form" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('quick-capital-form');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Get Pre-Approved
                </a>
              </li>
            </ul>
          </div>
          
          {/* Loan Programs - Third column (swapped with Menu) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Loan Programs</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Fix-and-Flip
                </a>
              </li>
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  New Construction
                </a>
              </li>
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  DSCR Rental
                </a>
              </li>
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Commercial Bridge
                </a>
              </li>
              <li>
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('programs');
                  }} 
                  className="inline-block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  Multifamily
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact - Fourth column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Finance Street<br />
                  Investment City, IC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-300 shrink-0" />
                <a href="tel:+18885551234" className="text-white/80 hover:text-white transition-colors">
                  (888) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300 shrink-0" />
                <a href="mailto:info@capitalcompass.com" className="text-white/80 hover:text-white transition-colors">
                  info@capitalcompass.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar - Reduced height */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm text-white/60">
              &copy; {currentYear} Blue Mint Financial. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
