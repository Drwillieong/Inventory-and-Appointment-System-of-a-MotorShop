import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './module/Front';
import AdminPage from './module/dashboard/AdminPage';
import AppointmentBooking from './AppointmentBooking';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home/Front Page */}
        <Route path="/" element={<Front />} />
        
        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/book" element={<AppointmentBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
