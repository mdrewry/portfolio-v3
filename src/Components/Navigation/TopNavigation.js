import "./styles.css";
import React, { useState } from "react";
import { useChain, useTrail, a, animated } from "react-spring";
import { MenuOutlined } from "@ant-design/icons";
import NavButton from "./NavButton";
const Menu = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    from: { opacity: 0, height: 0 },
  });
  return (
    <div className="Menu">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpenMenu((curr) => !curr);
  };
  return (
    <div className="MenuWrapper">
      <button className="MenuButton" onClick={handleOpen}>
        <MenuOutlined />
      </button>
      <Menu open={openMenu}>
        <NavButton text="Experience" />
        <NavButton text="Projects" />
        <NavButton text="Contact" />
        <NavButton text="About" />
      </Menu>
    </div>
  );
};
export default MobileNav;
