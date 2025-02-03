// components/dashboard/DashboardStats.jsx
import React from 'react';

const DashboardStats = () => {
  const stats = [
    { title: 'Total Revenue', value: '₹50,000', change: '+12%' },
    { title: 'Active Rentals', value: '125', change: '+5%' },
    { title: 'Pending Returns', value: '28', change: '-2%' },
    { title: 'Available Stock', value: '450', change: '0%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">{stat.title}</div>
          <div className="mt-2 flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
            <span className={`ml-2 text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;