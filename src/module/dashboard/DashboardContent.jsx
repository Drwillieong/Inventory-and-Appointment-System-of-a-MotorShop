const DashboardContent = () => {
  const data = [
    { title: 'Total Available Stock', value: 7, bgColor: 'bg-blue-500' },
    { title: 'Low Stock Alerts', value: 2, bgColor: 'bg-red-500' },
    { title: 'Upcoming Appointments', value: 4, bgColor: 'bg-yellow-500' },
    { title: 'Daily Sales Summary', value: '₱0', bgColor: 'bg-green-500' },
  ];

  const transactions = [
    {
      name: 'Kayheleen Minor',
      date: '22 Dec, 2021',
      time: '10:00am - 11:00am',
      service: 'Brake Repair',
      vehicle: 'Honda Wave 110',
      total: '₱2105.00',
      status: 'Completed',
      statusColor: 'bg-green-200 text-green-800',
    },
    {
      name: 'Jairus Pecho',
      date: '22 Dec, 2021',
      time: '11:00am - 12:00pm',
      service: 'Oil Change',
      vehicle: 'Yamaha Mio',
      total: '₱1400.81',
      status: 'Completed',
      statusColor: 'bg-green-200 text-green-800',
    },
    {
      name: 'Jackie Gallora',
      date: '22 Dec, 2021',
      time: '1:00pm - 2:00pm',
      service: 'Engine Tune-Up',
      vehicle: 'Suzuki Raider',
      total: '₱1745.84',
      status: 'Completed',
      statusColor: 'bg-green-200 text-green-800',
    },
    {
      name: 'Kevin Bolado',
      date: '22 Dec, 2021',
      time: '2:00pm - 3:00pm',
      service: 'Tire Replacement',
      vehicle: 'Kawasaki Rouser',
      total: '₱1123.70',
      status: 'Completed',
      statusColor: 'bg-green-200 text-green-800',
    },
  ];

  const products = [
    {
      id: 4,
      name: 'Spark Plug',
      category: 'Ignition System',
      status: 'In Stock',
      sold: '20',
      earnings: '₱457,000',
      statusColor: 'text-green-500',
    },
    {
      id: 1,
      name: 'Motor Oil',
      category: 'Lubricants',
      status: 'In Stock',
      sold: '20',
      earnings: '₱546,000',
      statusColor: 'text-green-500',
    },
    {
      id: 5,
      name: 'Oil Filter',
      category: 'Engine Parts',
      status: 'Low Stock',
      sold: '20',
      earnings: '₱780,000',
      statusColor: 'text-red-500',
    },
    {
      id: 7,
      name: 'Chain Kit',
      category: 'Transmission',
      status: 'In Stock',
      sold: '20',
      earnings: '₱125,000',
      statusColor: 'text-green-500',
    },
  ];

  return (
    <div className="p-2 space-y-8">
      {/* Stock Overview Section (Full Width) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className={`p-6 rounded-2xl text-white shadow-lg ${item.bgColor} flex flex-col justify-between`}>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Products Performance Section (Top) */}
      <div className="bg-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Top Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 p-5 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition duration-300"
            >
              {/* Product Name */}
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* Product Details */}
              <div className="mt-4 space-y-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${product.statusColor}`}
                >
                  {product.status}
                </span>
                <p className="text-gray-600 text-sm">Sold: {product.sold}</p>
                <p className="font-bold text-lg text-green-600">{product.earnings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Table (Bottom) */}
      <div className="bg-white p-3 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-5">Customer</th>
              <th className="p-5">Date</th>
              <th className="p-5">Time</th>
              <th className="p-5">Service</th>
              <th className="p-5">Vehicle</th>
              <th className="p-5">Total</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                <td className="p-5">{tx.name}</td>
                <td className="p-5">{tx.date}</td>
                <td className="p-5">{tx.time}</td>
                <td className="p-5">{tx.service}</td>
                <td className="p-5">{tx.vehicle}</td>
                <td className="p-5 font-bold">{tx.total}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-sm ${tx.statusColor}`}>{tx.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;