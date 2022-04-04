import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navigation/NavBar";
import Home from "./Home";
import Pokemon from "./Pages/Pokemon";
import Quiz from "./Pages/Quiz";
import Mandarin from "./Pages/Quiz/components/Mandarin";
import Arabic from "./Pages/Quiz/components/Arabic";
import Zomin from "./Pages/ZomIn";
import Testing from "./Pages/Testing";
import Setting from "./Setting";

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
            <Route path="/quiz" exact component={Quiz} />
            <Route path="/quiz/mandarin" component={Mandarin} />
            <Route path="/quiz/arabic" component={Arabic} />
            <Route path="/zomin" exact component={Zomin} />
            <Route path="/testing" exact component={Testing} />
            <Route path="/setting" exact component={Setting} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
