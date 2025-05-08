
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Sparkles, Star, Shield, CheckCircle } from 'lucide-react';
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
    <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 w-full mx-auto border-2 border-primary/30 backdrop-blur-sm transition-all hover:shadow-2xl hover:border-primary/40">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
        <Sparkles className="text-primary h-10 w-10 animate-pulse" />
        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Quick Capital Request</span>
        <Sparkles className="text-primary h-10 w-10 animate-pulse" />
      </h3>
      
      <div className="mb-12">
        <div className="flex justify-between text-lg mb-3">
          <span className="font-medium text-primary text-xl">
            {currentStep === 'loanType' ? 'Select Loan Type' : 
             currentStep === 'projectDetails' ? 'Property Details' : 'Your Information'}
          </span>
          <span className="text-gray-500 font-semibold">Step {currentStep === 'loanType' ? '1' : currentStep === 'projectDetails' ? '2' : '3'} of 3</span>
        </div>
        <Progress value={getProgressValue()} className="h-4 bg-gray-100" indicatorClassName="bg-gradient-to-r from-primary to-blue-600" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        {currentStep === 'loanType' && (
          <div className="space-y-10">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label className="block text-2xl font-medium text-gray-700 mb-4">
                Select Loan Type
                <span className="ml-1 text-primary">*</span>
              </label>
              <Select 
                value={formData.loanType} 
                onValueChange={handleLoanTypeChange}
              >
                <SelectTrigger className="w-full h-16 text-lg border-2 hover:border-primary focus:border-primary transition-colors bg-white">
                  <SelectValue placeholder="Choose loan type" />
                </SelectTrigger>
                <SelectContent className="text-lg">
                  <SelectItem value="fix-and-flip" className="text-lg py-3">Fix and Flip</SelectItem>
                  <SelectItem value="new-construction" className="text-lg py-3">New Construction</SelectItem>
                  <SelectItem value="dscr-rental" className="text-lg py-3">DSCR Rental</SelectItem>
                  <SelectItem value="rental-portfolio" className="text-lg py-3">Rental Portfolio</SelectItem>
                  <SelectItem value="commercial-bridge" className="text-lg py-3">Commercial Bridge</SelectItem>
                  <SelectItem value="multifamily" className="text-lg py-3">Multifamily</SelectItem>
                  <SelectItem value="land-lot" className="text-lg py-3">Land and Lot Loans</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-6">
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="w-full h-16 text-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Next Step <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'projectDetails' && (
          <div className="space-y-10">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label htmlFor="projectAddress" className="block text-2xl font-medium text-gray-700 mb-4">
                Property Address
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="projectAddress"
                name="projectAddress"
                value={formData.projectAddress}
                onChange={handleInputChange}
                placeholder="Enter property address"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors bg-white"
                required
              />
            </div>
            
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label htmlFor="loanAmount" className="block text-2xl font-medium text-gray-700 mb-4">
                Loan Amount
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="e.g. $250,000"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors bg-white"
                required
              />
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-4 h-16 text-xl border-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-6 w-6" /> Back
              </Button>
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="flex-1 ml-4 h-16 text-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Next <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'contact' && (
          <div className="space-y-10">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label htmlFor="name" className="block text-2xl font-medium text-gray-700 mb-4">
                Full Name
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors bg-white"
                required
              />
            </div>
            
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label htmlFor="email" className="block text-2xl font-medium text-gray-700 mb-4">
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
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors bg-white"
                required
              />
            </div>
            
            <div className="bg-blue-50/50 p-6 rounded-xl border border-primary/20 shadow-inner">
              <label htmlFor="phone" className="block text-2xl font-medium text-gray-700 mb-4">
                Phone
                <span className="ml-1 text-primary">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-2 h-16 text-lg border-2 focus:border-primary transition-colors bg-white"
                required
              />
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-4 h-16 text-xl border-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-6 w-6" /> Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 ml-4 h-16 text-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    Submit Request <Star className="ml-2 h-6 w-6" />
                  </>
                )}
              </Button>
            </div>
            
            {/* Enhanced security badge with animation */}
            <div className="flex items-center justify-center gap-3 mt-4 p-4 border-t border-gray-100">
              <div className="bg-green-50 text-green-700 px-4 py-3 rounded-full flex items-center gap-2 shadow-sm animate-pulse-glow">
                <Shield className="w-5 h-5" />
                <span className="font-medium">SSL Encrypted & Secure</span>
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuickCapitalRequestForm;
