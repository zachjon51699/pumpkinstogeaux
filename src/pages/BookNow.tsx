import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, CreditCard } from 'lucide-react';
import BayouStyleCheckout from '../components/BayouStyleCheckout';

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryArea: '',
    package: 'starter',
    date: '',
    timePreference: 'morning',
    addOns: [] as string[],
    removalWeek: '',
    haybaleQuantity: 1,
    specialRequests: '',
    referral: ''
  });
  
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [paymentError, setPaymentError] = useState('');

  const packages = [
    { id: 'starter', name: 'Starter Package', price: '$245', originalPrice: '$285' },
    { id: 'mini', name: 'Mini Package', price: '$395', originalPrice: '$485' },
    { id: 'standard', name: 'Standard Package', price: '$525', originalPrice: '$600' },
    { id: 'deluxe', name: 'Deluxe Package', price: '$800', originalPrice: '$815' },
    { id: 'custom', name: 'Custom Package', price: '$1000', originalPrice: '$1295' }
  ];

  const deliveryAreas = [
    { id: 'free', name: 'Free Delivery Zone', description: 'Greater Baton Rouge area', fee: 0 },
    { id: 'standard', name: 'Standard Delivery Zone', description: 'Louisiana Northshore and surrounding areas', fee: 25 },
    { id: 'extended', name: 'Extended Delivery Zone', description: 'Greater New Orleans and extended areas', fee: 50 }
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
      addOns: updatedAddOns,
      // Clear removal week if removal add-on is unchecked
      removalWeek: addOnId === 'removal' && !updatedAddOns.includes('removal') ? '' : formData.removalWeek,
      // Reset haybale quantity if haybale add-on is unchecked
      haybaleQuantity: addOnId === 'haybale' && !updatedAddOns.includes('haybale') ? 1 : formData.haybaleQuantity
    });
  };

  const calculateTotal = () => {
    const packagePrices: { [key: string]: number } = {
      'starter': 245,
      'mini': 395,
      'standard': 525,
      'deluxe': 800,
      'custom': 1000
    };

    const addOnPrices: { [key: string]: number } = {
      design: 75,
      haybale: 35,
      removal: 75,
      backyard: 75
    };

    const packagePrice = packagePrices[formData.package] || 0;
    const addOnsPrice = formData.addOns.reduce((total, addOnId) => {
      const basePrice = addOnPrices[addOnId] || 0;
      // Multiply haybale price by quantity
      if (addOnId === 'haybale') {
        return total + (basePrice * formData.haybaleQuantity);
      }
      return total + basePrice;
    }, 0);

    const deliveryFee = deliveryAreas.find(area => area.id === formData.deliveryArea)?.fee || 0;

    return packagePrice + addOnsPrice + deliveryFee;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPkg = packages.find(p => p.id === formData.package);
    if (selectedPkg) {
      setSelectedPackage(selectedPkg);
      setShowCheckout(true);
      setPaymentError('');
    }
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful! Thank you for your booking. We'll contact you within 24 hours to confirm your appointment.");
    console.log('Booking completed:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      deliveryArea: '',
      package: 'starter',
      date: '',
      timePreference: 'morning',
      addOns: [],
      removalWeek: '',
      haybaleQuantity: 1,
      specialRequests: '',
      referral: ''
    });
    setShowCheckout(false);
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
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

      {/* Image section with adjusted desktop width */}
      <section className="w-full flex justify-center bg-white">
        <img
          src="/images/book-now-banner.png"
          alt="Book Now Display"
          className="w-full max-w-5xl h-auto object-cover"
        />
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Area</h2>
              <div className="space-y-4">
                {deliveryAreas.map((area) => (
                  <div key={area.id} className="relative">
                    <input
                      type="radio"
                      id={area.id}
                      name="deliveryArea"
                      value={area.id}
                      checked={formData.deliveryArea === area.id}
                      onChange={handleInputChange}
                      className="sr-only"
                      required
                    />
                    <label
                      htmlFor={area.id}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.deliveryArea === area.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 bg-white hover:border-orange-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{area.name}</h3>
                          <p className="text-gray-600">{area.description}</p>
                        </div>
                        <div className="text-right">
                          {area.fee === 0 ? (
                            <span className="text-green-600 font-bold text-lg">FREE</span>
                          ) : (
                            <span className="text-orange-600 font-bold text-lg">+${area.fee}</span>
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
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
                          {pkg.id === 'starter' && '🎃🍂'}
                          {pkg.id === 'mini' && '🎃🍁'}
                          {pkg.id === 'standard' && '🎃'}
                          {pkg.id === 'deluxe' && '🎃🌾'}
                          {pkg.id === 'custom' && '🎃✨'}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{pkg.name}</h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 line-through">{pkg.originalPrice}</p>
                          <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                        </div>
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
                  <div key={addOn.id} className="space-y-2">
                    <div className="flex items-center justify-between">
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
                    {addOn.id === 'removal' && formData.addOns.includes('removal') && (
                      <div className="ml-9">
                        <label htmlFor="removalWeek" className="block text-sm font-medium text-gray-700 mb-2">
                          Select Removal Week
                        </label>
                        <select
                          id="removalWeek"
                          name="removalWeek"
                          value={formData.removalWeek}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          required
                        >
                          <option value="">Select a removal week</option>
                          <option value="week1">Week 1: October 20-26</option>
                          <option value="week2">Week 2: October 27 - November 2</option>
                          <option value="week3">Week 3: November 3-9</option>
                          <option value="week4">Week 4: November 10-16</option>
                        </select>
                      </div>
                    )}
                    {addOn.id === 'haybale' && formData.addOns.includes('haybale') && (
                      <div className="ml-9">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity
                        </label>
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            onClick={() => setFormData({...formData, haybaleQuantity: Math.max(1, formData.haybaleQuantity - 1)})}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors"
                          >
                            <span className="text-lg font-bold">-</span>
                          </button>
                          <span className="text-lg font-bold w-8 text-center">{formData.haybaleQuantity}</span>
                          <button
                            type="button"
                            onClick={() => setFormData({...formData, haybaleQuantity: formData.haybaleQuantity + 1})}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Week</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Week *</label>
                  <select id="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option value="">Select a delivery week</option>
                    <option value="week1">Week 1: September 22-28</option>
                    <option value="week2">Week 2: September 29 - October 5</option>
                    <option value="week3">Week 3: October 6-12</option>
                    <option value="week4">Week 4: October 13-19</option>
                  </select>
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
              <button type="submit" className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bayou Style Checkout Section */}
      {showCheckout && selectedPackage && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Order</h2>
              <p className="text-lg text-gray-600">Review your package and complete payment</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customer Information Summary */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Details</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold">{formData.phone}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Area:</span>
                    <span className="font-semibold">{deliveryAreas.find(area => area.id === formData.deliveryArea)?.name}</span>
                  </div>
                  
                  {formData.addOns.length > 0 && (
                    <div>
                      <span className="text-gray-600">Add-ons:</span>
                      <ul className="mt-2 space-y-1">
                        {formData.addOns.map(addOnId => {
                          const addOn = addOns.find(a => a.id === addOnId);
                          return (
                            <li key={addOnId} className="flex justify-between text-sm">
                              <span>
                                {addOn?.name}
                                {addOnId === 'removal' && formData.removalWeek && (
                                  <span className="text-gray-500 ml-1">
                                    ({formData.removalWeek.replace('week', 'Week ').replace(/(\d+)/, '$1: ')})
                                  </span>
                                )}
                                {addOnId === 'haybale' && formData.haybaleQuantity > 1 && (
                                  <span className="text-gray-500 ml-1">
                                    (Qty: {formData.haybaleQuantity})
                                  </span>
                                )}
                              </span>
                              <span>
                                {addOnId === 'haybale' && formData.haybaleQuantity > 1 
                                  ? `$${35 * formData.haybaleQuantity}` 
                                  : addOn?.price
                                }
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Week:</span>
                    <span className="font-semibold">{formData.date}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Preference:</span>
                    <span className="font-semibold capitalize">{formData.timePreference}</span>
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="border-t pt-4">
                    <span className="text-gray-600">Special Requests:</span>
                    <p className="text-sm text-gray-700 mt-1">{formData.specialRequests}</p>
                  </div>
                )}
              </div>

              {/* Bayou Style Checkout */}
              <BayouStyleCheckout
                packageInfo={selectedPackage}
                customerInfo={{
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  address: '',
                  city: ''
                }}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>

            {paymentError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-center">{paymentError}</p>
              </div>
            )}

            <div className="text-center mt-8">
              <button
                onClick={() => setShowCheckout(false)}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                ← Back to form
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookNow;
