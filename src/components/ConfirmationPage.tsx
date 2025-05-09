
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    name?: string;
    loanType?: string;
    loanAmount?: string;
  } || {};
  
  const { name, loanType, loanAmount } = state;
  
  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-navy-400/5 opacity-70"></div>
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-secondary/20 filter blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-accent/20 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-lg w-full mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
        </div>
        
        <Card className="border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-emerald-800">
              <span>Application Received</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">Thank You!</CardTitle>
            <CardDescription className="text-gray-600 text-lg mt-2">
              We have received your inquiry
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4 pb-6">
            <div className="space-y-6">
              <p className="text-center text-gray-700">
                A loan representative will be reaching out shortly to discuss your 
                {loanType && <span className="font-medium"> {loanType}</span>} loan request
                {loanAmount && <span className="font-medium"> of {loanAmount}</span>}.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">What's Next?</h4>
                  <p className="text-gray-600 text-sm">
                    {name ? `${name}, please` : "Please"} check your email for confirmation and additional 
                    details. Our funding specialist will contact you within 24 hours to discuss your 
                    financing options.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center pt-2 pb-6">
            <Button 
              onClick={handleReturnHome}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
            >
              Return to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-gray-700">Secure Process</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-gray-700">Fast Response</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-gray-700">Expert Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
