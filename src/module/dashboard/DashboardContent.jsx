const DashboardContent = () => {
  const data = [
    { title: 'Total Available Stock', value: 7, bgColor: 'bg-blue-500' },
    { title: 'Low Stock Alerts', value: 2, bgColor: 'bg-red-500' },
    { title: 'Upcoming Appointments', value: 4, bgColor: 'bg-yellow-500' },
    { title: 'Daily Sales Summary', value: '₱0', bgColor: 'bg-green-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl text-white shadow-md ${item.bgColor} flex flex-col justify-between`}
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-2xl font-bold mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
