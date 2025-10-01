import React, { useState } from 'react';
import { Check, Star, ArrowRight, X } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PackagesProps {
  setCurrentPage: (page: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ setCurrentPage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const packages = [
    {
      name: "Starter",
      price: "$245",
      originalPrice: "$285",
      emoji: "🎃🍂",
      description: "Perfect entry-level package for those wanting a beautiful fall display",
      features: [
        "4 Large Jack-O-Lanterns",
        "4 Medium Jack-O-Lanterns", 
        "6 White Ghost Pumpkins",
        "4 Pie Pumpkins",
        "6 Specialty Pumpkins",
        "8 Assorted Mini Pumpkins & Gourds",
        "Hand-selected for quality and color",
        "Free delivery and setup"
      ],
      images: ["/images/mini-1.png", "/images/pumpkin-porch.png"],
      popular: false,
      color: "amber",
      onSale: true
    },
    {
      name: "Mini",
      price: "$395",
      originalPrice: "$485",
      emoji: "🎃🍁",
      description: "Great for smaller porches or DIYers who want just a touch of fall",
      features: [
        "6 Large Jack-O-Lanterns",
        "6 Medium Jack-O-Lanterns",
        "8 White Ghost Pumpkins", 
        "6 Pie Pumpkins",
        "10 Specialty Pumpkins",
        "12 Assorted Mini Pumpkins & Gourds",
        "2 Hay Bales",
        "Professional design and setup"
      ],
      images: ["/images/mini-2.png"],
      popular: false,
      color: "yellow",
      onSale: true
    },
    {
      name: "Standard",
      price: "$525",
      originalPrice: "$600",
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
      color: "orange",
      onSale: true
    },
    {
      name: "Deluxe",
      price: "$800",
      originalPrice: "$815",
      emoji: "🎃🌾",
      description: "Our most popular package with Louisiana flair and premium styling",
      features: [
        "8 Large Jack-O-Lanterns",
        "8 Medium Jack-O-Lanterns",
        "10 White Ghost Pumpkins",
        "8 Pie Pumpkins", 
        "14 Specialty Pumpkins",
        "16 Assorted Mini Pumpkins & Gourds",
        "2 Hay Bales and Ornamental Gourds",
        "Professional design and setup"
      ],
      images: ["/images/deluxe-1.png", "/images/deluxe-2.png", "/images/deluxe-3.png"],
      popular: true,
      color: "green",
      onSale: true
    },
    {
      name: "Custom",
      price: "$1000",
      originalPrice: "$1295",
      emoji: "🎃✨",
      description: "Completely personalized for your unique style with premium pumpkins",
      features: [
        "2 Grand Prize Pumpkins",
        "10 Large Jack-O-Lanterns",
        "8 Medium Jack-O-Lanterns",
        "8 White Ghost Pumpkins",
        "Assortment of Pie Pumpkins",
        "16 Specialty Pumpkins",
        "Mini Orange & White Pumpkins",
        "3 Hay Bales and Ornamental Gourds",
        "Custom design and setup"
      ],
      images: ["/images/custom-1.png", "/images/custom-2.png"],
      popular: true,
      color: "purple",
      onSale: true
    }
  ];

  return (
    <div className="pt-8">
      <section className="relative bg-gradient-to-br from-orange-100 to-white text-gray-900 py-20">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 p-8 ${pkg.popular ? 'border-orange-300 transform scale-[1.02]' : 'border-gray-200 hover:border-orange-300'} transition-all duration-200 hover:shadow-2xl`}
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
                  <div className="mb-3">
                    {pkg.onSale && (
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">Sale</span>
                      </div>
                    )}
                    <div className="text-4xl font-bold text-orange-600">{pkg.price}</div>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  {pkg.images && pkg.images.length > 0 && (
                    pkg.images.length === 1 ? (
                      <img
                        src={pkg.images[0]}
                        alt={`Package ${pkg.name}`}
                        className="rounded-xl w-full h-[30rem] object-cover mb-4 cursor-pointer"
                        onClick={() => setSelectedImage(pkg.images[0])}
                      />
                    ) : (
                      <Slider {...sliderSettings}>
                        {pkg.images.map((src, idx) => (
                          <div key={idx}>
                            <img
                              src={src}
                              alt={`Package ${pkg.name} ${idx + 1}`}
                              className="rounded-xl w-full h-[30rem] object-cover mb-4 cursor-pointer"
                              onClick={() => setSelectedImage(src)}
                            />
                          </div>
                        ))}
                      </Slider>
                    )
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

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors">
                      <span className="text-lg font-bold">-</span>
                    </button>
                    <span className="text-xl font-bold w-8 text-center">1</span>
                    <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors">
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                  <button
                    onClick={() => setCurrentPage('book-now')}
                    className="w-full py-4 px-6 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 bg-orange-400 text-white hover:bg-orange-500"
                  >
                    <span>Add to Cart</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
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

      {/* Fullscreen Modal with Close Button */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Packages;
