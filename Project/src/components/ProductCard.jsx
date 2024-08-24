import React from 'react'

function ProductCard() {
  return (
    <>
    // Render products
  const ProductCard = ({ product }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-lg font-semibold text-green-600 mb-2">
          Price: ${product.price}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Category: {product.category}
        </p>
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center">
            <p className="text-yellow-500 font-semibold">
              {product.rating.rate}
            </p>
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
    </>
  )
}

export default ProductCard