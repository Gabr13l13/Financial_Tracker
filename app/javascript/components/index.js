import React from "react";
import ReactDOM from "react-dom";
import Transactions from "components/Transactions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("react-root");
    if (root) {
      const entries = JSON.parse(root.dataset.entries); // Recebe os dados do Rails
      ReactDOM.render(<Transactions entries={entries} />, root);
    }
  });