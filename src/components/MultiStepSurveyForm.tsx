
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PropertyInfoStep from './survey-steps/PropertyInfoStep';
import LoanDetailsStep from './survey-steps/LoanDetailsStep';
import PersonalInfoStep from './survey-steps/PersonalInfoStep';
import ReviewStep from './survey-steps/ReviewStep';

type SurveyData = {
  propertyInfo: {
    propertyType: string;
    propertyAddress: string;
    purchasePrice: string;
    propertyCondition: string;
  };
  loanDetails: {
    loanType: string;
    loanAmount: string;
    timeframe: string;
    exitStrategy: string;
  };
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    investmentExperience: string;
    creditScore: string;
  };
  agreement: boolean;
};

const INITIAL_DATA: SurveyData = {
  propertyInfo: {
    propertyType: '',
    propertyAddress: '',
    purchasePrice: '',
    propertyCondition: '',
  },
  loanDetails: {
    loanType: '',
    loanAmount: '',
    timeframe: '',
    exitStrategy: '',
  },
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    investmentExperience: '',
    creditScore: '',
  },
  agreement: false,
};

const MultiStepSurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<SurveyData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const steps = [
    { name: 'Property', description: 'Property Information' },
    { name: 'Loan', description: 'Loan Details' },
    { name: 'Personal', description: 'Your Information' },
    { name: 'Review', description: 'Submit Application' }
  ];

  // Fixed TypeScript error here by removing the conditional type
  const updateFields = (
    stepKey: keyof SurveyData, 
    fields: Partial<SurveyData[keyof SurveyData]> | { agreement: boolean }
  ) => {
    setData(prev => {
      if (stepKey === 'agreement') {
        // Handle agreement field separately
        return { ...prev, agreement: (fields as { agreement: boolean }).agreement };
      }
      
      // Handle object fields
      return { 
        ...prev, 
        [stepKey]: { ...prev[stepKey], ...(fields as any) }
      };
    });
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      
      toast({
        title: "Application Received",
        description: "Our team is reviewing your details and will contact you shortly!",
      });
    }, 1500);
  };

  const progressPercentage = Math.round(((currentStep + 1) / steps.length) * 100);

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-emerald-500" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
        <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
          Thank you for your application. One of our funding specialists will review your details
          and contact you within 24 hours with personalized financing options.
        </p>
        <Button 
          variant="outline" 
          className="mx-auto border-primary text-primary hover:bg-primary/5 px-8 py-6 h-auto text-lg"
          onClick={() => {
            setData(INITIAL_DATA);
            setCurrentStep(0);
            setIsComplete(false);
          }}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm md:text-base font-medium text-gray-600 mb-2">
          <span className="font-semibold">{steps[currentStep].description}</span>
          <span>Step {currentStep + 1} of {steps.length}</span>
        </div>
        <Progress value={progressPercentage} className="h-2.5" />

        {/* Step indicators */}
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <div 
              key={step.name} 
              className={`flex flex-col items-center ${index <= currentStep ? 'text-primary' : 'text-gray-400'}`}
              style={{ width: `${100 / steps.length}%` }}
            >
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-base
                ${index < currentStep ? 'bg-primary border-primary text-white' : 
                  index === currentStep ? 'border-primary text-primary' : 
                  'border-gray-300 text-gray-300'}`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className="text-xs md:text-sm mt-2 font-medium">{step.name}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="py-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          {currentStep === 0 && (
            <PropertyInfoStep 
              data={data.propertyInfo} 
              updateFields={(fields) => updateFields('propertyInfo', fields)} 
            />
          )}
          
          {currentStep === 1 && (
            <LoanDetailsStep 
              data={data.loanDetails} 
              updateFields={(fields) => updateFields('loanDetails', fields)} 
            />
          )}
          
          {currentStep === 2 && (
            <PersonalInfoStep 
              data={data.personalInfo} 
              updateFields={(fields) => updateFields('personalInfo', fields)}
            />
          )}
          
          {currentStep === 3 && (
            <ReviewStep 
              data={data} 
              updateFields={updateFields}
            />
          )}
        </div>

        <div className="mt-10 flex justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="h-12 px-6 text-base"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button 
              type="button" 
              onClick={nextStep}
              className="bg-primary hover:bg-primary/90 text-white h-12 px-6 text-base"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-primary to-navy-600 hover:from-primary/90 hover:to-navy-700 text-white h-12 px-8 text-base"
              disabled={isSubmitting || !data.agreement}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepSurveyForm;
