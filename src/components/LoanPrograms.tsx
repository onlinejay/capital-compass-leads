
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
    "transition-all duration-300 h-full hover:shadow-xl border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm",
    popular ? "border-indigo-500/50 shadow-lg shadow-indigo-500/10" : "hover:border-teal-300/30"
  )}>
    {popular && (
      <div className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-t-md absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        MOST POPULAR
      </div>
    )}
    <CardHeader className="pb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-teal-400/10 rounded-full flex items-center justify-center text-teal-400 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-4 pt-2">
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-400 mr-2">✓</span>
            <span className="text-sm text-white/80">{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 bg-white/5 p-3 rounded-md">
        <p className="text-sm text-white/60 font-medium">Typical Terms:</p>
        <p className="text-sm text-white/80">{terms}</p>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-teal-500 hover:to-indigo-600 text-white border-none">
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
    <section id="programs" className="py-20 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll reveal">
          <div className="inline-block bg-gradient-to-r from-indigo-500/20 to-teal-400/20 text-teal-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Investment Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Digital <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">Lending</span> Programs
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Algorithm-optimized financing solutions for all types of real estate investments,
            with flexible terms designed for modern investors.
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
              terms="6-24 month terms"
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
              terms="12-24 month terms"
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
              terms="30-year terms"
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
              terms="30-year terms"
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
              terms="12-36 month terms"
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
              terms="Terms up to 30 years"
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
              terms="6-24 month terms"
            />
          </div>
          
          <div className="flex items-center justify-center h-full reveal-on-scroll reveal delay-300">
            <div className="text-center p-6 border border-white/10 rounded-lg h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm shadow-sm">
              <DollarSign className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Custom Financing</h3>
              <p className="text-sm text-white/80 mb-4">
                Don't see what you need? We create custom AI-optimized solutions for unique investment opportunities.
              </p>
              <Button variant="outline" className="border-teal-400/50 text-teal-400 hover:bg-teal-400/10">
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
