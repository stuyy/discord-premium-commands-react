import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';
import { createPaymentIntent, updatePremiumStatus } from '../utils/api';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      throw new Error('Stripe has not loaded');
    }
    const card = elements.getElement(CardElement);
    if (!card) throw new Error('Card Elements Not Found');
    try {
      const { data }: { data: any } = await createPaymentIntent();
      const { client_secret } = data;
      console.log(client_secret);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: {
            card,
          },
        }
      );
      if (error) throw error;
      await updatePremiumStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              color: '#fff',
            },
          },
        }}
      />
      <button>Pay</button>
    </form>
  );
};
