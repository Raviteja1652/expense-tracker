import React, { useContext, useEffect, useRef, useState } from 'react';
import './Expenses.css';
import cartContext from '../../store/cart-context';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const [toEditExpense, setToEditExpense] = useState(null)
    useEffect(() => {
        if (toEditExpense) {
            amountRef.current.value = toEditExpense.amount;
            descRef.current.value = toEditExpense.description;
            catgRef.current.value = toEditExpense.category;
        }
    }, [toEditExpense])

    const ctx = useContext(cartContext)
    const amountRef = useRef('')
    const descRef = useRef('')
    const catgRef = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredData = {
            amount: amountRef.current.value,
            description: descRef.current.value,
            category: catgRef.current.value,
        };
        if (Number(amountRef.current.value) > 10000){
            ctx.premium()
        }
        // props.onSubmitData(enteredData)
        if(toEditExpense) {
            ctx.editExpense(enteredData, toEditExpense.id_one)
        } else {
            ctx.onSubmitExpenseData(enteredData)
        }
        setToEditExpense(null)
    };
    const editExpenseHandler =(id) => {
        const expenseToEdit = ctx.savedExpenses.find(expense => expense.id_one === id)
        setToEditExpense(expenseToEdit)
    };
  return (
    <div>
        <form className='expenses-form'>
            <div>
                <label htmlFor='amount'>Amount: </label>
                <input type='number' id='amount' ref={amountRef}></input>
            </div>
            <div>
                <label htmlFor='desc'>Description: </label>
                <input type='text' id='desc' ref={descRef}></input>
            </div>
            <div>
               <label htmlFor='category'>Category</label>
               <select id='category' ref={catgRef}>
                <option value='food'>Food</option>
                <option value='petrol'>Petrol</option>
                <option value='entertainment'>Entertainment</option>
                <option value='emi'>EMI</option>
                <option value='grocery'>Grocery</option>
               </select>
            </div>
            <button type='submit' className='expenses-button' onClick={submitHandler}>Add</button>
            {/* <button type='submit' className='expenses-button' onClick={(e) => { e.preventDefault()
                props.onData()}}>Get</button> */}
        </form>
        <div>
            <ExpenseItem editExpense={editExpenseHandler}/>
        </div>
    </div>
  )
}

export default Expenses;