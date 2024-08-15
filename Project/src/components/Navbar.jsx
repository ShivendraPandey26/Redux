import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">RTK Project</a>
          </div>

          {/* Nav Links and Cart Button */}
          <div className="flex items-center space-x-4">
            {/* Product Link */}
            <div className="hidden md:flex items-center">
              <a href="/products" className="text-gray-800 hover:text-blue-500 text-lg mx-5">
                Products
              </a>
            </div>

            {/* Cart Button */}
            <a href="/cart" className="bg-blue-500 text-white font-bold py-2 px-3 rounded-lg hover:bg-blue-700 flex items-center">
              <span className="text-xl px-2 font-serif">My Bag</span>
              <span className="text-2xl ml-2 font-sans">0</span> {/* Example cart item count */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
