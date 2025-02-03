// components/challans/UdharChallan.jsx
import React, { useState } from 'react';
import Form from '../components/common/Form';

const UdharChallan = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    date: '',
    items: [{ name: '', quantity: '', rate: '' }],
    totalAmount: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to save challan
    // TODO: Generate PDF
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', quantity: '', rate: '' }]
    });
  };

  return (
    <Form title="Create Udhar Challan" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.clientName}
            onChange={(e) => setFormData({...formData, clientName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
      </div>

      {formData.items.map((item, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Item Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={item.name}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].name = e.target.value;
                setFormData({...formData, items: newItems});
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].quantity = e.target.value;
                setFormData({...formData, items: newItems});
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rate</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={item.rate}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].rate = e.target.value;
                setFormData({...formData, items: newItems});
              }}
            />
          </div>
        </div>
      ))}

      <div className="flex gap-4 mb-4">
        <button
          type="button"
          onClick={addItem}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Add Item
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Generate Challan
        </button>
      </div>
    </Form>
  );
};

export default UdharChallan;