
import React, { useEffect } from 'react';
import { 
  Clock,
  Briefcase,
  Users,
  FileText,
  Search,
  DollarSign
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-navy-100 rounded-full p-3 text-navy-700">
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
            Why <span className="text-gold-500">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Capital Compass provides a streamlined lending experience with the speed, flexibility, and expertise real estate investors need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<Clock className="w-6 h-6" />}
              title="Speed to Close"
              description="Close deals in as little as 7 days, giving you a competitive edge in fast-moving markets."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<Briefcase className="w-6 h-6" />}
              title="Experienced Team"
              description="Our team has over 30 years combined experience in real estate investing and lending."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<DollarSign className="w-6 h-6" />}
              title="Competitive Rates"
              description="We offer some of the most competitive rates in the hard money lending industry."
            />
          </div>
          
          <div className="reveal-on-scroll reveal">
            <Feature 
              icon={<Users className="w-6 h-6" />}
              title="Personalized Service"
              description="Work with the same loan officer throughout your entire project for consistent communication."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-100">
            <Feature 
              icon={<FileText className="w-6 h-6" />}
              title="Simple Documentation"
              description="Our streamlined process requires minimal paperwork compared to conventional lenders."
            />
          </div>
          
          <div className="reveal-on-scroll reveal delay-200">
            <Feature 
              icon={<Search className="w-6 h-6" />}
              title="Asset-Based Lending"
              description="We focus primarily on the property value rather than your credit score or income."
            />
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-navy-800 rounded-xl text-white text-center reveal-on-scroll reveal">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Funding for Your Next Project?</h3>
            <p className="mb-6">
              Whether you're flipping houses, building from the ground up, or growing your rental portfolio, 
              we have the right financing solution for you.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium rounded-md px-6 py-3 transition-colors"
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
