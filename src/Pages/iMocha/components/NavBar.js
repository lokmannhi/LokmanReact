import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <Link style={{ textDecoration: "none", color: "black" }} to="/imocha">
          <h3>
            Home
          </h3>
        </Link>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/imocha/form"
          >
            <li>Form</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/imocha/list"
          >
            <li>List</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
