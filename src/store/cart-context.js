import React from "react";

const cartContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => {},
})

export default cartContext