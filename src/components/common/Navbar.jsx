// components/common/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm h-16 flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-gray-800">Centering Plate Rental</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;