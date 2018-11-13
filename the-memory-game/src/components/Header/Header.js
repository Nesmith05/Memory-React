import React from "react";
import "./Header.css";

const Header = props => (
    // <nav className="navbar navbar-light bg-light">
    //     <div className="title">{props.children}</div>
    //     <div className="scores">
    //         Score: {props.score} Highscore: {props.highscore}
    //     </div>
    // </nav>
      <nav>
      <ul>
        <li className="navbar">
          <div>{props.title}</div>
        </li>
  
        <span id="cur-sco">Score: {props.score}</span>
  
        <span id="top-sco">Top Score: {props.topScore}</span>
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