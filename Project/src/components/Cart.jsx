import React, { useState } from 'react';
import Layout from './Layout';

const Cart = () => {
  // Initial cart data (you can replace this with actual state or props)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 49.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-6">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-gray-800 mr-4">
                        ${item.price * item.quantity.toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Price */}
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center border-t pt-6 mt-6">
                <h2 className="text-xl font-bold text-gray-800">Total:</h2>
                <p className="text-xl font-bold text-gray-800">${totalPrice.toFixed(2)}</p>
              </div>
            )}

            {/* Checkout Button */}
            {cartItems.length > 0 && (
              <div className="mt-8 text-right">
                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
