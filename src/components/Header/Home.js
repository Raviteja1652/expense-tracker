import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>welcome to Expense Tracker</h1>
        <h4>Your Profile is incomplete</h4>
        <Link to='/profile'>Complete now</Link>
    </div>
  )
}

export default Home;