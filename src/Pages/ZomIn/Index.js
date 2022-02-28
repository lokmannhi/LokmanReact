import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from './components/Home'
import Posts from './components/Posts'
import Comments from './components/Comments'

import './Index.css'

const Index = () => {
  return (
    <div className="Index">
      <Router>
        <NavBar />
        <hr />
        <br />
        <Switch>
          <Route path="/zomin" exact component={Home} />
          <Route path="/zomin/posts" exact component={Posts} />
          <Route path="/zomin/comments" exact component={Comments} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
