import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="img-container click-item">
        <img className="item" 
        alt={props.name} 
        src={props.image} 
        onClick={() => props.gameLogic(props.id)}
        />
    </div>
  );
}

export default Cards;
