import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CreditCard, Lock } from 'lucide-react';

interface StripeCheckoutProps {
  amount: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  packageInfo: {
    package: string;
    addOns: string[];
    date: string;
    timePreference: string;
    specialRequests: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  amount,
  customerInfo,
  packageInfo,
  onSuccess,
  onError
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment method
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          address: {
            line1: customerInfo.address,
            city: customerInfo.city,
            country: 'US',
          },
        },
      });

      if (error) {
        onError(error.message || 'Payment failed');
        return;
      }

      // In a real application, you would send the payment method to your backend
      // and create a payment intent. For now, we'll simulate success.
      console.log('Payment method created:', paymentMethod);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onSuccess();
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <Lock className="w-6 h-6 text-green-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Secure Payment</h3>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
          <span className="text-2xl font-bold text-orange-600">${amount}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <CreditCard className="w-4 h-4 inline mr-1" />
            Card Information
          </label>
          <div className="p-4 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full py-4 px-6 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </>
          ) : (
            <>
              <Lock className="w-5 h-5 mr-2" />
              Pay ${amount}
            </>
          )}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default StripeCheckout;
