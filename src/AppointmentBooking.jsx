import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  // Simulating unavailable times and dates
  const unavailableDates = [new Date("2025-03-20"), new Date("2025-03-25")];
  const unavailableTimes = ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"];

  const timeSlots = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", 
    "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", 
    "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-200">
      {/* Header */}
      <nav className="flex flex-wrap justify-between items-center p-6 text-white">
        <div className="text-xl font-semibold">RRJ MOTORSHOP</div>
        <ul className="hidden md:flex space-x-8">
          <li onClick={() => navigate('/')} className= "  text-red-600 font-semibold">HOME</li>
        </ul>
      
      </nav>

      {/* Appointment Booking Form */}
      <div className="flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
          {/* Left Section - Image Placeholder */}
          <div className="w-full md:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Motor Repair"
              className="rounded-lg"
            />
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h2>
            <p className="text-gray-600 mb-6">Fill in the details to schedule a repair or maintenance service.</p>

            <div className="space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {/* Preferred Date */}
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="Select a date"
                excludeDates={unavailableDates}
              />

              {/* Preferred Time */}
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} disabled={unavailableTimes.includes(slot)}>
                    {slot} {unavailableTimes.includes(slot) ? "(Booked)" : ""}
                  </option>
                ))}
              </select>

              {/* Vehicle Model */}
              <input
                type="text"
                placeholder="Enter your vehicle model"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
              />

              {/* Service Selection */}
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Select a service</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Brake Inspection">Brake Inspection</option>
                <option value="Engine Repair">Engine Repair</option>
                <option value="Tire Replacement">Tire Replacement</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                Cancel
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;