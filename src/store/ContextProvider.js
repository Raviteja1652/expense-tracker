import React, { useState } from 'react'
import cartContext from './cart-context'
import axios from 'axios';

const ContextProvider = (props) => {
    const [token, setToken] = useState('')
    const [localId, setLocalId] = useState('')
    const [updatedData, setUpdatedData] = useState({}) //profile Data
    const [expensesData, setExpensesData] = useState([])
    const isLoggedIn = !!token

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    };
    const logoutHandler = () => {
        setToken('')
        localStorage.removeItem('token')
    };
    const updateUserHandler = (localId) => {
      localStorage.setItem('localId', localId)
    }
    const onPageLoad = async() => {
      const storedToken = localStorage.getItem('token')
      setToken(storedToken)
      const localId = localStorage.getItem('localId')
      setLocalId(localId)
      // fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM', {
      //       method: 'POST',
      //       body: JSON.stringify({
      //           idToken: token,
      //       }),
      //       headers: {
      //           'Content-Type': 'application/json'
      //       }
      // }).then(res => {
      //     if(res.ok){
      //       return res.json()
      //     } else {
      //       return res.json().then(data => {
      //         let errmsg = 'Authentication Failed';
      //         if(data && data.error && data.error.message){
      //           errmsg = data.error.message
      //         };
      //         throw new Error(errmsg)
      //       })
      //     }
      //   }).then(data => { setUpdatedData(data)
      //     console.log(data)
      //   })
      //   .catch(err => alert(err))
      // axios.get('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json').then(
      //   res => {
      //     let filteredData = [];
      //     for (let key in res.data) {
      //       filteredData.push({...res.data[key], id_one:key});
      //     }
      //     setExpensesData(filteredData)
      //     console.log(res.data)
      //   }
      // ).catch(err => console.log(err))
      try{
        const getResponse = await axios.get('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json')
        const data = await getResponse.data
        let filteredData = [];
        for (let key in data) {
          filteredData.push({...data[key], id_one:key});
        }
        setExpensesData(filteredData)
        console.log(data)
      } catch(err) {console.log(err)}
      
    };

    const submitExpenseDataHandler = async (enteredExpense) => {
      try{
        const postRes = await axios.post('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json', enteredExpense)
        // .then(
        //       (res) => {
        //         // setExpensesData(prev => {return [...prev, enteredExpense]})
        //         console.log(res.data)
        //       }
        //   ).catch(err => console.log(err))
        const data = await postRes.data
        console.log(data)
      } catch(err){
        console.log(err)
      }

      try{
        const getResponse = await axios.get('https://react-http-7e214-default-rtdb.firebaseio.com/expensesData.json')
        // .then(
        // res => {
        //   let filteredData = [];
        //   for (let key in res.data) {
        //     filteredData.push({...res.data[key], id_one:key});
        //   }
        //   setExpensesData(filteredData)
        //   console.log(res.data)
        // }
        // )
        const data = await getResponse.data
        let filteredData = [];
        for (let key in data) {
          filteredData.push({...data[key], id_one:key});
        }
        setExpensesData(filteredData)
        console.log(data)
      } catch(err) {console.log(err)}
    }
    const contextItems = {
        token: token,
        localId: localId,
        updatedData: updatedData,
        isLoggedIn: isLoggedIn,
        savedExpenses: expensesData,
        login: loginHandler,
        update: updateUserHandler,
        logout: logoutHandler,
        onLoad: onPageLoad,
        onSubmitExpenseData: submitExpenseDataHandler,
    }
  return (
    <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
  )
}

export default ContextProvider;