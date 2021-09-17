import React from "react";
import "./Index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/details/:id" component={Details} />

          <Route exact path="/products" component={Products} />

          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
