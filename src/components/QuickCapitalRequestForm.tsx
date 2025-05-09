
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

type FormStep = 'loanAmount' | 'loanType' | 'contactInfo';

const QuickCapitalRequestForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<FormStep>('loanAmount');
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanType: '',
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
    if (currentStep === 'loanAmount') {
      if (!formData.loanAmount) {
        toast({
          title: "Please enter a loan amount",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep('loanType');
    } else if (currentStep === 'loanType') {
      if (!formData.loanType) {
        toast({
          title: "Please select a loan type",
          variant: "destructive"
        });
        return;
      }
      setCurrentStep('contactInfo');
    }
  };
  
  const moveToPreviousStep = () => {
    if (currentStep === 'loanType') {
      setCurrentStep('loanAmount');
    } else if (currentStep === 'contactInfo') {
      setCurrentStep('loanType');
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
      
      // Navigate to the confirmation page with the form data
      navigate('/confirmation', { 
        state: { 
          name: formData.name,
          loanType: formData.loanType,
          loanAmount: formData.loanAmount
        } 
      });
      
      // Reset form
      setFormData({
        loanAmount: '',
        loanType: '',
        name: '',
        email: '',
        phone: ''
      });
      setCurrentStep('loanAmount');
    }, 1500);
  };
  
  const getProgressValue = () => {
    if (currentStep === 'loanAmount') return 33;
    if (currentStep === 'loanType') return 66;
    return 100;
  };

  // Improved step indicator display
  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between mb-1">
        <div className="flex items-center space-x-1.5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            currentStep === 'loanAmount' 
              ? 'bg-primary text-white' 
              : (currentStep === 'loanType' || currentStep === 'contactInfo')
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-200 text-gray-400'
          }`}>
            {currentStep !== 'loanAmount' ? <CheckCircle className="w-3 h-3" /> : <span className="text-xs">1</span>}
          </div>
          <div className={`text-xs font-medium ${
            currentStep === 'loanAmount' 
              ? 'text-primary' 
              : (currentStep === 'loanType' || currentStep === 'contactInfo')
                ? 'text-emerald-500' 
                : 'text-gray-400'
          }`}>
            Amount
          </div>
        </div>
        
        <div className="flex items-center space-x-1.5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${currentStep === 'loanType' ? 'bg-primary text-white' : currentStep === 'contactInfo' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
            {currentStep === 'contactInfo' ? <CheckCircle className="w-3 h-3" /> : <span className="text-xs">2</span>}
          </div>
          <div className={`text-xs font-medium ${currentStep === 'loanType' ? 'text-primary' : currentStep === 'contactInfo' ? 'text-emerald-500' : 'text-gray-400'}`}>
            Type
          </div>
        </div>
        
        <div className="flex items-center space-x-1.5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${currentStep === 'contactInfo' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
            <span className="text-xs">3</span>
          </div>
          <div className={`text-xs font-medium ${currentStep === 'contactInfo' ? 'text-primary' : 'text-gray-400'}`}>
            Contact
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 w-full max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">Quick Capital Request</h3>
      
      <div className="mb-6">
        {renderStepIndicator()}
        <Progress value={getProgressValue()} className="h-1.5 mt-2" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {currentStep === 'loanAmount' && (
          <div className="space-y-5">
            <div>
              <label htmlFor="loanAmount" className="block text-lg font-medium text-gray-700 mb-1.5">
                How much funding do you need?
              </label>
              <Input
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="e.g. $250,000"
                className="mt-2 h-14 text-base"
                required
              />
            </div>
            
            <Button 
              type="button" 
              onClick={moveToNextStep}
              className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="text-center mt-6 mb-4">
              <span className="text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full inline-flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                No hard inquiry
              </span>
            </div>
          </div>
        )}
        
        {currentStep === 'loanType' && (
          <div className="space-y-5">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1.5">
                What type of loan are you looking for?
              </label>
              <Select 
                value={formData.loanType} 
                onValueChange={handleLoanTypeChange}
              >
                <SelectTrigger className="w-full h-14 text-base">
                  <SelectValue placeholder="Choose loan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fix-and-flip">Fix and Flip</SelectItem>
                  <SelectItem value="new-construction">New Construction</SelectItem>
                  <SelectItem value="dscr-rental">DSCR Rental</SelectItem>
                  <SelectItem value="rental-portfolio">Rental Portfolio</SelectItem>
                  <SelectItem value="commercial-bridge">Commercial Bridge</SelectItem>
                  <SelectItem value="multifamily">Multifamily</SelectItem>
                  <SelectItem value="land-lot">Land and Lot Loans</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-3 h-12 text-base"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button 
                type="button" 
                onClick={moveToNextStep}
                className="flex-1 ml-3 h-12 text-base bg-primary hover:bg-primary/90 text-white"
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'contactInfo' && (
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="mt-2 h-14 text-base"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="mt-2 h-14 text-base"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-1.5">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-2 h-14 text-base"
                required
              />
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={moveToPreviousStep}
                className="flex-1 mr-3 h-12 text-base"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 ml-3 h-12 text-base bg-gradient-to-r from-primary to-navy-600 hover:from-primary/90 hover:to-navy-700 text-white"
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuickCapitalRequestForm;
