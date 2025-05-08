
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type PropertyInfoProps = {
  propertyType: string;
  propertyAddress: string;
  purchasePrice: string;
  propertyCondition: string;
};

type PropertyInfoStepProps = {
  data: PropertyInfoProps;
  updateFields: (fields: Partial<PropertyInfoProps>) => void;
};

const PropertyInfoStep: React.FC<PropertyInfoStepProps> = ({ data, updateFields }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="propertyType">Property Type</Label>
        <Select 
          value={data.propertyType} 
          onValueChange={(value) => updateFields({ propertyType: value })}
        >
          <SelectTrigger id="propertyType" className="mt-1">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single-family">Single Family</SelectItem>
            <SelectItem value="multi-family">Multi-Family (2-4 Units)</SelectItem>
            <SelectItem value="apartment">Apartment Building (5+ Units)</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="mixed-use">Mixed-Use</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="propertyAddress">Property Address</Label>
        <Textarea
          id="propertyAddress"
          placeholder="Enter full property address"
          className="mt-1"
          value={data.propertyAddress}
          onChange={(e) => updateFields({ propertyAddress: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="purchasePrice">Purchase Price / Property Value ($)</Label>
        <Input
          id="purchasePrice"
          type="text"
          placeholder="e.g. 450,000"
          className="mt-1"
          value={data.purchasePrice}
          onChange={(e) => updateFields({ purchasePrice: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="propertyCondition">Property Condition</Label>
        <Select 
          value={data.propertyCondition} 
          onValueChange={(value) => updateFields({ propertyCondition: value })}
        >
          <SelectTrigger id="propertyCondition" className="mt-1">
            <SelectValue placeholder="Select condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="excellent">Excellent - Move-in Ready</SelectItem>
            <SelectItem value="good">Good - Minor Repairs Needed</SelectItem>
            <SelectItem value="fair">Fair - Moderate Rehab Required</SelectItem>
            <SelectItem value="poor">Poor - Major Renovation Needed</SelectItem>
            <SelectItem value="distressed">Distressed - Full Gut Rehab</SelectItem>
            <SelectItem value="new-construction">New Construction</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PropertyInfoStep;
