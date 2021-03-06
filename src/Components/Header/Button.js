import React from "react";
import "./styles.css";
const NavButton = ({ text, handleClick }) => {
  return (
    <div className="NavButtonWrapper">
      <button
        onClick={() => handleClick(text.toLowerCase())}
        className="Button"
      >
        {text}
      </button>
    </div>
  );
};
export default NavButton;
