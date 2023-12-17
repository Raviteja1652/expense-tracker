import { useContext } from "react";
import Signup from "./components/Auth/Signup";
import Header from "./components/Header/Header";
import cartContext from "./store/cart-context";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Header/Home";
import Profile from "./components/Header/Profile";
function App() {
  const ctx = useContext(cartContext);
  return (
    <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login'>{!ctx.isLoggedIn ? (<Signup />) : (<Home />)}</Route>
          <Route path='/Home'><Home /></Route>
          <Route path='/logout'><Redirect to='/login' /></Route>
          <Route path='/profile'><Profile /></Route>
        
        </Switch>
    </div>
  );
}

export default App;
