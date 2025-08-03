import React from 'react';
import { Camera, MapPin, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Classic Fall Display",
      location: "Mid City, Baton Rouge",
      package: "Standard Package",
      image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
    },
    {
      id: 2,
      title: "Deluxe Autumn Setup",
      location: "Garden District",
      package: "Deluxe Package",
      image: "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg"
    },
    {
      id: 3,
      title: "Custom Halloween Theme",
      location: "Southdowns",
      package: "Custom Package",
      image: "https://images.pexels.com/photos/1402791/pexels-photo-1402791.jpeg"
    },
    {
      id: 4,
      title: "Harvest Elegance",
      location: "Spanish Town",
      package: "Deluxe Package",
      image: "https://images.pexels.com/photos/1402788/pexels-photo-1402788.jpeg"
    },
    {
      id: 5,
      title: "Cozy Porch Vibes",
      location: "Old South Baton Rouge",
      package: "Standard Package",
      image: "https://images.pexels.com/photos/1402789/pexels-photo-1402789.jpeg"
    },
    {
      id: 6,
      title: "Premium Fall Showcase",
      location: "Bocage",
      package: "Custom Package",
      image: "https://images.pexels.com/photos/1402792/pexels-photo-1402792.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Porch Transformations
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            See how we bring fall magic to front porches across Baton Rouge. 
            Each display is custom-styled to complement your home's unique character.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.package === 'Standard Package' ? 'bg-orange-400 text-white' :
                    item.package === 'Deluxe Package' ? 'bg-amber-400 text-white' :
                    'bg-yellow-500 text-gray-800'
                  }`}>
                    {item.package}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{item.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-medium">
                  <span className="text-orange-500 font-medium">
                    View Details
                  </span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready for Your Porch Transformation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing family of satisfied customers across Baton Rouge. 
            Let us bring the magic of fall to your front door!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
            <button className="w-full sm:w-auto bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-200">
              Book Your Display
            </button>
            <button className="w-full sm:w-auto border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors duration-200">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "The sisters at Pumpkins to Geaux transformed our plain porch into a fall wonderland! 
                Our neighbors keep asking where we got such a beautiful display."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-700 font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Marie Johnson</p>
                  <p className="text-sm text-gray-600">Garden District</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "So convenient and professional! They set everything up perfectly and even cleaned up after. 
                Will definitely book again next year!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-amber-700 font-bold">TR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Tom Rodriguez</p>
                  <p className="text-sm text-gray-600">Mid City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;