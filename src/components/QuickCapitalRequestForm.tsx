
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type FormStep = 'loanType' | 'projectDetails' | 'contact';

const QuickCapitalRequestForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('loanType');
  const [formData, setFormData] = useState({
    loanType: '',
    projectAddress: '',
    loanAmount: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const loanTypes = [
    { value: "fix-and-flip", label: "Fix and Flip" },
    { value: "new-construction", label: "New Construction" },
    { value: "dscr-rental", label: "DSCR Rental" },
    { value: "rental-portfolio", label: "Rental Portfolio" },
    { value: "commercial-bridge", label: "Commercial Bridge" },
    { value: "multifamily", label: "Multifamily" },
    { value: "land-lot", label: "Land and Lot Loans" },
  ];

  const handleLoanTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, loanType: value }));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const moveToNextStep = () => {
    if (currentStep === 'loanType') {
      if (!formData.loanType) {
        toast({
          title: "Please select a loan type",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep('projectDetails');
    } else if (currentStep === 'projectDetails') {
      if (!formData.projectAddress || !formData.loanAmount) {
        toast({
          title: "Please fill all required fields",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep('contact');
    }
  };
  
  const moveToPreviousStep = () => {
    if (currentStep === 'projectDetails') {
      setCurrentStep('loanType');
    } else if (currentStep === 'contact') {
      setCurrentStep('projectDetails');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you shortly!"
      });
      
      // Reset form
      setFormData({
        loanType: '',
        projectAddress: '',
        loanAmount: '',
        name: '',
        email: '',
        phone: ''
      });
      setCurrentStep('loanType');
    }, 1500);
  };
  
  const getProgressValue = () => {
    if (currentStep === 'loanType') return 33;
    if (currentStep === 'projectDetails') return 66;
    return 100;
  };

  // Function to find and return the selected loan type label
  const getSelectedLoanTypeLabel = () => {
    const selected = loanTypes.find(type => type.value === formData.loanType);
    return selected ? selected.label : "Choose loan type";
  };

  // For the inline dropdown used in the hero section
  const handleQuickLoanTypeSelect = (value: string) => {
    setFormData(prev => ({ ...prev, loanType: value }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Quick Capital Request</h3>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">
            {currentStep === 'loanType' ? 'Loan Type' : 
             currentStep === 'projectDetails' ? 'Project Details' : 'Contact Information'}
          </span>
          <span className="text-gray-500">Step {currentStep === 'loanType' ? '1' : currentStep === 'projectDetails' ? '2' : '3'} of 3</span>
        </div>
        <Progress value={getProgressValue()} className="h-2" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {currentStep === 'loanType' && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Loan Type
            </label>
            <Select 
              value={formData.loanType} 
              onValueChange={handleLoanTypeChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose loan type" />
              </SelectTrigger>
              <SelectContent>
                {loanTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="pt-4">
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'projectDetails' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="projectAddress" className="block text-sm font-medium text-gray-700">
                Property Address
              </label>
              <Input
                id="projectAddress"
                name="projectAddress"
                value={formData.projectAddress}
                onChange={handleInputChange}
                placeholder="Enter property address"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <Input
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="e.g. $250,000"
                className="mt-1"
                required
              />
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="flex-1 ml-2 bg-primary hover:bg-primary/90 text-white"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'contact' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-1"
                required
              />
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 ml-2 bg-gradient-to-r from-primary to-navy-600 hover:from-primary/90 hover:to-navy-700 text-white"
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </Button>
            </div>
          </div>
        )}
      </form>

      {/* This export method allows the Hero component to use this dropdown */}
      <div className="hidden">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between text-left font-normal">
              <div className="flex items-center">
                <span>{getSelectedLoanTypeLabel()}</span>
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-full min-w-[200px] bg-white">
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
      </div>
    </div>
  );
};

export default QuickCapitalRequestForm;
