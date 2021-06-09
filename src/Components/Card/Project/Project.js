import React from "react";
import "./styles.css";
const Project = ({ item }) => {
  return (
    <div>
      <h5>{item.title}</h5>
      <h6>{item.description}</h6>
    </div>
  );
};
export default Project;
