// components/dashboard/StockOverview.jsx
import React from 'react';

const StockOverview = () => {
  const stockItems = [
    { name: '4x4 Plates', total: 200, rented: 150 },
    { name: '5x5 Plates', total: 300, rented: 220 },
    { name: '6x6 Plates', total: 150, rented: 80 },
    { name: 'Support Beams', total: 100, rented: 65 },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Stock Overview</h2>
        <div className="mt-4">
          {stockItems.map((item) => (
            <div key={item.name} className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name}</span>
                <span className="text-gray-900">{item.rented}/{item.total}</span>
              </div>
              <div className="mt-1 relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(item.rented / item.total) * 100}%` }}
                    className="bg-blue-500 rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockOverview;