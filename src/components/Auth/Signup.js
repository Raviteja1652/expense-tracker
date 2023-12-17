import React, { useRef } from 'react'

const Signup = () => {
    const emailref = useRef('')
    const passref = useRef('')
    const cnfPassref = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailref.current.value
        const enteredPass = passref.current.value
        const enteredCnfPass = cnfPassref.current.value
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPass,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                return res.json()
            } else if(enteredPass !== enteredCnfPass){
                throw new Error("Password and Confirmed Password Doesn't match")   
            } else {
                return res.json().then(data => {
                    let errmsg = 'Authentication Failed';
                    if(data && data.error && data.error.message){
                        errmsg = data.error.message
                    };
                    throw new Error(errmsg)
                    
                })
            }
        }).then(data => console.log(data))
        .catch(err => alert(err.message))
    };

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='email'>Email Id: </label>
                <input type='email' id='email' ref={emailref}></input>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' ref={passref}></input>
            </div>
            <div>
                <label htmlFor='cnfpass'>Confirm Password: </label>
                <input type='password' id='cnfpass' ref={cnfPassref}></input>
            </div>
            <button type='Submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup