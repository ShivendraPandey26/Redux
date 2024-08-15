import React, { useEffect, useState } from "react";
import Layout from "./Layout";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from API
    //     fetch('https://fakestoreapi.com/products')
    //    .then(response => response.json())
    //    .then(data => setProducts(data))
    //    .catch(error => console.error('Error:', error))

    // Fetch data from API
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
      // console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Layout>
        <h1 className="text-center text-5xl font-bold m-5">Products Dashboard</h1>
        {products.length === 0 ? (
          <div className="text-center my-20 text-5xl ">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Layout>
    </>
  );
}

export default Products;

// Render products
const ProductCard = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
    <img
      className="w-full h-48 object-contain"
      src={product.image}
      alt={product.title}
    />
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{product.title}</h2>
      <p className="text-lg font-semibold text-green-600 mb-2">
        Price: ${product.price}
      </p>
      <p className="text-gray-600 text-sm mb-4">Category: {product.category}</p>
      <div className="flex flex-col items-start justify-between">
        <div className="flex items-center">
          <p className="text-yellow-500 font-semibold">{product.rating.rate}</p>
          <span className="text-gray-600 ml-2">
            ({product.rating.count} reviews)
          </span>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mx-auto mt-3 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
