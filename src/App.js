import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navigation/NavBar";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import iMocha from "./Pages/iMocha";
// import Quiz from "./Pages/Quiz";
// import Mandarin from "./Pages/Quiz/components/Mandarin";
// import Arabic from "./Pages/Quiz/components/Arabic";
// import Setting from "./Setting";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/imocha" component={iMocha} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
