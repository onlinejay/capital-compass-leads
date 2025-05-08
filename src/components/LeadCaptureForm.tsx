
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { CreditCard, DollarSign, Lock } from 'lucide-react';

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
        title: "Application Received",
        description: "Our AI is analyzing your request. We'll reach out shortly!",
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

  // Use different styling based on variant
  const isPrimary = variant === 'primary';
  const inputClasses = isPrimary
    ? "bg-white/20 border-white/30 text-white font-medium focus-visible:ring-navy-400 placeholder:text-white/70"
    : "bg-white border-gray-300 text-gray-800 font-medium focus-visible:ring-primary/30 placeholder:text-gray-500";
  
  const buttonClasses = isPrimary
    ? "bg-gradient-to-r from-primary to-navy-600 hover:from-primary/90 hover:to-navy-700 text-white font-bold shadow-lg shadow-primary/20"
    : "bg-gradient-to-r from-primary to-navy-600 hover:from-primary/90 hover:to-navy-700 text-white font-bold shadow-md shadow-primary/10";

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${inputClasses} pl-10`}
          />
          <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`${inputClasses} pl-10`}
            />
            <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="relative">
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`${inputClasses} pl-10`}
            />
            <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Select onValueChange={handleLoanTypeChange} value={formData.loanType}>
              <SelectTrigger className={`${isPrimary ? "bg-white/20 border-white/30 text-white" : "bg-white text-gray-800 border-gray-300"} font-medium pl-10`}>
                <SelectValue placeholder="Loan Type" />
              </SelectTrigger>
              <SelectContent className={isPrimary ? "bg-navy-800 border-white/20 text-white" : "bg-white text-gray-800 border-gray-300"}>
                <SelectItem value="fix-and-flip" className="hover:bg-white/10">Fix and Flip</SelectItem>
                <SelectItem value="new-construction" className="hover:bg-white/10">New Construction</SelectItem>
                <SelectItem value="dscr-rental" className="hover:bg-white/10">DSCR Rental</SelectItem>
                <SelectItem value="rental-portfolio" className="hover:bg-white/10">Rental Portfolio</SelectItem>
                <SelectItem value="commercial-bridge" className="hover:bg-white/10">Commercial Bridge</SelectItem>
                <SelectItem value="multifamily" className="hover:bg-white/10">Multifamily</SelectItem>
                <SelectItem value="land-lot" className="hover:bg-white/10">Land and Lot Loans</SelectItem>
              </SelectContent>
            </Select>
            <CreditCard className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          </div>
          
          <div className="relative">
            <Input
              type="text"
              placeholder="Loan Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className={`${inputClasses} pl-10`}
            />
            <DollarSign className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className={`w-full ${buttonClasses} rounded-md`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Get Instant Pre-Approval"}
        </Button>
        
        <p className={`text-xs text-center flex items-center justify-center gap-1 ${isPrimary ? "text-white/80 font-medium" : "text-gray-600 font-medium"}`}>
          <Lock className="w-3 h-3" />
          Secure, encrypted application with bank-level security
        </p>
      </div>
    </form>
  );
};

// Import the needed Lucide icons
import { User, Mail, Phone } from 'lucide-react';

export default LeadCaptureForm;
