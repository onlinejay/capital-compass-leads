
import React, { useEffect } from 'react';
import { 
  Clock,
  Briefcase,
  Users,
  FileText,
  Search,
  DollarSign,
  Building,
  Key,
  Wallet
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gold-200/50">
    <div className="bg-gold-100 rounded-full p-3 text-gold-600">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-navy-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
            Why <span className="text-gold-500">Investors Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our real estate investment lending platform provides the speed, flexibility, and expertise property investors need to maximize returns and scale their portfolios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<Clock className="w-6 h-6" />}
              title="Fast Closings"
              description="Close your investment properties in as little as 7 days, giving you the competitive edge in any market."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<Briefcase className="w-6 h-6" />}
              title="Investor Experience"
              description="Our team consists of active real estate investors who understand your business from the inside out."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<DollarSign className="w-6 h-6" />}
              title="Competitive Rates"
              description="We offer some of the most competitive rates in the hard money and private lending industry."
            />
          </div>
          
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<Building className="w-6 h-6" />}
              title="All Property Types"
              description="From single-family to commercial, we finance virtually all types of real estate investment properties."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<FileText className="w-6 h-6" />}
              title="Simple Documentation"
              description="Our streamlined process requires minimal paperwork compared to conventional bank financing."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<Search className="w-6 h-6" />}
              title="Asset-Based Lending"
              description="We focus primarily on the property value and your exit strategy rather than traditional qualifying metrics."
            />
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-navy-800 rounded-xl text-white text-center reveal-on-scroll reveal">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Fund Your Next Investment Property?</h3>
            <p className="mb-6 font-medium">
              Whether you're flipping houses, building your rental portfolio, or developing commercial properties, 
              we have the right financing solution for your real estate investment strategy.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md px-6 py-3 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
