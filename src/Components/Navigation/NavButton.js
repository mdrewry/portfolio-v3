import React from "react";
import "./styles.css";
const NavButton = ({ text }) => {
  return (
    <div className="NavButtonWrapper">
      <button className="Button">{text}</button>
    </div>
  );
};
export default NavButton;
