import React, { useState } from 'react'
import cartContext from './cart-context'

const ContextProvider = (props) => {
    const [token, setToken] = useState('')
    const isLoggedIn = !!token

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    };
    const logoutHandler = () => {
        setToken('')
        localStorage.removeItem('token')
    }
    const contextItems = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
  return (
    <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
  )
}

export default ContextProvider;