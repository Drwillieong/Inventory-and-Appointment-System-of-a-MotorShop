import React, { useState } from 'react';

const InventoryContent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Motor Oil', performance: 'Excellent', stock: 50, price: '₱300.00', visible: true },
    { id: 2, name: 'Brake Pads', performance: 'Good', stock: 19, price: '₱200.00', visible: true },
    { id: 3, name: 'Motolite', performance: 'Good', stock: 25, price: '₱1,500.00', visible: true },
    { id: 4, name: 'Spark Plugs', performance: 'Excellent', stock: 50, price: '₱450.00', visible: true },
    { id: 5, name: 'Air Filter', performance: 'Good', stock: 20, price: '₱900.00', visible: true },
    { id: 6, name: 'Engine Oil Filter', performance: 'Bad', stock: 5, price: '₱150.00', visible: false },
    { id: 7, name: 'Pipe', performance: 'Bad', stock: 5, price: '₱850.00', visible: true },
  ]);

  const toggleVisibility = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, visible: !product.visible } : product
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold">All Product List</h2>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Search Product"
            className="border px-4 py-2 rounded-lg"
          />
          <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
            Sort By
          </button>
          <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
            Show All Product 40
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
            New Product
          </button>
        </div>
      </div>

      {/* Product Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg mb-6">
        <div>
          <h3 className="text-gray-600 text-sm">Active Product</h3>
          <p className="text-lg font-bold">7 Products</p>
        </div>
        <div>
          <h3 className="text-gray-600 text-sm">Most Sold Product</h3>
          <p className="text-lg font-bold">Spark Plugs</p>
        </div>
        <div>
          <h3 className="text-gray-600 text-sm">Average Performance</h3>
          <p className="text-lg font-bold text-green-500">Good!</p>
        </div>
        <div>
          <h3 className="text-gray-600 text-sm">Product Sold</h3>
          <p className="text-lg font-bold">40 Items</p>
        </div>
      </div>

      {/* Product Table (Scrollable) */}
      <div className="overflow-x-auto max-h-[400px] mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="p-4">Product</th>
              <th className="p-4">Performance</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Product Price</th>
              <th className="p-4">Visibility</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{product.name}</td>
                <td className="p-4">
                  <span
                    className={
                      product.performance === 'Excellent'
                        ? 'text-green-500'
                        : product.performance === 'Good'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }
                  >
                    {product.performance}
                  </span>
                </td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">
                  <button onClick={() => toggleVisibility(product.id)}>
                    {product.visible ? 'Visible' : 'Hidden'}
                  </button>
                </td>
                <td className="p-4 flex gap-4">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryContent;
