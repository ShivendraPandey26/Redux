import React from 'react';
import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Hero Section */}
          <section className="text-center bg-white rounded-lg shadow-lg p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to RTK Project</h1>
            <p className="text-lg text-gray-600">
              Your one-stop solution for all your product needs. Explore our wide range of products and find what you love!
            </p>
            <div className="mt-8">
              <a
                href="/products"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Shop Now
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">High Quality Products</h2>
              <p className="text-gray-600">
                We ensure that all our products meet the highest quality standards. Shop with confidence!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Affordable Prices</h2>
              <p className="text-gray-600">
                Get the best deals and prices on the market. Quality doesn't have to be expensive!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h2>
              <p className="text-gray-600">
                Enjoy quick and reliable delivery services. Your products will reach you in no time.
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About RTK Project</h2>
            <p className="text-gray-600 leading-relaxed">
              At RTK Project, we are dedicated to providing our customers with the best shopping experience possible. Our
              mission is to offer high-quality products at competitive prices, coupled with excellent customer service. We
              believe in building long-term relationships with our customers by offering products that enhance their lives
              and meet their needs.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you are looking for the latest trends, classic styles, or everyday essentials, RTK Project has
              something for everyone. Thank you for choosing us as your trusted shopping partner.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
