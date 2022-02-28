import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <Link style={{ textDecoration: "none", color: "black" }} to="/zomin">
          <h3>
            Home
          </h3>
        </Link>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/zomin/posts"
          >
            <li>Posts</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/zomin/comments"
          >
            <li>Comments</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
