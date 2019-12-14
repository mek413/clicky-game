import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
        <a href="/clicky-game">Clicky Game</a>
        </li>
        <li>{props.gameText}</li>
        <li>
          Score: {props.counter} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
