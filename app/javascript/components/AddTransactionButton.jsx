import React from 'react';

const AddTransactionButton = () => {
  const handleClick = () => {
    window.location.href = '/entries/new';
  };

  return (
    <button onClick={handleClick} className="btn btn-success btn-lg">
      Add New Transaction
    </button>
  );
};

export default AddTransactionButton;