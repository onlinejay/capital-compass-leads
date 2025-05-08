
import React, { useEffect } from 'react';
import { 
  Clock,
  Briefcase,
  Rocket,
  FileText,
  Target,
  DollarSign,
  Building,
  Zap,
  TrendingUp
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gold-200/50 hover:border-gold-400 hover:-translate-y-1">
    <div className="bg-gold-100 rounded-full p-3 text-gold-600">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-navy-800">{title}</h3>
      <p className="text-gray-600 font-medium">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
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
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
            Why <span className="text-gold-500">Action-Oriented Investors</span> Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Our investment lending platform gives you the competitive edge to capitalize on opportunities faster than traditional lenders, helping you build wealth through real estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<Clock className="w-6 h-6" />}
              title="Speed to Close"
              description="Seize opportunities before your competition with our 7-day closing capability, giving you the edge in competitive markets."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<Rocket className="w-6 h-6" />}
              title="Aggressive Underwriting"
              description="Our team looks for ways to say 'yes' when traditional lenders say 'no' – we focus on the deal potential, not just the paperwork."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<Target className="w-6 h-6" />}
              title="Strategic Partner"
              description="We're investors ourselves who understand your vision and help you execute your acquisition and exit strategies effectively."
            />
          </div>
          
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<TrendingUp className="w-6 h-6" />}
              title="Scale Your Portfolio"
              description="Our financing solutions are designed to help you acquire multiple properties and grow your real estate empire faster."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<Zap className="w-6 h-6" />}
              title="Quick Decisions"
              description="Get loan approvals in 24 hours with minimal paperwork, allowing you to make confident offers and close deals rapidly."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<DollarSign className="w-6 h-6" />}
              title="Creative Capital Solutions"
              description="Access innovative funding approaches from 100% financing to cross-collateralization options not available with conventional banks."
            />
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-navy-800 rounded-xl text-white text-center reveal-on-scroll reveal">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Take Action on Your Next Deal?</h3>
            <p className="mb-6 font-medium">
              Don't miss out on your next investment opportunity because of slow financing. 
              Our streamlined process gets you funded when others can't.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md px-6 py-3 transition-colors transform hover:scale-105"
            >
              Get Funded Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
