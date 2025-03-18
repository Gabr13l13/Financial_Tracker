// filepath: /home/gabri/financialtracker/app/javascript/components/Transactions.jsx
import React from "react";

const Transactions = ({ entries }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Your Transactions</h1>
      <ul className="list-group">
        {entries.map((entry) => (
          <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{entry.transaction_type}</strong>
              <p className="mb-0 text-muted">
                Category: {entry.category}
                <br />
                Amount: ${entry.amount}
                <br />
                Date: {entry.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;