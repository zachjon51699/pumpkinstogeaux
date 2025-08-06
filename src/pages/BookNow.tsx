import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    package: 'mini',
    date: '',
    timePreference: 'morning',
    addOns: [] as string[],
    specialRequests: '',
    referral: ''
  });

  const packages = [
    { id: 'mini', name: 'Mini Package', price: '$325' },
    { id: 'standard', name: 'Standard Package', price: '$525' },
    { id: 'deluxe', name: 'Deluxe Package', price: '$800' },
    { id: 'custom', name: 'Custom Package', price: '$1200' }
  ];

  const addOns = [
    { id: 'design', name: 'Design and Layout', price: '$75' },
    { id: 'haybale', name: 'Haybale', price: '$35' },
    { id: 'removal', name: 'Removal and Disposal', price: '$75' },
    { id: 'backyard', name: 'Backyard Set Up', price: '$75' }
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
      mini: 325,
      standard: 525,
      deluxe: 800,
      custom: 1200
    };

    const addOnPrices: { [key: string]: number } = {
      design: 75,
      haybale: 35,
      removal: 75,
      backyard: 75
    };

    const packagePrice = packagePrices[formData.package] || 0;
    const addOnsPrice = formData.addOns.reduce((total, addOnId) => {
      return total + (addOnPrices[addOnId] || 0);
    }, 0);

    return packagePrice + addOnsPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your booking request! We'll contact you within 24 hours to confirm your appointment.");
    console.log('Form submitted:', formData);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-8">
      <section className="bg-gradient-to-br from-orange-400 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Porch Display</h1>
          <p className="text-xl text-orange-100 mb-8">Ready to bring fall magic to your front door? Let's get started!</p>
          <div className="flex justify-center space-x-4 text-4xl">
            <span>🎃</span>
            <span>📅</span>
            <span>✨</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                  <input type="text" id="referral" name="referral" value={formData.referral} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                  <input type="text" id="address" name="address" required value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          {pkg.id === 'mini' && '🎃🍁'}
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

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add-On Services</h2>
              <div className="space-y-4">
                {addOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-center justify-between">
                    <label htmlFor={addOn.id} className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id={addOn.id}
                        checked={formData.addOns.includes(addOn.id)}
                        onChange={() => handleAddOnChange(addOn.id)}
                        className="h-5 w-5 text-orange-600"
                      />
                      <span className="text-lg text-gray-800">{addOn.name}</span>
                    </label>
                    <span className="text-lg font-semibold text-gray-900">{addOn.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferred Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Install Date *</label>
                  <input type="date" id="date" name="date" required min={today} value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="timePreference" className="block text-sm font-medium text-gray-700 mb-2">Time of Day</label>
                  <select id="timePreference" name="timePreference" value={formData.timePreference} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option value="morning">Morning (8am–11am)</option>
                    <option value="afternoon">Afternoon (12pm–3pm)</option>
                    <option value="evening">Evening (4pm–7pm)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
              <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            </div>

            <div className="text-right">
              <p className="text-lg text-gray-800 mb-4"><strong>Estimated Total:</strong> ${calculateTotal()}</p>
              <button type="submit" className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700">Book Now</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
