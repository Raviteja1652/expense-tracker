import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import cartContext from '../../store/cart-context';

const Home = () => {
  const ctx = useContext(cartContext)
  const verifyHandler = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM', {
            method: 'POST',
            body: JSON.stringify({
              requestType: "VERIFY_EMAIL",
              idToken: ctx.token,
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
        }).then(data => console.log(data))
        .catch(err => alert(err))
  }
  return (
    <div>
        <h1>welcome to Expense Tracker</h1>
        <Button onClick={verifyHandler}>Verify your Email</Button>
        <h4>Your Profile is incomplete</h4>
        <Link to='/profile'>Complete now</Link>
    </div>
  )
}

export default Home;