import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/card" component={Card} />
          </Switch>
        </div>
      </div>
    );
  }
}
