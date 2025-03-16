import { useState } from 'react';
import { CalendarIcon, CheckCircle, XCircle } from 'lucide-react';

const AppointmentsContent = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Jairus Pecho', gender: 'Male', age: 20, treatment: 'Engine Repair', time: '10:00am - 11:00am', status: 'Pending', date: '2025-03-15' },
    { id: 2, name: 'Kayheleen Minor', gender: 'Female', age: 20, treatment: 'Brake System', time: '11:00am - 12:00pm', status: 'Pending', date: '2025-03-16' },
    { id: 3, name: 'Jackie Gallora', gender: 'Female', age: 20, treatment: 'Maintenance', time: '1:00pm - 2:00pm', status: 'Pending', date: '2025-03-17' },
    { id: 4, name: 'Kevin Bolado', gender: 'Male', age: 20, treatment: 'Oil Change', time: '2:00pm - 3:00pm', status: 'Pending', date: '2025-03-18' },
  ]);

  const serviceAppointments = [
    { id: 5, name: 'LeBron James', gender: 'Male', age: 40, treatment: 'Engine Repair', time: '10:00am - 11:00am', status: 'In Progress', date: '2025-03-15' },
    { id: 6, name: 'Stephen Curry', gender: 'Male', age: 35, treatment: 'Brake System Overhaul', time: '11:00am - 12:00pm', status: 'In Progress', date: '2025-03-16' },
    { id: 7, name: 'Kevin Durant', gender: 'Male', age: 35, treatment: 'Transmission Fix', time: '1:00pm - 2:00pm', status: 'In Progress', date: '2025-03-17' },
    { id: 8, name: 'Giannis Antetokounmpo', gender: 'Male', age: 28, treatment: 'Oil Change', time: '2:00pm - 3:00pm', status: 'In Progress', date: '2025-03-18' },
  ];

  const handleAction = (id, action) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? { ...appointment, status: action } : appointment
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6 overflow-y-auto">
      
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Schedule Your Vehicle Service</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">+ Add Service Appointment</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Side - Calendar & Timeline */}
        <div className="space-y-6">
          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Calendar</h3>
            <div className="flex overflow-x-auto mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="flex-shrink-0 w-12 text-center py-2 bg-gray-200">{day}</div>
              ))}
            </div>
            <div className="flex overflow-x-auto">
              {[...Array(30)].map((_, i) => (
                <div key={i} className={`flex-shrink-0 w-12 py-2 rounded-full cursor-pointer ${i === 13 ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Service Requests Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Service Requests (Pending)</h3>
            {appointments.map(appointment => (
              <div key={appointment.id} className="border-b py-3">
                <p className="font-bold">{appointment.treatment}</p>
                <p className="text-sm text-gray-500">Customer: {appointment.name}</p>
                <p className="text-sm text-gray-700">{appointment.time}</p>
                <p className="text-sm text-gray-500">Requested on: {appointment.date}</p>
                <a href="#" className="text-blue-500 text-sm font-semibold">View Details</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Statistics & Service Appointments */}
        <div className="space-y-6">
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Appointments</h3>
              <p className="text-2xl font-bold">4</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Pending Appointments</h3>
              <p className="text-2xl font-bold text-yellow-500">4</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Completed Appointments</h3>
              <p className="text-2xl font-bold text-green-500">3</p>
            </div>
          </div>

          {/* Service Appointments (In Progress) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Service Appointments (In Progress)</h3>
              <a href="#" className="text-blue-500 text-sm font-semibold">View All</a>
            </div>
            {serviceAppointments.map(appointment => (
              <div key={appointment.id} className="flex justify-between items-center border-b py-4">
                <div>
                  <p className="font-bold">{appointment.name}</p>
                  <p className="text-sm text-gray-500">{appointment.gender}, {appointment.age}</p>
                  <p className="text-sm text-gray-700">Service: {appointment.treatment}</p>
                  <p className="text-sm text-gray-700">{appointment.time}</p>
                  <p className="text-sm text-gray-500">Scheduled on: {appointment.date}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                    onClick={() => handleAction(appointment.id, 'Completed')}
                  >
                    <CheckCircle size={16} /> Complete
                  </button>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                    onClick={() => handleAction(appointment.id, 'Cancelled')}
                  >
                    <XCircle size={16} /> Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppointmentsContent;
