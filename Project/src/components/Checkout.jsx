// Checkout.js
import React from 'react';
import Layout from './Layout';

const Checkout = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
          <p className="text-gray-600">Here you can implement your checkout process or integrate with a payment gateway.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
