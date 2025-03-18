import React from 'react';
import 'javascript/components/AddTransactionButton.css';

const AddTransactionButton = () => {
  const handleClick = () => {
    window.location.href = '/entries/new';
  };

  return (
    <button onClick={handleClick} className="btn btn-success btn-lg add-transaction-button">
      Add New Transaction
    </button>
  );
};

export default AddTransactionButton;