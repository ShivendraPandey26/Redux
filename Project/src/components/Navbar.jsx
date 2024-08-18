import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              RTK Project
            </Link>
          </div>

          {/* Nav Links and Cart Button */}
          <div className="flex items-center space-x-4">
            {/* Product Link */}
            <div className="hidden md:flex items-center">
              <Link
                to="/products"
                className="text-gray-800 hover:text-blue-500 text-lg"
              >
                Products
              </Link>
            </div>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <span className="text-lg font-serif">My Bag</span>
              <span className="text-lg font-sans bg-blue-600 rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
