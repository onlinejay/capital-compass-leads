
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

// This is the fixed type definition that will correctly handle the agreement field
type ReviewStepProps = {
  data: SurveyData;
  updateFields: (
    stepKey: keyof SurveyData, 
    fields: stepKey extends 'agreement' 
      ? { agreement: boolean } 
      : Partial<SurveyData[keyof SurveyData]>
  ) => void;
};

const formatPropertyType = (type: string): string => {
  const mappings: Record<string, string> = {
    'single-family': 'Single Family',
    'multi-family': 'Multi-Family (2-4 Units)',
    'apartment': 'Apartment Building (5+ Units)',
    'commercial': 'Commercial',
    'land': 'Land',
    'mixed-use': 'Mixed-Use'
  };
  return mappings[type] || type;
};

const formatCondition = (condition: string): string => {
  const mappings: Record<string, string> = {
    'excellent': 'Excellent - Move-in Ready',
    'good': 'Good - Minor Repairs Needed',
    'fair': 'Fair - Moderate Rehab Required',
    'poor': 'Poor - Major Renovation Needed',
    'distressed': 'Distressed - Full Gut Rehab',
    'new-construction': 'New Construction'
  };
  return mappings[condition] || condition;
};

const formatLoanType = (type: string): string => {
  const mappings: Record<string, string> = {
    'fix-and-flip': 'Fix and Flip',
    'bridge': 'Bridge Loan',
    'rental': 'Rental Property (DSCR)',
    'new-construction': 'New Construction',
    'refinance': 'Refinance',
    'commercial': 'Commercial'
  };
  return mappings[type] || type;
};

const formatExitStrategy = (strategy: string): string => {
  const mappings: Record<string, string> = {
    'sell': 'Sell After Renovations',
    'refinance': 'Refinance to Traditional Loan',
    'hold': 'Long-term Hold/Rental',
    'other': 'Other/Not Sure Yet'
  };
  return mappings[strategy] || strategy;
};

const ReviewStep: React.FC<ReviewStepProps> = ({ data, updateFields }) => {
  const { propertyInfo, loanDetails, personalInfo } = data;

  const renderField = (label: string, value: string) => (
    <div className="mb-3">
      <span className="text-gray-500 text-sm">{label}:</span>
      <p className="font-medium text-gray-800">{value || "Not provided"}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <Tabs defaultValue="property" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="property">Property</TabsTrigger>
          <TabsTrigger value="loan">Loan</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="property" className="space-y-2 border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-800">Property Details</h3>
          </div>
          
          {renderField("Property Type", formatPropertyType(propertyInfo.propertyType))}
          {renderField("Property Address", propertyInfo.propertyAddress)}
          {renderField("Purchase Price", propertyInfo.purchasePrice ? `$${propertyInfo.purchasePrice}` : "")}
          {renderField("Property Condition", formatCondition(propertyInfo.propertyCondition))}
        </TabsContent>
        
        <TabsContent value="loan" className="space-y-2 border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-800">Loan Details</h3>
          </div>
          
          {renderField("Loan Type", formatLoanType(loanDetails.loanType))}
          {renderField("Loan Amount", loanDetails.loanAmount ? `$${loanDetails.loanAmount}` : "")}
          {renderField("Funding Timeframe", loanDetails.timeframe)}
          {renderField("Exit Strategy", formatExitStrategy(loanDetails.exitStrategy))}
        </TabsContent>
        
        <TabsContent value="personal" className="space-y-2 border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-800">Personal Information</h3>
          </div>
          
          {renderField("Name", personalInfo.name)}
          {renderField("Email", personalInfo.email)}
          {renderField("Phone", personalInfo.phone)}
          {renderField("Investment Experience", personalInfo.investmentExperience)}
          {renderField("Credit Score", personalInfo.creditScore)}
        </TabsContent>
      </Tabs>
      
      <div className="pt-4 border-t">
        <div className="flex items-start space-x-2 mb-4">
          <Checkbox 
            id="agreement" 
            checked={data.agreement}
            onCheckedChange={(checked) => {
              if (typeof checked === 'boolean') {
                updateFields('agreement', { agreement: checked });
              }
            }}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="agreement"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </Label>
            <p className="text-xs text-muted-foreground">
              By submitting this form, I agree to be contacted about real estate investment funding options. 
              I understand that my information will be kept confidential and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
