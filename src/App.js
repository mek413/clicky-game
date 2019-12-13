import React, { Component } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

const cardShuffle = arr => {
  let newPos,
  temp;
  for (let i = arr.length -1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
  }
  return arr;
};

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      cards,
      gameText: "Click an image to begin!",
      counter: 0,
      topScore: 0
    };
  
    shuffleCards = () => {
      const shuffle = cardShuffle(cards)
      this.setState({ cards: shuffle})
    }
    
    render() {
      return (
        <div>
          <Navbar
            gameText={this.state.gameText}
            counter={this.state.counter}
            topScore={this.state.topScore}
          />
          <Header />
          <div className="container">
          {this.state.cards.map(card => (
            <Cards
              shuffleCards={this.shuffleCards}
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