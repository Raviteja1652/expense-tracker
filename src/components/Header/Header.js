import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import cartContext from '../../store/cart-context';

const Header = () => {
  const ctx = useContext(cartContext);
  return (
    <>
        <Navbar bg='dark' expand='lg' variant='dark'>
          <Container>
            <Navbar.Brand>Expense Tracker</Navbar.Brand>
            <Navbar.Brand as={Link} to='/'>welcome</Navbar.Brand>
            <Navbar.Brand as={Link} to='/Home'>Home</Navbar.Brand>
            {ctx.isLoggedIn && <Navbar.Brand as={Link} to='/expenses'>Expenses</Navbar.Brand>}
            <Navbar.Brand as={Link} to='/about'>About Us</Navbar.Brand>
            {!ctx.isLoggedIn && <Navbar.Brand as={Link} to='/login'>Login</Navbar.Brand>}
            {ctx.isLoggedIn && <Navbar.Brand as={Link} to='/logout' onClick={() => ctx.logout()}>Logout</Navbar.Brand>}
            {ctx.premiumActive && <Navbar.Brand as={Link} to='/premium'>Premium</Navbar.Brand>}

          </Container>
        </Navbar>
    </> 
  )
}

export default Header;