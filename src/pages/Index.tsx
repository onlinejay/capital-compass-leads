
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoanPrograms from '@/components/LoanPrograms';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomApplicationProcess from '@/components/CustomApplicationProcess';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import QuickCapitalRequestForm from '@/components/QuickCapitalRequestForm';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: ''
  });

  const loanTypes = [
    { value: "fix-and-flip", label: "Fix and Flip" },
    { value: "new-construction", label: "New Construction" },
    { value: "dscr-rental", label: "DSCR Rental" },
    { value: "rental-portfolio", label: "Rental Portfolio" },
    { value: "commercial-bridge", label: "Commercial Bridge" },
    { value: "multifamily", label: "Multifamily" },
    { value: "land-lot", label: "Land and Lot Loans" },
  ];

  const handleQuickInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuickFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickLoanTypeSelect = (value: string) => {
    setQuickFormData(prev => ({ ...prev, loanType: value }));
    setIsDropdownOpen(false);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!quickFormData.name || !quickFormData.email || !quickFormData.phone || !quickFormData.loanType) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Request Submitted",
      description: "We'll be in touch with you shortly!"
    });
    
    setQuickFormData({
      name: '',
      email: '',
      phone: '',
      loanType: '',
      loanAmount: ''
    });
  };

  // Get the selected loan type label
  const getSelectedLoanTypeLabel = () => {
    const selected = loanTypes.find(type => type.value === quickFormData.loanType);
    return selected ? selected.label : "Loan...";
  };

  useEffect(() => {
    // Scroll animation
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Quick Form */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
                Get approved today, funded tomorrow
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Fast, flexible financing solutions for your real estate projects
              </p>
              
              {/* Quick Hero Form */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      name="name" 
                      value={quickFormData.name}
                      onChange={handleQuickInputChange}
                      placeholder="Full Name" 
                      required 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      type="email" 
                      name="email" 
                      value={quickFormData.email}
                      onChange={handleQuickInputChange}
                      placeholder="Email Address" 
                      required 
                    />
                    <Input 
                      type="tel" 
                      name="phone" 
                      value={quickFormData.phone}
                      onChange={handleQuickInputChange}
                      placeholder="Phone Number" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between text-left font-normal text-gray-500">
                          <div className="flex items-center">
                            <span>{getSelectedLoanTypeLabel()}</span>
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-[200px] bg-white">
                        {loanTypes.map((type) => (
                          <DropdownMenuItem
                            key={type.value}
                            onClick={() => handleQuickLoanTypeSelect(type.value)}
                            className="cursor-pointer"
                          >
                            {type.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <Input 
                      type="text" 
                      name="loanAmount" 
                      value={quickFormData.loanAmount}
                      onChange={handleQuickInputChange}
                      placeholder="Loan Amount" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Pre-Approved
                  </Button>
                </form>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fast Approval</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Flexible Terms</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="/public/lovable-uploads/6988721f-7471-4abb-b387-df632dbce6b8.png" 
                alt="Real Estate Investment" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <LoanPrograms />
      <WhyChooseUs />
      <CustomApplicationProcess />
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">
              Fast Financing For Your Real Estate Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick access to capital for your next real estate investment project with our streamlined application process.
            </p>
          </div>
          <QuickCapitalRequestForm />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
