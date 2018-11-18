import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SailorSenshi from "./components/SailorSenshi";
import cards from "./cards.json";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      highScore: 0,
      score: 0,
    };
    this.cardClicked = this.cardClicked.bind(this);
  }

  // check if a card has been clicked
  cardClicked(id) {
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let shuffledCard = this.state.cards.slice().sort(function (a, b) { return 0.5 - Math.random() });


    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      shuffledCard[shuffledCard.findIndex((card) => card.id === id)] = clickedCard;
      // set the state and increment the counter
      this.setState({
        cards: shuffledCard,
        score: this.state.score + 1,
        highScore: (this.state.score + 1 > this.state.highScore ? this.state.score + 1 : this.state.highScore),
      });
    }


    else {

      let resetGame = shuffledCard.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetGame,
        score: 0,
      });
    }
  }
  


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}/>
        {/* <Wrapper>   */}
          {this.state.cards.map(card => (
            <SailorSenshi              
              key={card.id}
              cardClicked={this.cardClicked}
              id={card.id}
              image={card.image}
              />
          ))}
        {/* </Wrapper> */}
        <footer className="footer">
					© 2018 UNC Nesmith Production
          <a href="https://github.com/Nesmith05">GitHub</a>
		    </footer>
      </Wrapper>
    );
  }
}

export default App;
