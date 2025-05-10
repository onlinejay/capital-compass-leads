
import React, { useEffect } from 'react';
import { 
  Building, 
  Home, 
  Banknote, 
  DollarSign, 
  House, 
  Building2, 
  Map,
  Wallet,
  Headphones
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
  onApplyClick: () => void;
}

const LoanProgram: React.FC<LoanProgramProps> = ({ title, icon, points, terms, popular, onApplyClick }) => (
  <Card className={cn(
    "transition-all duration-300 h-full hover:shadow-xl",
    popular ? "border-primary shadow-lg shadow-primary/10" : "hover:border-primary/50"
  )}>
    {popular && (
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-t-md absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        MOST POPULAR
      </div>
    )}
    <CardHeader className="pb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-4 pt-2">
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 font-bold">✓</span>
            <span className="text-sm text-gray-700 font-medium">{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 bg-blue-50 rounded-md p-3">
        <p className="text-sm text-primary font-medium mb-1">Typical Terms:</p>
        <p className="text-sm text-gray-800 font-bold">{terms}</p>
      </div>
    </CardContent>
    <CardFooter>
      <Button 
        className="w-full"
        onClick={onApplyClick}
      >
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

  const handleApplyNowClick = () => {
    // Scroll to the form section
    const formSection = document.querySelector('#quick-capital-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll reveal">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-blue-400/20 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
            Investment Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="text-gradient">Smarter</span> Way to Secure Investment Capital
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Custom financing solutions for all types of real estate investments,
            with flexible terms designed for today's property investors.
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
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
              onApplyClick={handleApplyNowClick}
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-300">
            <div className="bg-blue-50 border border-blue-100 h-full p-6 flex flex-col items-center justify-center rounded-lg">
              <Headphones className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Speak To An Funding Advisor</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">
                Get personalized advice on the best financing options for your specific real estate investment needs.
              </p>
              <Button 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={handleApplyNowClick}
              >
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
