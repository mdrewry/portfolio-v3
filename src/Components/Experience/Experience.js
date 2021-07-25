import React, { useState } from "react";
import LinkMenu from "./LinkMenu";
const Experience = ({ item }) => {
  const [openLinks, setOpenLinks] = useState(false);
  const handleOpen = () => {
    setOpenLinks((curr) => !curr);
  };
  return (
    <div
      className="ExperienceCard"
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
    >
      <div className="RowCenter">
        <h5 className="Title">{item.title}</h5>
        <LinkMenu openLinks={openLinks} links={item.links} />
        <div className="Grow" />
        <h5 className="SubTitle ExperienceDate">
          {item.date.start !== undefined && item.date.start}
          <br />
          {item.date.end}
        </h5>
      </div>
      <h6 className="ExperienceDescription">{item.description}</h6>
    </div>
  );
};
export default Experience;
