import React from "react";
import "./styles.css";
const Project = ({ item }) => {
  return (
    <div className="ExperienceCard">
      <h5 className="Title">{item.title}</h5>
      <h6 className="ExperienceDescription">{item.description}</h6>
    </div>
  );
};
export default Project;
