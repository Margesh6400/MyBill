// src/components/common/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/udhar-challan', label: 'Udhar Challan' },
    { path: '/jama-challan', label: 'Jama Challan' },
    { path: '/khatawahi', label: 'Khatawahi' },
    { path: '/rojmel', label: 'Rojmel' },
    { path: '/billing', label: 'Billing' }
  ];

  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;