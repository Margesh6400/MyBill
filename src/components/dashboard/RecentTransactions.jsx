// components/dashboard/RecentTransactions.jsx
import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      client: 'Rajesh Construction',
      type: 'Udhar',
      amount: '₹12,000',
      date: '2024-02-03',
      status: 'Pending',
    },
    {
      id: 2,
      client: 'Kumar Builders',
      type: 'Jama',
      amount: '₹8,500',
      date: '2024-02-02',
      status: 'Completed',
    },
    // Add more transactions as needed
  ];
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        <div className="mt-4 space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">{transaction.client}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{transaction.amount}</p>
                <p className={`text-sm ${
                  transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;