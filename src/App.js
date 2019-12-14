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
      topScore: 0,
      alreadyChosen: []
    };
  
    gameLogic = id => {
      // calls randomizer function we created earlier to shuffle cards index position
      const shuffle = cardShuffle(cards)

      // grabs current score
      const score = this.state.counter;

      // grabs top score
      const highScore = this.state.topScore

      // grabs array for checking already chosen images
      const array = this.state.alreadyChosen;

      // filters through cards to grab the id of the clicked image
      const clicked = this.state.cards.filter(card => card.id === id);

      // logic to determine if game ends or continues
      if (array.includes(clicked[0].id)){

        //ends game if image is selected more than once
        this.setState({gameText: "You guessed incorrectly!", counter: 0, alreadyChosen: []});
        
      }else{

        // checks to see if current score is greater than top score
        (score < highScore) ? this.setState() : this.setState({topScore: highScore + 1})

        // continues game if image hasn't been clicked already
        this.setState({gameText: "You guessed correctly!", counter: score + 1});
        array.push(clicked[0].id);
      }
      // sets the new state to shuffle the cards
      this.setState({ cards: shuffle});
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
              gameLogic={this.gameLogic}
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