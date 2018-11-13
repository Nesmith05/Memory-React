import React from "react";
import "./SailorSenshi.css";

const SailorSenshi = props => (
    <div onClick={() => props.handleClick()}className = "container">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default SailorSenshi;
