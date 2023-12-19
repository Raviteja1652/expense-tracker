import React, { useRef } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const amountRef = useRef('')
    const descRef = useRef('')
    const catgRef = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredData = {
            id: Math.random().toString(),
            amount: amountRef.current.value,
            description: descRef.current.value,
            category: catgRef.current.value,
        }
        props.onSubmitData(enteredData)
    }
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
        </form>
    </div>
  )
}

export default Expenses;