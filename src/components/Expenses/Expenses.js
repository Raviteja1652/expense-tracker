import React, { useContext, useRef } from 'react';
import './Expenses.css';
import cartContext from '../../store/cart-context';

const Expenses = (props) => {
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
        }
        // props.onSubmitData(enteredData)
        ctx.onSubmitExpenseData(enteredData)
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
            {/* <button type='submit' className='expenses-button' onClick={(e) => { e.preventDefault()
                props.onData()}}>Get</button> */}
        </form>
    </div>
  )
}

export default Expenses;