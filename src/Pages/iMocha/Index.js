import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from './components/Home'
import Form from "./components/Form"
import List from "./components/List"

const Index = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <hr />
        <br />
        <Switch>
          <Route path="/imocha" exact component={Home} />
          <Route path="/imocha/form" exact component={Form} />
          <Route path="/imocha/list" exact component={List} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
