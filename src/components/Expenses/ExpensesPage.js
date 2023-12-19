import React, { useState } from 'react'
import Expenses from './Expenses';
import ExpenseItem from './ExpenseItem';

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState([])
    const dataSubmitHandler = (enteredExpense) => {
        setExpenses(prev => {return [...prev, enteredExpense]})
    }
  return (
    <div>
        <Expenses onSubmitData={dataSubmitHandler} />
        <ExpenseItem items={expenses} />
    </div>
  )
}

export default ExpensesPage;