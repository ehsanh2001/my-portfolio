import { useState } from "react";
import "./flip_card.css"; // Import the CSS file

const FlipCard = ({ children }) => {
  const handleMouseEnter = (event) => {
    //  add class hover to flip-container
    event.currentTarget.classList.add("hover");
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.classList.remove("hover");
  };
  return (
    <div
      className={"flip-container"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flipper">
        <div className="front">{children[0]}</div>
        <div className="back">{children[1]}</div>
      </div>
    </div>
  );
};

export default FlipCard;
