
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Circle, Clock, CheckCircle, Shield } from 'lucide-react';

const HeroOption1 = () => {
  return (
    <Card className="border rounded-xl overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {/* Preview Label */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
          Hero Option 1: Modern Gradient Style
        </div>
      
        <div className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-blue-50/50 filter blur-3xl"></div>
            <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-blue-100/20 filter blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-100/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-blue-50/50 rounded-full animate-pulse"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Content */}
            <div className="reveal">
              {/* Logo Design 1 - Modern Gradient */}
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#paint0_linear)" />
                      <path d="M2 17L12 22L22 17" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="7" x2="22" y2="7" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E88E5" />
                          <stop offset="1" stopColor="#42A5F5" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="2" y1="19.5" x2="22" y2="19.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#20B2AA" />
                          <stop offset="1" stopColor="#5FCCC5" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="2" y1="14.5" x2="22" y2="14.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#20B2AA" />
                          <stop offset="1" stopColor="#5FCCC5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold font-heading flex items-center">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Blue</span>
                    <span className="bg-gradient-to-r from-bluemint-teal to-bluemint-teal-light bg-clip-text text-transparent">Mint</span>
                    <span className="text-gray-800"> Financial</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-gray-900 font-heading">
                Fast, <span className="fintech-gradient-text bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Flexible Funding</span> for Your Next Investment
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                Access the capital you need with industry-leading rates and personalized service from BlueMint Financial.
              </p>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="font-medium text-sm text-gray-700">Fast Approvals</span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-3 border border-gray-100 shadow-sm h-full">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="font-medium text-sm text-gray-700">Flexible Terms</span>
                </div>
              </div>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-600/90 text-white font-semibold rounded-xl px-5 py-5 md:px-6 md:py-6 shadow-md hover:shadow-lg transition-all"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
            
            {/* Right Column - Form Preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-blue-400/30 to-blue-300/20 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
              
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div className="absolute -top-4 left-6 right-6 bg-blue-600 px-4 py-2 rounded-full text-sm font-bold text-white shadow-md flex items-center justify-center">
                  <Circle className="w-2 h-2 mr-2 animate-pulse text-white" />
                  <span>FUNDING REQUEST</span>
                </div>
                
                <div className="mt-4 flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Capital Request</h3>
                  <Shield className="text-blue-500 w-5 h-5" />
                </div>
                
                {/* Form placeholder */}
                <div className="space-y-4 mt-6">
                  <div className="bg-gray-100 h-10 rounded-md animate-pulse"></div>
                  <div className="bg-gray-100 h-10 rounded-md animate-pulse"></div>
                  <div className="bg-gray-100 h-10 rounded-md animate-pulse"></div>
                  <div className="bg-blue-500 h-10 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroOption1;
