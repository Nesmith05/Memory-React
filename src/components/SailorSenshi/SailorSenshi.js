import React from "react";
import "./SailorSenshi.css";

// set properties for the image and the onClick event to see if the card has been clicked or not already
const SailorSenshi = props => (
    <div className="container">
      <div className="img-container">
        <img 
            className="rounded-circle" 
            src={props.image} 
            alt={"This is image " + props.name + props.id} 
            onClick={() => props.cardClicked(props.id)}

        />
      </div>
    </div>
);


export default SailorSenshi;
