
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

type FormStep = 'loanAmount' | 'loanType' | 'contactInfo';

interface LeadCaptureFormProps {
  variant?: 'primary' | 'secondary';
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ variant = 'primary' }) => {
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
      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you shortly!"
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

  return (
    <div className={`${variant === 'primary' ? 'bg-white/80 backdrop-blur-md' : 'bg-white'} p-4 rounded-xl shadow-md`}>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">
            {currentStep === 'loanAmount' ? 'Loan Amount' : 
             currentStep === 'loanType' ? 'Loan Type' : 'Contact Information'}
          </span>
          <span className="text-gray-500">Step {currentStep === 'loanAmount' ? '1' : currentStep === 'loanType' ? '2' : '3'} of 3</span>
        </div>
        <Progress value={getProgressValue()} className="h-2" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {currentStep === 'loanAmount' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                How much funding do you need?
              </label>
              <Input
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="e.g. $250,000"
                className="w-full"
                required
              />
            </div>
            
            <Button 
              type="button" 
              onClick={moveToNextStep}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        
        {currentStep === 'loanType' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What type of loan are you looking for?
              </label>
              <Select 
                value={formData.loanType} 
                onValueChange={handleLoanTypeChange}
              >
                <SelectTrigger className="w-full">
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
            
            <div className="flex justify-between pt-2">
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
        
        {currentStep === 'contactInfo' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div className="flex justify-between pt-2">
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
                {isSubmitting ? "Processing..." : "Get Pre-Approved"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LeadCaptureForm;
