import { useContext, useEffect } from "react";
import Signup from "./components/Auth/Signup";
import Header from "./components/Header/Header";
import cartContext from "./store/cart-context";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Header/Home";
import Profile from "./components/Header/Profile";
import ExpensesPage from "./components/Expenses/ExpensesPage";
import Expenses from './components/Expenses/Expenses';

function App() {
  const ctx = useContext(cartContext);
  useEffect(() => {
    ctx.onLoad()
  }, [])
  return (
    <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' >{!ctx.isLoggedIn ? (<Signup />) : (<Home />)}</Route>
          <Route path='/Home'><Home /></Route>
          <Route path='/forgot-password'><Signup /></Route>
          <Route path='/logout'><Redirect to='/login' /></Route>
          <Route path='/profile'><Profile /></Route>
          <Route path='/expenses'><Expenses /></Route>
        
        </Switch>
    </div>
  );
}

export default App;
