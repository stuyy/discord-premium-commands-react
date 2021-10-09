import axios, { AxiosRequestConfig } from 'axios';
import { AuthenticatedUserResponseType } from './types';

const config: AxiosRequestConfig = {
  withCredentials: true,
};

export const createPaymentIntent = () =>
  axios.post('http://localhost:3001/api/payment-intents/create', {}, config);

export const getAuthStatus = () =>
  axios.get<AuthenticatedUserResponseType>(
    'http://localhost:3001/api/auth/status',
    config
  );

export const updatePremiumStatus = (premium: boolean) =>
  axios.put(
    'http://localhost:3001/api/user/premium/status',
    { premium },
    config
  );
