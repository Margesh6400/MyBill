// components/common/Form.jsx
import React from 'react';

const Form = ({ onSubmit, children, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;