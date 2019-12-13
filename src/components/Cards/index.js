import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Cards;
