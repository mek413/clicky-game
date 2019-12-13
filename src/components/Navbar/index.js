import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
        <a href="/">Clicky Game</a>
        </li>
        <li className="">You guessed incorrectly!</li>
        <li>
          Score: 0 | Top Score: 0
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
