import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
// For development, you can use the test key that starts with pk_test_
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here');

export default stripePromise;
