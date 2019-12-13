import React, { Component } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      cards
    };
  
    
    render() {
      return (
        <div>
          <Navbar />
          <Header />
          <div className="container">
          {this.state.cards.map(card => (
            <Cards
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
          </div>
      </div>
    )
  }
}
  
  export default App;  