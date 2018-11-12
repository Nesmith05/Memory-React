import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import SailorSenshi from "./components/SailorSenshi";
import sailorsenshi from "./sailorsenshi.json";
import Title from "./components/Title";

//loop for images
for (var i = 0; i < sailorsenshi.length; i++) {

}
class App extends Component {
  //set default

  //incrementFunction
  handleIncrement = () => {

  }
  scoreIncrement = () => {

  }
  //clickFunction
  handleClick = event => {
    event.preventDefault();
    //if you click on a picture, you get a point
    //if you click on the same picture twice, you lose and reset game.
    this.handleIncrement()

  }
  //shuffleFunction

  //resetFunction
  resetGame = () => {
    
  }

  render() {
    return (
      <Wrapper>
      <Nav>
      <Title>Sailor Scouts</Title>
      <SailorSenshi
        id={sailorsenshi.id}
        image={sailorsenshi.image}
      />
      </Nav>
    </Wrapper>
    )

}
  




};

export default App;
