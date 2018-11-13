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
    
  };

  //incrementFunction
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
  }

  //clickFunction
  handleClick = event => {
    // event.preventDefault();
    this.handleIncrement();
    this.clickedStat();
    this.resetGame();

    //if you click on a picture, you get a point
    //if you click on the same picture twice, you lose and reset game.

  }
  //shuffleFunction
  //
  //change clicked stat
  clickedStat = clicked => {
    const sailorsenshi = this.state.sailorsenshi.filter(scout => scout.clicked !== clicked);
    this.setState({ sailorsenshi })
  }

  //resetFunction
  resetGame = () => {
    // if score = 12, reset game
    //if you press the same card again, reset game
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
    this.setState ({ score: 0});
    alert(`Game Over :( \nscore: ${this.state.score}`);
  }

  render() {
    return (
      <Wrapper>
          <Header score={this.state.score}    topScore={this.state.topScore}>Clicky Game</Header>
          <Title>Sailor Scouts</Title>
          {/* <container> */}
            {this.state.sailorsenshi.map(sailorscout => (
              <SailorSenshi
                id={sailorscout.id}
                image={sailorscout.image}
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
