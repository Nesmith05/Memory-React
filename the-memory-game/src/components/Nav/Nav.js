import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-text">
            Navbar text with an inline element
        </span>
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
export default Nav;