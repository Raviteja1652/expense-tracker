import React, { useRef, useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [onToggle, setOnToggle] = useState(true);
    const emailref = useRef('')
    const passref = useRef('')
    const cnfPassref = useRef('')

    const swithModeHandler = () => {
        setOnToggle(prev => !prev)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailref.current.value
        const enteredPass = passref.current.value
        const enteredCnfPass = cnfPassref.current.value
        let url;
        if(onToggle){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM'
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM'
        }
        fetch(url, {
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
    <div className='form-box'>
        <div className='button-box'>
            <div id={onToggle ? 'btn' : 'btn-login'} />
            <button type='button' className='toggle-button' onClick={swithModeHandler}>Signup</button>
            <button type='button' className='toggle-button' onClick={swithModeHandler}>Login</button>
        </div>
        <form className='input-group' id='signup' onSubmit={submitHandler}>
            <div>
                <label htmlFor='email'>Email Id: </label>
                <input type='email' id='email' ref={emailref} className='input-field'></input>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' ref={passref} className='input-field'></input>
            </div>
            <div>
                <label htmlFor='cnfpass'>Confirm Password: </label>
                <input type='password' id='cnfpass' ref={cnfPassref} className='input-field'></input>
            </div>
            <button type='Submit' className='submit-button'>{onToggle ? 'Signup' : 'Login'}</button>
        </form>
    </div>
  )
}

export default Signup;