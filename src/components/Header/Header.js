import React from "react";
import "./Header.css";

const Header = props => (

      <nav>
      <ul>
        <span><img src="https://fontmeme.com/permalink/181118/59db750078cea0a73c13b85a2edcc5d5.png" alt="logo"></img></span>
        <br></br>
        <span id="score">Score: {props.score}</span>
  
        <span id="highscore">Top Score: {props.highScore}</span>
      </ul>
    </nav>

);
export default Header;