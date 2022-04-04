import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from './components/Home'
import Assessment from "./components/Assessment";

import './style.css'

const Index = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <hr />
        <br />
        <Switch>
          <Route path="/imocha" exact component={Home} />
          <Route path="/imocha/assessment" exact component={Assessment} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
