import React from "react";
import { Link } from "react-router-dom";
import * as CGIcons from "react-icons/cg";

import "./PokeNav.css";

const PokeNav = () => {
  return (
    <>
      <nav className="PokeNav">
        <Link style={{ textDecoration: "none", color: "black" }} to="/pokemon">
          <h3>
            <CGIcons.CgPokemon />
            Pokedex
          </h3>
        </Link>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pokemon/kanto"
          >
            <li>Kanto</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pokemon/johto"
          >
            <li>Johto</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pokemon/hoeen"
          >
            <li>Hoeen</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pokemon/sinnoh"
          >
            <li>Sinnoh</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/pokemon/unova"
          >
            <li>Unova</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default PokeNav;
