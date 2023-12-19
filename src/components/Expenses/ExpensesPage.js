import React, { useState } from 'react'
import Expenses from './Expenses';
import ExpenseItem from './ExpenseItem';
import axios from 'axios';

const ExpensesPage = () => {
  // const [expenses, setExpenses] = useState([])
  // const dataSubmitHandler = (enteredExpense) => {
  //     // setExpenses(prev => {return [...prev, enteredExpense]})
  //     axios.post('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json', enteredExpense).then(
  //         (res) => (console.log(res.data))
  //     ).catch(err => console.log(err))

  //     axios.get('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json').then(
  //     res => {
  //       let filteredData = [];
  //       for (let key in res.data) {
  //         filteredData.push({...res.data[key], id_one:key});
  //       }
  //       setExpenses(filteredData)
  //       console.log(res.data)
  //     }
  //   ).catch(err => console.log(err))
  // };
  // Previous props on <Expenses> and <ExpenseItem>: onSubmitData={dataSubmitHandler}, items={expenses}
    
  return (
    <div>
        <Expenses />
        <ExpenseItem />
    </div>
  )
}

export default ExpensesPage;