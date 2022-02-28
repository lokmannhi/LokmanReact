import React from "react";
import { Link } from "react-router-dom";
import * as FAIcons from "react-icons/fa";
import * as CGIcons from "react-icons/cg";
import * as MDIcons from "react-icons/md";
import * as TIIcons from "react-icons/ti";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <h1>
          Lokman
          <FAIcons.FaReact />
        </h1>
      </Link>
      <ul>
        <Link style={{ textDecoration: "none", color: "black" }} to="/pokemon">
          <li>
            <CGIcons.CgPokemon />
          </li>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/quiz">
          <li>
            <FAIcons.FaSchool />
          </li>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/zomin">
          <li>
            <TIIcons.TiDeviceLaptop />
          </li>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/testing">
          <li>
            <TIIcons.TiPuzzleOutline />
          </li>
        </Link>
      </ul>
      <Link
        style={{
          textDecoration: "none",
          color: "black"
        }}
        to="/setting"
      >
        <h3>
          <MDIcons.MdSettings />
        </h3>
      </Link>
    </nav>
  );
};

export default NavBar;
