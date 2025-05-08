
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

interface LeadCaptureFormProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ variant = 'primary', className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoanTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, loanType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form Submitted Successfully",
        description: "We'll reach out to you shortly!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        amount: '',
      });
    }, 1000);
  };

  const isPrimary = variant === 'primary';

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={isPrimary ? "bg-white/90" : ""}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={isPrimary ? "bg-white/90" : ""}
          />
          
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={isPrimary ? "bg-white/90" : ""}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select onValueChange={handleLoanTypeChange} value={formData.loanType}>
            <SelectTrigger className={isPrimary ? "bg-white/90" : ""}>
              <SelectValue placeholder="Loan Type" />
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
          
          <Input
            type="text"
            placeholder="Loan Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className={isPrimary ? "bg-white/90" : ""}
          />
        </div>
        
        <Button 
          type="submit" 
          className={`w-full ${isPrimary 
            ? "bg-gold-500 hover:bg-gold-600 text-navy-900"
            : "bg-navy-700 hover:bg-navy-800 text-white"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get Funded Fast"}
        </Button>
        
        <p className={`text-xs text-center ${isPrimary ? "text-white/80" : "text-gray-500"}`}>
          By submitting, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  );
};

export default LeadCaptureForm;
