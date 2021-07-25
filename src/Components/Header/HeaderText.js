import React, { useState } from "react";
import { useTransition, a } from "@react-spring/web";
const HeaderText = () => {
  const [currPos, setCurrPos] = useState(0);
  const [toggle, setToggle] = useState(false);
  const titles = ["React", "Javascript", "Java", "Python", "Git"];
  const transitions = useTransition(currPos, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 300,
    config: { duration: 5000 },
    onRest: () => {
      setToggle(!toggle);
      setCurrPos((currPos + 1) % titles.length);
    },
  });
  return (
    <div className="TitleWrapper">
      {transitions(({ opacity }, pos) => (
        <a.div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: opacity.to({
              range: toggle ? [0.0, 1.0] : [1.0, 0.0],
              output: toggle ? [0, 1] : [1, 0],
            }),
          }}
        >
          <h1 className="Title">{titles[pos]}</h1>
        </a.div>
      ))}
    </div>
  );
};
export default HeaderText;
