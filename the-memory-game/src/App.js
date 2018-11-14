import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SailorSenshi from "./components/SailorSenshi";
import sailorsenshi from "./sailorsenshi.json";
import Title from "./components/Title";

//loop for images
for (var i = 0; i < sailorsenshi.length; i++) {

}
class App extends Component {
  //set default
  state = {
    sailorsenshi,
    score: 0,
    topScore: 0,
    clicked: []
  };

  //incrementFunction
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (this.state.clicked === "true") {
      alert("not so fast");
    }

    if (newScore === 12) {
      alert("You win!");
    }
    // this.shuffleDeck();
    
  }

    
  

  //clickFunction
  handleClick = (event) => {
    event.preventDefault();
    this.handleIncrement();
    this.shuffleDeck();
    this.clickedStat();
   
    //if you click on the same picture twice, you lose and reset game.
    if (this.state.score >= 12) {
      this.setState({ topScore: this.state.score })
      this.resetGame();
    }
    if(sailorsenshi.clicked === false) {
      alert("woo");
      return sailorsenshi.clicked = true;

    }

  };

  //shuffleFunction
  shuffleDeck = sailorsenshi => {
    this.state.sailorsenshi.sort(() => Math.random() - 0.5)
  }
  
  //change clicked stat
  clickedStat = sailorsenshi => {
    // return sailorsenshi.clicked === "true";
    // if (sailorsenshi.clicked === "true") {

    // }
    // if (this.state.clicked.indexOf(id) === -1) {
    //   this.handleIncrement();
    //   this.setState({ clicked: this.state.clicked.concat(id)})
    // } else {
    //   this.resetGame();
    // }
    
  }

  //resetFunction
  resetGame = () => {
    // if score = 12, reset game
    //if you press the same card again, reset game
    if (this.state.score > this.state.topScore) {
      this.setState({ 
        topScore: this.state.score, 
        clicked: false,
        score: 0
      });
    }
    
  }

  render() {
    return (
      <Wrapper>
          <Header score={this.state.score}    topScore={this.state.topScore}>Clicky Game</Header>
          <Title>Sailor Scouts</Title>
          {/* <container> */}
            {this.state.sailorsenshi.map(sailorscout => (
              <SailorSenshi
                key={sailorscout.id}
                image={sailorscout.image}
                clicked={sailorscout.clicked}
                // onClick={this.handleClick}
                handleClick={this.handleClick}
              />
            ))}
          {/* </container> */}
      </Wrapper>
      //Footer
    );
  }

};

export default App;
