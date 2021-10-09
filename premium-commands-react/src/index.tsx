import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51HAZJXANztZLfIGW6Hk1LaDL61qvapP70ysR0nBodi9ErmSxiYK4i8sYxlkCVG3KyRv09QCDc1VKu8SKHRlgQuxp00SKOQBGhK'
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Router>
        <App />
      </Router>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
