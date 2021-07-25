import React from "react";
import HeaderText from "./HeaderText";
import HeaderMenu from "./HeaderMenu";
const AppHeader = ({ Header }) => {
  return (
    <div className="Header">
      <HeaderText />
      <HeaderMenu />
    </div>
  );
};
export default AppHeader;
