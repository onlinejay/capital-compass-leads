
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Clock, CheckCircle, Rocket } from 'lucide-react';

const HeroOption2 = () => {
  return (
    <Card className="border rounded-xl overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {/* Preview Label */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
          Hero Option 2: Bold & Vibrant Style
        </div>
      
        {/* Hero Content */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white overflow-hidden">
          <div className="container mx-auto px-6 py-20 md:py-24 relative">
            {/* Abstract shapes in background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-bluemint-teal/10 rounded-full blur-3xl"></div>
            
            {/* Grid layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              {/* Left Column - Content */}
              <div>
                {/* Logo Design 2 - Bold & Vibrant */}
                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="mr-3 bg-white p-2 rounded-lg shadow-lg">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1E88E5" />
                        <path d="M2 17L12 22L22 17" stroke="#20B2AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="#20B2AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-3xl font-extrabold font-heading">
                      <span className="text-white">BLUE</span>
                      <span className="text-bluemint-teal-light">MINT</span>
                    </div>
                  </div>
                  <div className="text-lg text-blue-200 ml-14 -mt-1">FINANCIAL</div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 font-heading">
                  UNLOCK YOUR PROPERTY'S <span className="text-bluemint-teal-light">POTENTIAL</span>
                </h1>
                
                <p className="text-lg text-blue-100 mb-8 max-w-xl">
                  Real estate investors trust BlueMint for lightning-fast capital solutions with superior terms and service.
                </p>
                
                {/* Feature Cards - Bold style */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-bluemint-teal-light mr-2" />
                      <span className="font-bold text-white">24HR APPROVAL</span>
                    </div>
                    <p className="text-sm text-blue-100">Get your funding decision fast</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <Rocket className="w-5 h-5 text-bluemint-teal-light mr-2" />
                      <span className="font-bold text-white">RAPID CLOSING</span>
                    </div>
                    <p className="text-sm text-blue-100">Close in as little as 7 days</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    size="lg"
                    className="bg-bluemint-teal hover:bg-bluemint-teal-dark text-white font-bold px-8 py-6"
                  >
                    APPLY NOW
                    <ArrowRight className="ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/20 font-bold px-6 py-6"
                  >
                    VIEW PROGRAMS
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Form Preview with bold style */}
              <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl border-t-8 border-bluemint-teal">
                <div className="bg-gray-100 p-4 flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-gray-900">FUNDING APPLICATION</h3>
                  <Star className="w-6 h-6 text-bluemint-teal" />
                </div>
                
                <div className="p-6">
                  <div className="bg-blue-50 border-l-4 border-bluemint-teal p-3 mb-6">
                    <p className="font-bold text-gray-800">PRIORITY REVIEW</p>
                    <p className="text-sm text-gray-600">Applications reviewed within 24 hours</p>
                  </div>
                  
                  {/* Form placeholder */}
                  <div className="space-y-4">
                    <div className="bg-gray-100 h-12 rounded-md animate-pulse"></div>
                    <div className="bg-gray-100 h-12 rounded-md animate-pulse"></div>
                    <div className="bg-gray-100 h-12 rounded-md animate-pulse"></div>
                    <Button className="bg-bluemint-teal hover:bg-bluemint-teal/90 w-full font-bold text-lg py-6">
                      GET PRE-APPROVED
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

export default HeroOption2;
