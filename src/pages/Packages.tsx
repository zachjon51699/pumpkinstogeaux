import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PackagesProps {
  setCurrentPage: (page: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ setCurrentPage }) => {
  const packages = [
    {
      name: "Standard",
      price: "$525",
      emoji: "🎃",
      description: "Perfect starter package for classic fall charm",
      features: [
        "Free Shipping",
        "6 Large Jack O Lanterns, 6 Medium Jack O Lanterns",
        "6 White Ghost Pumpkins, an assortment of Pie Pumpkins",
        "8 Specialty Pumpkins and 2 Hay Bales",
        "Does not include design and layout",
        "Front porch drop off included"
      ],
      images: [
        "/images/standard-1.png",
        "/images/standard-2.png",
        "/images/standard-3.png"
      ],
      popular: false,
      color: "orange"
    },
    {
      name: "Deluxe",
      price: "$800",
      emoji: "🎃🌾",
      description: "Our most popular package with Louisiana flair",
      features: [
        "Free Shipping",
        "8 Large Jack O Lanterns, 8 Medium Jack O Lanterns",
        "8 White Ghost Pumpkins, an assortment of Pie Pumpkins",
        "14 Specialty Pumpkins, 2 Hay Bales and Ornamental Gourds",
        "Includes design and set up"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Custom",
      price: "$1200",
      emoji: "🎃✨",
      description: "Completely personalized for your unique style",
      features: [
        "Free Shipping",
        "2 Grand Prize Pumpkins, 10 Large Jack O Lanterns",
        "8 Medium Jack O Lanterns, 8 White Ghost Pumpkins",
        "An assortment of Pie Pumpkins, 16 Specialty Pumpkins",
        "Mini Orange Pumpkins, Mini White Pumpkins",
        "3 Hay Bales and Ornamental Gourds",
        "Includes design and set up"
      ],
      popular: false,
      color: "purple"
    }
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

                {pkg.images && (
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {pkg.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt={`Package ${pkg.name} ${imgIndex + 1}`} className="rounded-lg w-full" />
                    ))}
                  </div>
                )}

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

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our packages and services
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Do you deliver to my area?</h3>
              <p className="text-gray-700">We currently serve the Greater Baton Rouge area. If you're unsure, just reach out and we'll confirm!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">When will my pumpkins be delivered?</h3>
              <p className="text-gray-700">We coordinate delivery times with you after booking. We aim for timely delivery in early fall and can accommodate custom dates for events.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Can I customize my package?</h3>
              <p className="text-gray-700">Absolutely! Our Custom package is fully customizable. For Standard and Deluxe, you can also add-on extras or tweak a few details.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">How long do the pumpkins last?</h3>
              <p className="text-gray-700">Most pumpkins last 4–8 weeks depending on weather and sun exposure. We also offer mid-season refresh options!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
