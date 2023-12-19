import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';

const ExpenseItem = (props) => {
  const ctx = useContext(cartContext)
  const listOfExpenses = ctx.savedExpenses.map(expense => (
    <li key={expense.id_one}>
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