
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const HeroOption3 = () => {
  return (
    <Card className="border rounded-xl overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {/* Preview Label */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
          Hero Option 3: Clean & Minimal Style
        </div>
      
        {/* Hero Content */}
        <div className="bg-white">
          <div className="container mx-auto px-6 py-20 md:py-24">
            {/* Grid layout */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Logo Design 3 - Clean & Minimal */}
                <div className="mb-10">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="white"/>
                        <path d="M12 4L5 8L12 12L19 8L12 4Z" fill="#1E88E5" />
                        <path d="M5 16L12 20L19 16" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12L12 16L19 12" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-medium tracking-tight">
                        <span className="text-bluemint-blue">Blue</span>
                        <span className="text-bluemint-teal">Mint</span>
                      </div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">FINANCIAL</div>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 text-gray-900">
                  Smart capital solutions for<br />
                  <span className="text-bluemint-blue">real estate investors.</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  Access the funding you need with transparent terms and personalized service. No hidden fees.
                </p>
                
                {/* Clean feature list */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-bluemint-blue mr-3" />
                    <span className="text-gray-700">Rates starting at 7.5%</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-bluemint-blue mr-3" />
                    <span className="text-gray-700">Funding in as little as 7 days</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-bluemint-blue mr-3" />
                    <span className="text-gray-700">No prepayment penalties</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    size="lg"
                    className="bg-bluemint-blue hover:bg-bluemint-blue/90 text-white rounded-md px-8"
                  >
                    Request Funding
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-bluemint-blue text-bluemint-blue hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Clean form design */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-800">Request a Quote</h3>
                  <Shield className="text-bluemint-blue w-5 h-5" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-6 p-3 bg-blue-50 rounded-md text-sm">
                    <TrendingUp className="text-bluemint-blue mr-2 w-4 h-4" />
                    <span>Funding requests are typically processed within 24 hours</span>
                  </div>
                  
                  {/* Form placeholder */}
                  <div className="space-y-4">
                    <div className="bg-slate-100 h-10 rounded-md animate-pulse"></div>
                    <div className="bg-slate-100 h-10 rounded-md animate-pulse"></div>
                    <div className="bg-slate-100 h-10 rounded-md animate-pulse"></div>
                    <div className="bg-slate-100 h-10 rounded-md animate-pulse"></div>
                    <Button className="bg-bluemint-blue hover:bg-bluemint-blue/90 w-full">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroOption3;
