
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Sparkles, Star } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

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

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full mx-auto border border-primary/20 backdrop-blur-sm transition-all hover:shadow-2xl hover:border-primary/30">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-3">
        <Sparkles className="text-primary h-8 w-8" />
        <span>Quick Capital Request</span>
        <Sparkles className="text-primary h-8 w-8" />
      </h3>
      
      <div className="mb-10">
        <div className="flex justify-between text-base mb-2">
          <span className="font-medium text-primary">
            {currentStep === 'loanType' ? 'Loan Type' : 
             currentStep === 'projectDetails' ? 'Project Details' : 'Contact Information'}
          </span>
          <span className="text-gray-500 font-semibold">Step {currentStep === 'loanType' ? '1' : currentStep === 'projectDetails' ? '2' : '3'} of 3</span>
        </div>
        <Progress value={getProgressValue()} className="h-3 bg-gray-100" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {currentStep === 'loanType' && (
          <div className="space-y-8">
            <label className="block text-xl font-medium text-gray-700">
              Select Loan Type
              <span className="ml-1 text-primary">*</span>
            </label>
            <Select 
              value={formData.loanType} 
              onValueChange={handleLoanTypeChange}
            >
              <SelectTrigger className="w-full h-16 text-lg border-2 hover:border-primary focus:border-primary transition-colors">
                <SelectValue placeholder="Choose loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fix-and-flip" className="text-base py-3">Fix and Flip</SelectItem>
                <SelectItem value="new-construction" className="text-base py-3">New Construction</SelectItem>
                <SelectItem value="dscr-rental" className="text-base py-3">DSCR Rental</SelectItem>
                <SelectItem value="rental-portfolio" className="text-base py-3">Rental Portfolio</SelectItem>
                <SelectItem value="commercial-bridge" className="text-base py-3">Commercial Bridge</SelectItem>
                <SelectItem value="multifamily" className="text-base py-3">Multifamily</SelectItem>
                <SelectItem value="land-lot" className="text-base py-3">Land and Lot Loans</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="pt-6">
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold"
              >
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'projectDetails' && (
          <div className="space-y-8">
            <div>
              <label htmlFor="projectAddress" className="block text-xl font-medium text-gray-700">
                Property Address
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="projectAddress"
                name="projectAddress"
                value={formData.projectAddress}
                onChange={handleInputChange}
                placeholder="Enter property address"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="loanAmount" className="block text-xl font-medium text-gray-700">
                Loan Amount
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="e.g. $250,000"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-3 h-14 text-lg border-2"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="flex-1 ml-3 h-14 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold"
              >
                Next <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'contact' && (
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                Full Name
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                Email
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xl font-medium text-gray-700">
                Phone
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-3 h-14 text-lg border-2"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 ml-3 h-14 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold"
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    Submit Request <Star className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
            
            {/* Added security badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-4 mt-2">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>SSL Encrypted & Secure</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuickCapitalRequestForm;
