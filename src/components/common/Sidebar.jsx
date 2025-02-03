// components/common/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/udhar-challan', label: 'Udhar Challan' },
    { path: '/jama-challan', label: 'Jama Challan' },
    { path: '/khatawahi', label: 'Khatawahi' },
    { path: '/rojmel', label: 'Rojmel' },
    { path: '/billing', label: 'Billing' }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Rental System</h2>
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded mb-1 ${
                location.pathname === item.path
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;