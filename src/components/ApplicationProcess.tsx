
import React, { useEffect } from 'react';

const ApplicationProcess = () => {
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
        <div className="text-center mb-16 reveal-on-scroll reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
            Simple <span className="text-gold-500">Application Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets you from application to funding in record time,
            so you can move quickly on investment opportunities.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-navy-200 transform -translate-x-1/2"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center reveal-on-scroll reveal">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-2 text-navy-800">Apply Online</h3>
                <p className="text-gray-600">
                  Fill out our simple online application form with your information and details about your investment property.
                </p>
              </div>
              <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-navy-700 text-white flex items-center justify-center text-lg font-bold relative z-10">
                  1
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                  <p className="text-sm text-gray-500 italic">
                    "The application took me less than 5 minutes. It was so easy compared to traditional banks."
                  </p>
                  <p className="text-navy-700 font-medium mt-2">- Michael R., Fix & Flip Investor</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center reveal-on-scroll reveal">
              <div className="md:w-1/2 md:pr-12 order-2">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                  <p className="text-sm text-gray-500 italic">
                    "I got pre-approved in just a few hours. The team at Capital Compass was incredibly responsive."
                  </p>
                  <p className="text-navy-700 font-medium mt-2">- Sarah T., Commercial Investor</p>
                </div>
              </div>
              <div className="md:w-12 flex justify-center my-4 md:my-0 order-1">
                <div className="w-12 h-12 rounded-full bg-navy-700 text-white flex items-center justify-center text-lg font-bold relative z-10">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                <h3 className="text-2xl font-bold mb-2 text-navy-800">Get Pre-Approved</h3>
                <p className="text-gray-600">
                  Receive pre-approval within 24 hours, giving you the confidence to make offers on properties.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center reveal-on-scroll reveal">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-2 text-navy-800">Property Evaluation</h3>
                <p className="text-gray-600">
                  We assess the property value with a quick evaluation process to finalize your loan terms.
                </p>
              </div>
              <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-navy-700 text-white flex items-center justify-center text-lg font-bold relative z-10">
                  3
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                  <p className="text-sm text-gray-500 italic">
                    "The property evaluation was thorough yet fast. Their team knew exactly what to look for."
                  </p>
                  <p className="text-navy-700 font-medium mt-2">- David K., New Construction Developer</p>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center reveal-on-scroll reveal">
              <div className="md:w-1/2 md:pr-12 order-2">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                  <p className="text-sm text-gray-500 italic">
                    "Closing was a breeze. Funds were in my account right when I needed them to secure my deal."
                  </p>
                  <p className="text-navy-700 font-medium mt-2">- Jennifer P., Multifamily Investor</p>
                </div>
              </div>
              <div className="md:w-12 flex justify-center my-4 md:my-0 order-1">
                <div className="w-12 h-12 rounded-full bg-navy-700 text-white flex items-center justify-center text-lg font-bold relative z-10">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                <h3 className="text-2xl font-bold mb-2 text-navy-800">Close & Fund</h3>
                <p className="text-gray-600">
                  Close quickly and receive funding in as few as 7-14 days so you can act fast on your investment.
                </p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-16 text-center reveal-on-scroll reveal">
            <div className="inline-block bg-gold-100 border border-gold-200 rounded-lg p-6 max-w-2xl">
              <h3 className="text-xl font-bold text-navy-800 mb-2">Ready to start your next project?</h3>
              <p className="text-gray-600 mb-4">
                Apply now and get pre-approved within 24 hours. Our team is standing by to help you secure the funding you need.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-md px-6 py-3 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
