import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      images: ["/images/standard-1.png", "/images/standard-2.png", "/images/standard-3.png"],
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
        "Assortment of Pie Pumpkins, 16 Specialty Pumpkins",
        "Mini Orange & White Pumpkins, 3 Hay Bales",
        "Ornamental Gourds, Includes design and set up"
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="pt-8">
      <section className="bg-gradient-to-br from-orange-100 to-amber-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Packages</h1>
          <p className="text-xl text-gray-700 mb-8">
            From simple elegance to custom Louisiana magic - find the perfect fit for your porch
          </p>
          <div className="flex justify-center space-x-4 text-5xl">
            <span>🎃</span><span>⚜️</span><span>🌾</span><span>🍂</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 p-8 ${pkg.popular ? 'border-orange-300 transform scale-105' : 'border-gray-200 hover:border-orange-300'} transition-all duration-200 hover:shadow-2xl`}
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
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  {/* Only show carousel if package has images */}
                  {pkg.images && (
                    <Slider {...sliderSettings}>
                      {pkg.images.map((src, idx) => (
                        <div key={idx}>
                          <img src={src} alt={`Package ${pkg.name} ${idx + 1}`} className="rounded-xl w-full h-64 object-cover mb-4" />
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
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

      {/* Add-Ons */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">How long do the pumpkins last?</h3>
              <p className="text-gray-700">Most of our pumpkins last the entire fall season, especially if kept out of direct sunlight and extreme heat. We also offer a mid-season refresh add-on if needed!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Do you deliver outside Baton Rouge?</h3>
              <p className="text-gray-700">We primarily serve Greater Baton Rouge but can accommodate nearby areas – contact us before booking and we’ll try to make it work!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Can I customize my display?</h3>
              <p className="text-gray-700">Absolutely! Choose a custom package or add design services at checkout. We're happy to work with your ideas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
