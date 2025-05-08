
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyNowClick = () => {
    // Scroll to the form section
    const formSection = document.querySelector('#quick-capital-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold font-heading">
              <span className="text-gray-900">Funding</span>
              <span className="text-primary">Connect</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#programs" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Loan Programs
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Why Choose Us
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Process
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white ml-4"
              onClick={handleApplyNowClick}
            >
              Get Pre-Approved
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-3 bg-white">
            <a 
              href="#programs" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Loan Programs
            </a>
            <a 
              href="#why-us" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#process" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const formSection = document.querySelector('#quick-capital-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Pre-Approved
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
