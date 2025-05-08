
import React, { useEffect } from 'react';
import { 
  Building, 
  Home, 
  Banknote, 
  DollarSign, 
  House, 
  Building2, 
  Map 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LoanProgramProps {
  title: string;
  icon: React.ReactNode;
  points: string[];
  terms: string;
  popular?: boolean;
}

const LoanProgram: React.FC<LoanProgramProps> = ({ title, icon, points, terms, popular }) => (
  <Card className={cn(
    "transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-1",
    popular ? "border-gold-500 shadow-md" : "hover:border-navy-300"
  )}>
    {popular && (
      <div className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-t-md absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        MOST POPULAR
      </div>
    )}
    <CardHeader className="pb-4">
      <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-700 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-4">
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gold-500 mr-2">✓</span>
            <span className="text-sm text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 bg-navy-50 p-3 rounded-md">
        <p className="text-sm text-navy-700 font-medium">Typical Terms:</p>
        <p className="text-sm text-gray-600">{terms}</p>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-navy-700 hover:bg-navy-800">
        Apply Now
      </Button>
    </CardFooter>
  </Card>
);

const LoanPrograms = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
            Our Loan <span className="text-gold-500">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer specialized financing solutions for all types of real estate investments,
            with competitive rates and flexible terms designed for investors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="reveal-on-scroll reveal">
            <LoanProgram
              title="Fix-and-Flip"
              icon={<Home className="w-6 h-6" />}
              points={[
                "Up to 90% of purchase price",
                "100% of rehab costs",
                "No prepayment penalties",
                "Interest-only payments",
              ]}
              terms="6-24 month terms, rates from 8.99%"
              popular={true}
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <LoanProgram
              title="New Construction"
              icon={<Building className="w-6 h-6" />}
              points={[
                "Ground-up construction financing",
                "Draws based on completion",
                "Interest reserve available",
                "Construction oversight services",
              ]}
              terms="12-24 month terms, rates from 9.5%"
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <LoanProgram
              title="DSCR Rental"
              icon={<House className="w-6 h-6" />}
              points={[
                "No income verification",
                "Based on property cash flow",
                "Long-term financing options",
                "Portfolio loans available",
              ]}
              terms="30-year terms, rates from 7.25%"
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-300">
            <LoanProgram
              title="Rental Portfolio"
              icon={<Building2 className="w-6 h-6" />}
              points={[
                "Bundle multiple properties",
                "Single loan, simplified management",
                "Cross-collateralization benefits",
                "Scale your portfolio efficiently",
              ]}
              terms="30-year terms, rates from 7.5%"
            />
          </div>
          
          <div className="reveal-on-scroll reveal">
            <LoanProgram
              title="Commercial Bridge"
              icon={<Banknote className="w-6 h-6" />}
              points={[
                "Office, retail, industrial, mixed-use",
                "Value-add opportunities",
                "Quick closing timeline",
                "Flexible exit strategies",
              ]}
              terms="12-36 month terms, rates from 8.75%"
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <LoanProgram
              title="Multifamily"
              icon={<Building className="w-6 h-6" />}
              points={[
                "5+ unit residential properties",
                "Acquisition and repositioning",
                "Renovation funding available",
                "Cash-out refinance options",
              ]}
              terms="Terms up to 30 years, rates from 7.99%"
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <LoanProgram
              title="Land & Lot Loans"
              icon={<Map className="w-6 h-6" />}
              points={[
                "Acquisition for future development",
                "Entitled and non-entitled land",
                "Horizontal development",
                "Flexible terms for developers",
              ]}
              terms="6-24 month terms, rates from 10.5%"
            />
          </div>
          
          <div className="flex items-center justify-center h-full reveal-on-scroll reveal delay-300">
            <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center">
              <DollarSign className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Financing</h3>
              <p className="text-sm text-gray-600 mb-4">
                Don't see what you need? We create custom solutions for unique investment opportunities.
              </p>
              <Button variant="outline" className="border-gold-500 text-navy-700 hover:bg-gold-50">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanPrograms;
