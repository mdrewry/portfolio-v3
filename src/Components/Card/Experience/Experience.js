import React from "react";

const Experience = ({ item }) => {
  return (
    <div className="ExperienceCard">
      <div className="RowCenter">
        <h5 className="Title">{item.title}</h5>
        <div className="Grow" />
        <h5 className="SubTitle ExperienceDate">
          {item.date.start}
          <br />
          {item.date.end}
        </h5>
      </div>
      <h6 className="ExperienceDescription">{item.description}</h6>
    </div>
  );
};
export default Experience;
