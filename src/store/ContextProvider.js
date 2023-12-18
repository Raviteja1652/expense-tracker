import React, { useState } from 'react'
import cartContext from './cart-context'

const ContextProvider = (props) => {
    const [token, setToken] = useState('')
    const [localId, setLocalId] = useState('')
    const [updatedData, setUpdatedData] = useState({})
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
    const onPageLoad = () => {
      const storedToken = localStorage.getItem('token')
      setToken(storedToken)
      const localId = localStorage.getItem('localId')
      setLocalId(localId)
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM', {
            method: 'POST',
            body: JSON.stringify({
                idToken: token,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
      }).then(res => {
          if(res.ok){
            return res.json()
          } else {
            return res.json().then(data => {
              let errmsg = 'Authentication Failed';
              if(data && data.error && data.error.message){
                errmsg = data.error.message
              };
              throw new Error(errmsg)
            })
          }
        }).then(data => { setUpdatedData(data)
          console.log(data)
        })
        .catch(err => alert(err))
    }
    const contextItems = {
        token: token,
        localId: localId,
        updatedData: updatedData,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        update: updateUserHandler,
        logout: logoutHandler,
        onLoad: onPageLoad,
    }
  return (
    <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
  )
}

export default ContextProvider;