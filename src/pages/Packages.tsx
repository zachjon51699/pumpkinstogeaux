import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PackagesProps {
  setCurrentPage: (page: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ setCurrentPage }) => {
  const packages = [
    {
      name: "Standard",
      price: "$75",
      emoji: "🎃",
      description: "Perfect for DIYers who want a charming fall display",
      features: [
        "6 Large Jack O Lanterns",
        "6 Medium Jack O Lanterns",
        "6 White Ghost Pumpkins",
        "Assortment of Pie Pumpkins",
        "8 Specialty Pumpkins",
        "2 Hay Bales",
        "Front porch drop-off included",
        "Design & layout NOT included",
        "Add design for $75 at checkout"
      ],
      popular: false,
      color: "orange"
    },
    {
      name: "Deluxe",
      price: "$125",
      emoji: "🎃🌾",
      description: "Most popular package with full setup and design",
      features: [
        "8 Large Jack O Lanterns",
        "8 Medium Jack O Lanterns",
        "8 White Ghost Pumpkins",
        "Assortment of Pie Pumpkins",
        "14 Specialty Pumpkins",
        "2 Hay Bales",
        "Ornamental Gourds",
        "Delivery & full design setup",
        "Mid-season refresh option"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Custom",
      price: "$175+",
      emoji: "🎃✨",
      description: "Tailored design with your preferred style & theme",
      features: [
        "Fully personalized pumpkin count & layout",
        "Custom theme and color palette",
        "Premium Louisiana elements",
        "Optional consultation",
        "Great for events or special occasions",
        "Front porch setup included",
        "Price varies based on design scope",
        "Free Shipping"
      ],
      popular: false,
      color: "purple"
    }
  ];

  const addOns = [
    { name: "Porch Lighting", price: "$25", description: "String lights or lanterns" },
    { name: "Welcome Sign", price: "$35", description: "Custom wooden fall sign" },
    { name: "Wreath & Door Decor", price: "$45", description: "Matching front door styling" },
    { name: "Mid-Season Refresh", price: "$40", description: "Update your display halfway through" },
    { name: "Thanksgiving Update", price: "$30", description: "Add Thanksgiving elements" },
    { name: "End-Season Cleanup", price: "$25", description: "We remove everything" }
  ];

  return (
    <div className="pt-8">
      <section className="bg-gradient-to-br from-orange-100 to-amber-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Packages</h1>
          <p className="text-xl text-gray-700 mb-8">
            From simple elegance to custom Louisiana magic - find the perfect fit for your porch
          </p>
          <div className="flex justify-center space-x-4 text-5xl">
            <span>🎃</span>
            <span>⚜️</span>
            <span>🌾</span>
            <span>🍂</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 p-8 ${
                  pkg.popular 
                    ? 'border-orange-300 transform scale-105' 
                    : 'border-gray-200 hover:border-orange-300'
                } transition-all duration-200 hover:shadow-2xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{pkg.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-3">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setCurrentPage('packages')}
                  className="w-full py-4 px-6 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 bg-orange-400 text-white hover:bg-orange-500"
                >
                  <span>Choose {pkg.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-600">Make your display even more special with these extras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-xl font-bold text-orange-600">{addon.price}</span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to add any of these to your package? Let us know when you book!
            </p>
            <button
              onClick={() => setCurrentPage('book-now')}
              className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors duration-200"
            >
              Book Now & Add Extras
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long do the displays last?</h3>
              <p className="text-gray-700">Our displays are designed to last the entire fall season (September through November). We use high-quality pumpkins and weather-resistant decorations.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What if I want changes after setup?</h3>
              <p className="text-gray-700">We're happy to make adjustments! Contact us within 24 hours of setup, and we'll work with you to make sure you love your display.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you provide your own pumpkins?</h3>
              <p className="text-gray-700">Yes! We source fresh, high-quality pumpkins from local Louisiana farms. All pumpkins and decorations are included in your package price.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What about weather damage?</h3>
              <p className="text-gray-700">We use weather-resistant materials, but Louisiana weather can be unpredictable! If severe weather damages your display, contact us and we'll make it right.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-orange-500 font-semibold hover:text-orange-600 text-lg"
            >
              Have more questions? Contact us →
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Choose Your Package?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of happy Baton Rouge families this fall season
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('book-now')}
              className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors duration-200"
            >
              Book Your Package Now
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
