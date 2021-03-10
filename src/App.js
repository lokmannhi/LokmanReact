import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Navigation/NavBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/'exact component={Home} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
