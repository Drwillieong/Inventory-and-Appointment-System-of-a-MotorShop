import React from "react";

const MotorShopPOS = () => {
  const categories = [
    "All", "Brake System", "Engine Parts", "Lubricants", "Battery", "Transmission", "Filters"
  ];

  const popularProducts = [
    { name: "Brake Pads", quantity: 10, category: "Brake System", image: "https://via.placeholder.com/150" },
    { name: "Motor Oil", quantity: 25, category: "Lubricants", image: "https://via.placeholder.com/150" },
    { name: "Spark Plug", quantity: 50, category: "Engine Parts", image: "https://via.placeholder.com/150" },
    { name: "Air Filter", quantity: 20, category: "Filters", image: "https://via.placeholder.com/150" },
    { name: "Chain Kit", quantity: 5, category: "Transmission", image: "https://via.placeholder.com/150" },
    { name: "Motolite Battery", quantity: 15, category: "Battery", image: "https://via.placeholder.com/150" }
  ];

  const cartItems = [
    { name: "Brake Pads", qty: 1, price: 200 },
    { name: "Motor Oil", qty: 2, price: 300 },
    { name: "Spark Plug", qty: 1, price: 450 },
    { name: "Oil Change Service", qty: 1, price: 500 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section - Product Selection */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <h1 className="text-2xl font-semibold">Order Motor Parts</h1>
          <input
            type="text"
            placeholder="Search parts..."
            className="p-2 border rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Popular Products Section */}
        <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {popularProducts.map((product, index) => (
           <div
           key={index}
           className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between h-full"
         >
           <div>
             <img src={product.image} alt={product.name} className="w-full rounded-lg mb-2" />
             <h3 className="font-semibold text-lg">{product.name}</h3>
             <p className="text-sm text-gray-500">Quantity: {product.quantity} | {product.category}</p>
           </div>
           
           <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
             Add to Cart
           </button>
         </div>
         
          ))}
        </div>
      </div>

      {/* Right Section - Cart */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">My Order</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <span>{item.qty} x {item.name}</span>
              <span className="font-semibold">₱{item.price}</span>
            </div>
          ))}
        </div>

        {/* Delivery Time */}
        <div className="flex justify-between mt-4 text-gray-700">
          <span>Delivery</span>
          <span>30-40 min</span>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Total Amount:</span>
          <span>₱1,750</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MotorShopPOS;