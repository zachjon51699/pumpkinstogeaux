import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    package: 'deluxe',
    date: '',
    timePreference: 'morning',
    addOns: [] as string[],
    specialRequests: '',
    referral: ''
  });

  const packages = [
    { id: 'standard', name: 'Standard Package', price: '$525' },
    { id: 'deluxe', name: 'Deluxe Package', price: '$800' },
    { id: 'custom', name: 'Custom Package', price: '$1200' }
  ];

  const addOns = [
    { id: 'lighting', name: 'Porch Lighting', price: '$25' },
    { id: 'sign', name: 'Welcome Sign', price: '$35' },
    { id: 'wreath', name: 'Wreath & Door Decor', price: '$45' },
    { id: 'refresh', name: 'Mid-Season Refresh', price: '$40' },
    { id: 'thanksgiving', name: 'Thanksgiving Update', price: '$30' },
    { id: 'cleanup', name: 'End-Season Cleanup', price: '$25' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddOnChange = (addOnId: string) => {
    const updatedAddOns = formData.addOns.includes(addOnId)
      ? formData.addOns.filter(id => id !== addOnId)
      : [...formData.addOns, addOnId];
    
    setFormData({
      ...formData,
      addOns: updatedAddOns
    });
  };

  const calculateTotal = () => {
    const packagePrices: { [key: string]: number } = {
      standard: 75,
      deluxe: 125,
      custom: 175
    };

    const addOnPrices: { [key: string]: number } = {
      lighting: 25,
      sign: 35,
      wreath: 45,
      refresh: 40,
      thanksgiving: 30,
      cleanup: 25
    };

    const packagePrice = packagePrices[formData.package] || 0;
    const addOnsPrice = formData.addOns.reduce((total, addOnId) => {
      return total + (addOnPrices[addOnId] || 0);
    }, 0);

    return packagePrice + addOnsPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your booking request! We\'ll contact you within 24 hours to confirm your appointment.');
    console.log('Form submitted:', formData);
  };

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Porch Display</h1>
          <p className="text-xl text-orange-100 mb-8">
            Ready to bring fall magic to your front door? Let's get started!
          </p>
          <div className="flex justify-center space-x-4 text-4xl">
            <span>🎃</span>
            <span>📅</span>
            <span>✨</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="(225) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select one</option>
                    <option value="friend">Friend/Family Referral</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="google">Google Search</option>
                    <option value="neighbor">Saw neighbor's display</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                Delivery Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select City</option>
                    <option value="baton-rouge">Baton Rouge</option>
                    <option value="prairieville">Prairieville</option>
                    <option value="gonzales">Gonzales</option>
                    <option value="denham-springs">Denham Springs</option>
                    <option value="walker">Walker</option>
                    <option value="baker">Baker</option>
                    <option value="zachary">Zachary</option>
                    <option value="central">Central</option>
                    <option value="geismar">Geismar</option>
                    <option value="st-amant">St. Amant</option>
                    <option value="other">Other (please specify in special requests)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="relative">
                    <input
                      type="radio"
                      id={pkg.id}
                      name="package"
                      value={pkg.id}
                      checked={formData.package === pkg.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor={pkg.id}
                      className={`block p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.package === pkg.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 bg-white hover:border-orange-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {pkg.id === 'standard' && '🎃'}
                          {pkg.id === 'deluxe' && '🎃🌾'}
                          {pkg.id === 'custom' && '🎃✨'}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{pkg.name}</h3>
                        <p className="text-2xl font-bold text-orange-600 mt-2">{pkg.price}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-orange-600 mr-3" />
                Preferred Date & Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={today}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <p className="text-sm text-gray-600 mt-1">We recommend booking 2-3 days in advance</p>
                </div>
                <div>
                  <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Time Preference
                  </label>
                  <select
                    id="timePreference"
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Add-Ons */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add-On Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addon) => (
                  <div key={addon.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={addon.id}
                      checked={formData.addOns.includes(addon.id)}
                      onChange={() => handleAddOnChange(addon.id)}
                      className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor={addon.id} className="flex-1 text-gray-700">
                      <span className="font-medium">{addon.name}</span>
                      <span className="text-orange-600 font-bold ml-2">{addon.price}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Requests</h2>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Any special color preferences, themes, or specific requests? Let us know!"
              />
            </div>

            {/* Order Summary */}
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {packages.find(p => p.id === formData.package)?.name}
                  </span>
                  <span className="font-semibold">
                    {packages.find(p => p.id === formData.package)?.price}
                  </span>
                </div>
                {formData.addOns.map(addOnId => {
                  const addon = addOns.find(a => a.id === addOnId);
                  return addon ? (
                    <div key={addOnId} className="flex justify-between items-center text-gray-600">
                      <span>{addon.name}</span>
                      <span>{addon.price}</span>
                    </div>
                  ) : null;
                })}
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                  <span>Total Estimate:</span>
                  <span className="text-orange-500">
                    {formData.package === 'custom' ? `$${calculateTotal()}+` : `$${calculateTotal()}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-400 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-orange-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </button>
              <p className="text-gray-600 mt-4">
                We'll contact you within 24 hours to confirm your appointment and collect payment
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions? We're Here to Help!</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">(225) 555-GOAUX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">hello@pumpkinstogeaux.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">Mon-Sat 8am-6pm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;