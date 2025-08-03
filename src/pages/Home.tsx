import React from 'react';
import { ArrowRight, Truck, Paintbrush, Clock, Star } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivered & Styled",
      description: "We bring everything to you and set up your perfect porch display"
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Custom Designs",
      description: "Choose from our packages or create a custom look just for you"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Seasonal Service",
      description: "Perfect timing for fall - we handle setup and seasonal refresh"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Baton Rouge",
      text: "Absolutely gorgeous! They transformed our front porch into a fall wonderland. The neighbors keep asking where we got it done!",
      rating: 5
    },
    {
      name: "Mike & Lisa T.",
      location: "Prairieville",
      text: "These ladies know what they're doing! Professional, creative, and brought that perfect Louisiana fall vibe to our home.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-100 to-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Bring Fall to Your 
                <span className="text-orange-400"> Front Porch</span>
              </h1>
              <p className="text-xl mb-8 text-orange-700">
                Professional pumpkin displays delivered and styled right on your porch. 
                Mama-owned local business serving Greater Baton Rouge with Louisiana charm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('book-now')}
                  className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Reserve Your Pumpkins Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPage('how-it-works')}
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 transition-colors duration-200"
                >
                  How It Works
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-orange-50 rounded-2xl p-4 text-center shadow">
                <img 
                  src="/images/your-image-file-name.png" 
                  alt="Pumpkin display on porch" 
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
                <div className="mt-6 flex justify-center space-x-4 text-4xl">
                  <span>🍂</span>
                  <span>⚜️</span>
                  <span>🌾</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Pumpkins to Geaux?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just delivering pumpkins - we're bringing the magic of Louisiana fall right to your front door
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
