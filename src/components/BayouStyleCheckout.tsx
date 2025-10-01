import React, { useState } from 'react';
import { CreditCard, Lock, Shield, Truck, Star } from 'lucide-react';
import StripeCheckout from './StripeCheckout';

interface BayouStyleCheckoutProps {
  packageInfo: {
    id: string;
    name: string;
    price: string;
    originalPrice: string;
  };
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const BayouStyleCheckout: React.FC<BayouStyleCheckoutProps> = ({
  packageInfo,
  customerInfo,
  onSuccess,
  onError
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isRecurring, setIsRecurring] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const price = parseInt(packageInfo.price.replace('$', ''));
  const originalPrice = parseInt(packageInfo.originalPrice.replace('$', ''));
  const total = price * quantity;
  const savings = (originalPrice - price) * quantity;

  const handleAddToCart = () => {
    setShowPayment(true);
  };

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'American Express', icon: '💳' },
    { name: 'Discover', icon: '💳' },
    { name: 'PayPal', icon: '🅿️' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Google Pay', icon: 'G' },
    { name: 'Shop Pay', icon: 'S' }
  ];

  if (showPayment) {
    return (
      <StripeCheckout
        amount={total}
        customerInfo={customerInfo}
        packageInfo={{
          package: packageInfo.id,
          addOns: [],
          date: '',
          timePreference: 'morning',
          specialRequests: ''
        }}
        onSuccess={onSuccess}
        onError={onError}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      {/* Package Info */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{packageInfo.name}</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 line-through">{packageInfo.originalPrice}</span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">Sale</span>
          </div>
          <div className="text-3xl font-bold text-orange-600">{packageInfo.price}</div>
        </div>
        <p className="text-gray-600 text-sm">
          ✨ <em>The perfect starter set for creating a warm, welcoming porch this season.</em>
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors"
          >
            <span className="text-lg font-bold">-</span>
          </button>
          <span className="text-xl font-bold w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 transition-colors"
          >
            <span className="text-lg font-bold">+</span>
          </button>
        </div>
      </div>

      {/* Recurring Purchase Option */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="recurring"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="mt-1 h-4 w-4 text-orange-600"
          />
          <div>
            <label htmlFor="recurring" className="text-sm font-medium text-gray-700">
              This item is a recurring or deferred purchase
            </label>
            <p className="text-xs text-gray-500 mt-1">
              By continuing, I agree to the cancellation policy and authorize you to charge my payment method at the prices, frequency and dates listed on this page until my order is fulfilled or I cancel, if permitted.
            </p>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mb-8 p-4 bg-orange-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
          <span className="text-lg font-semibold">${total}</span>
        </div>
        {savings > 0 && (
          <div className="flex justify-between items-center text-green-600">
            <span className="text-sm">You save:</span>
            <span className="text-sm font-semibold">${savings}</span>
          </div>
        )}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-orange-600">${total}</span>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 px-6 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2 mb-6"
      >
        <span>Add to Cart</span>
        <span>Added</span>
      </button>

      {/* Security & Trust Indicators */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
          <Shield className="w-4 h-4" />
          <span>Safe & Secure Checkout</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Payment methods</h4>
        <div className="grid grid-cols-4 gap-2">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-center p-2 border border-gray-200 rounded text-xs">
              {method.icon} {method.name}
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="border-t pt-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600">12 reviews</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-orange-800">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Alyssa M.</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            "Honestly, I was worried it would be another thing to manage, but it was the exact opposite. They handled everything, and it was so quick and easy. If you're on the fence, just do it. You'll be glad you did."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BayouStyleCheckout;
