import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import About from "./components/about";
import Locations from "./components/locations";
import Products from "./components/products";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./custom.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/locations" component={Locations} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}
export default App;
