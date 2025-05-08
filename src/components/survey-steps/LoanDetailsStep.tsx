
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type LoanDetailsProps = {
  loanType: string;
  loanAmount: string;
  timeframe: string;
  exitStrategy: string;
};

type LoanDetailsStepProps = {
  data: LoanDetailsProps;
  updateFields: (fields: Partial<LoanDetailsProps>) => void;
};

const LoanDetailsStep: React.FC<LoanDetailsStepProps> = ({ data, updateFields }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="loanType">Loan Type</Label>
        <Select 
          value={data.loanType} 
          onValueChange={(value) => updateFields({ loanType: value })}
        >
          <SelectTrigger id="loanType" className="mt-1">
            <SelectValue placeholder="Select loan type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fix-and-flip">Fix and Flip</SelectItem>
            <SelectItem value="bridge">Bridge Loan</SelectItem>
            <SelectItem value="rental">Rental Property (DSCR)</SelectItem>
            <SelectItem value="new-construction">New Construction</SelectItem>
            <SelectItem value="refinance">Refinance</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="loanAmount">Loan Amount Needed ($)</Label>
        <Input
          id="loanAmount"
          type="text"
          placeholder="e.g. 350,000"
          className="mt-1"
          value={data.loanAmount}
          onChange={(e) => updateFields({ loanAmount: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="timeframe">Funding Timeframe</Label>
        <Select 
          value={data.timeframe} 
          onValueChange={(value) => updateFields({ timeframe: value })}
        >
          <SelectTrigger id="timeframe" className="mt-1">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediate">Immediate (7-10 days)</SelectItem>
            <SelectItem value="soon">Soon (14-30 days)</SelectItem>
            <SelectItem value="month">Within a month</SelectItem>
            <SelectItem value="quarter">This quarter</SelectItem>
            <SelectItem value="exploring">Just exploring options</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2 block">Exit Strategy</Label>
        <RadioGroup 
          value={data.exitStrategy} 
          onValueChange={(value) => updateFields({ exitStrategy: value })}
          className="gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sell" id="exit-sell" />
            <Label htmlFor="exit-sell">Sell After Renovations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="refinance" id="exit-refinance" />
            <Label htmlFor="exit-refinance">Refinance to Traditional Loan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hold" id="exit-hold" />
            <Label htmlFor="exit-hold">Long-term Hold/Rental</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="exit-other" />
            <Label htmlFor="exit-other">Other/Not Sure Yet</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default LoanDetailsStep;
