import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';

const ExpenseItem = (props) => {
  const ctx = useContext(cartContext)
  const listOfExpenses = ctx.savedExpenses.map(expense => (
    <li key={expense.id_one}>
      <h4>{expense.amount}</h4>
      <span>{expense.description}</span>
      <span>{'  '}{expense.category}</span>
      <button onClick={() => props.editExpense(expense.id_one)}>Edit</button>
      <button onClick={() => ctx.deleteExpense(expense.id_one)}>Delete</button>
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