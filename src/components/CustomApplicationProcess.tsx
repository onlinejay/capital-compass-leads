
import React, { useEffect } from 'react';
import { 
  Clipboard, 
  FileSearch, 
  FileCheck, 
  Send
} from 'lucide-react';

const CustomApplicationProcess = () => {
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
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-heading">
            Simple Four-Step Application Process
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our streamlined application process makes it easy to get the funding you need
            for your real estate investments quickly and efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left relative reveal-on-scroll">
              <div className="absolute -top-4 -left-4 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <Clipboard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Complete Application</h3>
                  <p className="text-gray-600">Fill out our simple online application form with details about your investment property and funding needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left relative reveal-on-scroll">
              <div className="absolute -top-4 -left-4 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <FileSearch className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Document Review</h3>
                  <p className="text-gray-600">Our team reviews your application and property documentation to determine the best funding options.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left relative reveal-on-scroll">
              <div className="absolute -top-4 -left-4 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Approval Process</h3>
                  <p className="text-gray-600">Receive your pre-approval within 24 hours, with clear terms and competitive rates for your investment.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left relative reveal-on-scroll">
              <div className="absolute -top-4 -left-4 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Funding Distribution</h3>
                  <p className="text-gray-600">Once approved, receive your funds quickly and efficiently to proceed with your real estate investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomApplicationProcess;
