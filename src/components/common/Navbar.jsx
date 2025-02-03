// components/common/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Centering Plate Rental</div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md">
            New Transaction
          </button>
          <div className="text-sm">Welcome, Admin</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
