import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeNav from "./components/PokeNav";
import PokeHome from "./components/PokeHome";
import Kanto from "./components/Kanto";
import Johto from "./components/Johto";
// import Home from "../../Home";
import Hoeen from "./components/Hoeen";
import Sinnoh from "./components/Sinnoh";
import Unova from "./components/Unova";
import PokemonDetails from "./components/PokemonDetails";

import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="Pokedex">
      <Router>
        <PokeNav />
        <br />
        <Switch>
          <Route path="/pokemon" exact component={PokeHome} />
          <Route path="/pokemon/kanto" exact component={Kanto} />
          <Route path="/pokemon/johto" exact component={Johto} />
          <Route path="/pokemon/hoeen" exact component={Hoeen} />
          <Route path="/pokemon/sinnoh" exact component={Sinnoh} />
          <Route path="/pokemon/unova" exact component={Unova} />
          <Route path="/pokemon/kanto/:name" component={PokemonDetails} />
          <Route path="/pokemon/johto/:name" component={PokemonDetails} />
          <Route path="/pokemon/hoeen/:name" component={PokemonDetails} />
          <Route path="/pokemon/sinnoh/:name" component={PokemonDetails} />
          <Route path="/pokemon/unova/:name" component={PokemonDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default Pokedex;
