import React from 'react';

const ExpenseItem = (props) => {
  const listOfExpenses = props.items.map(expense => (
    <li key={expense.id}>
      <h4>{expense.amount}</h4>
      <span>{expense.description}</span>
      <span>{'  '}{expense.category}</span>
    </li>
  ))
  return (
    <div>
      <ul>
        {listOfExpenses}
      </ul>
    </div>
  )
}

export default ExpenseItem;