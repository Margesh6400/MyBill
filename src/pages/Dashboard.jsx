// pages/Dashboard.jsx
import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import StockOverview from '../components/dashboard/StockOverview';
import RecentTransactions from '../components/dashboard/RecentTransactions';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StockOverview />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;