// components/dashboard/DashboardStats.jsx
import React from 'react';

const DashboardStats = () => {
  const stats = [
    { label: 'Total Stock', value: '1,234' },
    { label: 'Items Rented', value: '456' },
    { label: 'Active Clients', value: '89' },
    { label: 'Today\'s Transactions', value: '12' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;