import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SailorSenshi from "./components/SailorSenshi";
import sailorsenshi from "./sailorsenshi.json";


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

  //clickFunction
  handleClick = (event) => {
    event.preventDefault();
    this.shuffleDeck();
    this.handleIncrement();

    this.clickedStat();
   
    //if you click on the same picture twice, you lose and reset game.
    if (this.state.score >= 12) {
      this.setState({ topScore: this.state.score })
      this.resetGame();
    }
    if(sailorsenshi.clicked === false) {
      alert("woo");
      // this.handleIncrement();
      return {clicked: true}

    }
    if(sailorsenshi.clicked === true) {
      alert("boo");
      this.handleIncrement();
      this.resetGame();
    }
    

    // if (sailorsenshi.clicked = false) {
    //   sailorsenshi.clicked = true;

    // }

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
          <Header score={this.state.score}    topScore={this.state.topScore}>Sailor Scouts</Header>
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
//pseudocode
// still need to get it to recognize whether it is clicked = true or false and work on design

export default App;
