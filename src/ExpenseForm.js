import React from "react";

const ExpenseForm = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const expenseData = {};
    props.addNewItem(expenseData);
  };

  return <form onSubmit={handleFormSubmit}></form>;
};

export default ExpenseForm;
