import React, { useContext, useRef } from 'react';
import './Profile.css';
import cartContext from '../../store/cart-context';

const Profile = () => {
    const ctx = useContext(cartContext);

    const fullNameRef = useRef('')
    const urlRef = useRef('')
    
    const submitHandler = (e) => {
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM', {
            method: 'POST',
            body: JSON.stringify({
                idToken: ctx.token,
                displayName: fullNameRef.current.value,
                photoUrl: urlRef.current.value,
                returnSecureToken: true
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
        }).then(data => {ctx.update(data.localId)
            console.log(data)
        })
        .catch(err => alert(err))
    }
  return (
    <div className='profile-form'>
        <div><h2>Contact Details</h2></div><br></br>
        <div>
        <form className='form'>
            <label htmlFor='full-name'>Full name: </label>
            <input type='text' id='full-name' value={ctx.updatedData.displayName} ref={fullNameRef}></input>
            <label htmlFor='photo'>Profile Photo: </label>
            <input type='url' id='photo' value={ctx.updatedData.photoUrl} ref={urlRef}></input><br></br>
            <button type='submit' onClick={submitHandler}>Update</button>
        </form>
        </div>
    </div>
  )
}

export default Profile;