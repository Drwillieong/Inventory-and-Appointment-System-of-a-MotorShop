import React, { useState } from 'react';
import { Home, Package, Calendar, Monitor, Settings, Menu, X } from 'lucide-react';
import DashboardContent from './DashboardContent';
import InventoryContent from './InventoryContent';
import AppointmentsContent from './AppointmentsContent';
import MotorShopPOS from './MotorShopPOS';
import SettingsContent from './SettingsContent';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ onSelectPage, activePage, isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <Home />, label: 'Dashboard' },
    { icon: <Package />, label: 'Inventory' },
    { icon: <Calendar />, label: 'Appointments' },
    { icon: <Monitor />, label: 'POS' },
    { icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-5 transform transition-transform z-50 md:relative md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button className="md:hidden" onClick={toggleSidebar}>
          <X />
        </button>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer ${
              activePage === item.label ? 'bg-gray-700' : ''
            }`}
            onClick={() => {
              onSelectPage(item.label);
              toggleSidebar();
            }}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = ({ page }) => {
  switch (page) {
    case 'Dashboard':
      return <DashboardContent />;
    case 'Inventory':
      return <InventoryContent />;
    case 'Appointments':
      return <AppointmentsContent />;
    case 'POS':
      return <MotorShopPOS />;
    case 'Settings':
      return <SettingsContent />;
    default:
      return <DashboardContent />;
  }
};

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username] = useState('Kayleen Dela Torre');
  const navigate = useNavigate(); // ✅ Initialize useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false); // Close dropdown on logout
    navigate('/'); // ✅ Redirect to front page
  };

  return (
    <nav className="flex justify-between items-center p-6 text-white bg-gray-800">
      {/* Hamburger Menu (Mobile only) */}
      <button onClick={toggleSidebar} className="md:hidden text-2xl">
        <Menu />
      </button>

      {/* Site Title */}
      <div className="text-xl font-semibold">RRJ MOTORSHOP</div>

      {/* Profile Section */}
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center space-x-2 cursor-pointer">
          <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-10 h-10" />
          <span>{username}</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg border border-gray-300 z-50">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">My Account</li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600"
                onClick={handleLogout} // ✅ Calls handleLogout correctly
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


const AdminPage = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <Sidebar
          onSelectPage={setActivePage}
          activePage={activePage}
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        
        {/* Content */}
        <div
          className={`flex-1 p-5 overflow-y-auto transition-all ${
            sidebarOpen ? '' : 'md:ml-0'
          }`}
        >
          <Content page={activePage} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
