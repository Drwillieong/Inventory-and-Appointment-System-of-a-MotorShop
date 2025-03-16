import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './module/Front';
import AdminPage from './module/dashboard/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home/Front Page */}
        <Route path="/" element={<Front />} />
        
        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
