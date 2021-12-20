// @ts-nocheck
import './App.css';
import Product from './Pages/Product/Product';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Cart from './Pages/Cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
