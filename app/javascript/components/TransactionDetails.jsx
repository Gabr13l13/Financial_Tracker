import React from 'react';

const TransactionDetails = ({ entry }) => {
  return (
    <div className="card shadow-sm p-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <p><strong>Type:</strong> {entry.transaction_type.capitalize()}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Amount:</strong> {entry.amount}€</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <p><strong>Category:</strong> {entry.category}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <p><strong>Description:</strong> {entry.description}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <p><strong>User NIF:</strong> {entry.user_nif}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;