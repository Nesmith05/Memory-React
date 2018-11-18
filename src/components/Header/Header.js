import React from "react";
import "./Header.css";

const Header = props => (
    // <nav className="navbar navbar-light bg-light">
    //     <div className="title">{props.children}</div>
    //     <div className="scores">
    //         Score: {props.score} Highscore: {props.highscore}
    //     </div>
    // </nav>"https://fontmeme.com/permalink/181118/59db750078cea0a73c13b85a2edcc5d5.png""https://fontmeme.com/permalink/181118/37a873a6010337435d97c8719eab2ada.png"
      <nav>
      <ul>
        {/* <li className="navbar"> */}
        {/* </li> */}
          <span><img src="https://fontmeme.com/permalink/181118/59db750078cea0a73c13b85a2edcc5d5.png" alt="logo"></img></span>
        {/* </li> */}
        <br></br>
        <span id="score">Score: {props.score}</span>
  
        <span id="highscore">Top Score: {props.highScore}</span>
      </ul>
    </nav>
    // <nav className="navbar">
    //     <ul>
    //         <li className="brand">
    //             <a href="/">Clicky Game</a>
    //         </li>
    //         <li className="">Click an image to begin!</li>
    //         <li>Score: 0 | Top Score: 0</li>
    //     </ul>
    // </nav>
);
export default Header;