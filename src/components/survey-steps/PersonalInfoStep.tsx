
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type PersonalInfoProps = {
  name: string;
  email: string;
  phone: string;
  investmentExperience: string;
  creditScore: string;
};

type PersonalInfoStepProps = {
  data: PersonalInfoProps;
  updateFields: (fields: Partial<PersonalInfoProps>) => void;
};

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ data, updateFields }) => {
  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          className="mt-2 h-12 text-base"
          value={data.name}
          onChange={(e) => updateFields({ name: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          className="mt-2 h-12 text-base"
          value={data.email}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Your phone number"
          className="mt-2 h-12 text-base"
          value={data.phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="investmentExperience" className="text-base font-medium">Investment Experience</Label>
        <Select 
          value={data.investmentExperience} 
          onValueChange={(value) => updateFields({ investmentExperience: value })}
        >
          <SelectTrigger id="investmentExperience" className="mt-2 h-12 text-base">
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner (0-1 deals)</SelectItem>
            <SelectItem value="intermediate">Intermediate (2-5 deals)</SelectItem>
            <SelectItem value="experienced">Experienced (6-10 deals)</SelectItem>
            <SelectItem value="advanced">Advanced (11+ deals)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="creditScore" className="text-base font-medium">Estimated Credit Score</Label>
        <Select 
          value={data.creditScore} 
          onValueChange={(value) => updateFields({ creditScore: value })}
        >
          <SelectTrigger id="creditScore" className="mt-2 h-12 text-base">
            <SelectValue placeholder="Select credit range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="excellent">Excellent (740+)</SelectItem>
            <SelectItem value="good">Good (700-739)</SelectItem>
            <SelectItem value="fair">Fair (660-699)</SelectItem>
            <SelectItem value="poor">Below 660</SelectItem>
            <SelectItem value="unsure">Not Sure</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
