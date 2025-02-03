// pages/Dashboard.jsx
import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <DashboardStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          {/* Add transaction list component here */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Stock Overview</h2>
          {/* Add stock overview component here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;