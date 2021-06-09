import "./styles.css";
import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { MenuOutlined } from "@ant-design/icons";
import { scroller } from "react-scroll";
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
  const handleClick = (location) => {
    setOpenMenu((curr) => !curr);
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="MenuWrapper">
      <button className="MenuButton" onClick={handleOpen}>
        <MenuOutlined />
      </button>
      <Menu open={openMenu}>
        <NavButton handleClick={handleClick} text="Experience" />
        <NavButton handleClick={handleClick} text="Projects" />
        <NavButton handleClick={handleClick} text="Contact" />
        <NavButton handleClick={handleClick} text="About" />
      </Menu>
    </div>
  );
};
export default MobileNav;
