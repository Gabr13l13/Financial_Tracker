import "@hotwired/turbo-rails";
import "controllers";
import "bootstrap";
import "components";
import Rails from "@rails/ujs";
Rails.start();

import React from 'react';
import ReactDOM from 'react-dom';
import AddTransactionButton from 'components/AddTransactionButton';

document.addEventListener('DOMContentLoaded', () => {
  const addTransactionButton = document.getElementById('add-transaction-button');
  if (addTransactionButton) {
    ReactDOM.render(<AddTransactionButton />, addTransactionButton);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const transactionDetails = document.getElementById('transaction-details');
    if (transactionDetails) {
      const entry = JSON.parse(transactionDetails.dataset.entry);
      ReactDOM.render(<TransactionDetails entry={entry} />, transactionDetails);
    }
  });