import React from 'react';
import { Calendar, Truck, Sparkles, MessageCircle } from 'lucide-react';

interface HowItWorksProps {
  setCurrentPage: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ setCurrentPage }) => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "1. Book Your Date",
      description: "Choose your preferred delivery date and package online. We deliver throughout Greater Baton Rouge!",
      details: [
        "Select from our Standard, Deluxe, or Custom packages",
        "Pick your ideal delivery date (we recommend 2-3 days notice)",
        "Add any special requests or color preferences"
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "2. We Deliver & Style",
      description: "Our team arrives with everything needed to create your perfect porch display.",
      details: [
        "We bring fresh pumpkins, decorations, and styling materials",
        "Professional setup right on your front porch",
        "Takes about 30-45 minutes for complete installation"
      ]
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "3. Enjoy Your Display",
      description: "Sit back and enjoy your beautiful fall porch - no cleanup needed!",
      details: [
        "Display lasts the entire fall season",
        "We can refresh or update mid-season if desired",
        "End-of-season cleanup available upon request"
      ]
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "4. Share the Joy",
      description: "Show off your gorgeous porch and tell your neighbors about us!",
      details: [
        "Tag us on social media @PumpkinsToGeaux",
        "Refer friends and get $10 off your next display",
        "Join our happy customer family throughout Baton Rouge"
      ]
    }
  ];

  const serviceAreas = [
    "Baton Rouge", "Prairieville", "Gonzales", "Denham Springs",
    "Walker", "Baker", "Zachary", "Central", "Geismar", "St. Amant"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-700 mb-8">
            From booking to beautiful porch - we make fall decorating easy as can be!
          </p>
          <div className="text-6xl mb-6">🎃 ➜ 🚚 ➜ ✨ ➜ 😊</div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-orange-100 text-orange-500 p-4 rounded-full">
                      {step.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <span className="text-orange-500 font-bold text-lg">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
                    <div className="text-8xl mb-4">
                      {index === 0 && '📅'}
                      {index === 1 && '🚚'}
                      {index === 2 && '🏠'}
                      {index === 3 && '📸'}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {index === 0 && 'Easy Online Booking'}
                      {index === 1 && 'Professional Setup'}
                      {index === 2 && 'Beautiful Results'}
                      {index === 3 && 'Happy Customers'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Where We Deliver</h2>
          <p className="text-lg text-gray-700 mb-8">
            Proudly serving families throughout Greater Baton Rouge and surrounding areas
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg py-3 px-4 shadow-sm border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 mb-8">
            Don't see your area? <button 
              onClick={() => setCurrentPage('contact')}
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              Contact us
            </button> - we may still be able to help!
          </p>
        </div>
      </section>

      {/* Timing & Pricing Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-orange-600 mr-3" />
                Timing & Scheduling
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span><strong>Season:</strong> Late September through November</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span><strong>Notice:</strong> 2-3 days preferred, but we often accommodate same-day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span><strong>Setup Time:</strong> 30-45 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span><strong>Best Days:</strong> Weekends fill up fast - book early!</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-orange-500 mr-3" />
                What's Included
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Fresh pumpkins and seasonal decorations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Professional styling and arrangement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Delivery throughout Greater Baton Rouge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Setup photos for your social media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's bring some Louisiana fall magic to your front porch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('book-now')}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book Your Display Now
            </button>
            <button
              onClick={() => setCurrentPage('packages')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-colors duration-200"
            >
              View Packages & Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;