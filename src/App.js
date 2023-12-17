import { useContext } from "react";
import Signup from "./components/Auth/Signup";
import Header from "./components/Header/Header";
import cartContext from "./store/cart-context";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Header/Home";

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
        
        </Switch>
    </div>
  );
}

export default App;
