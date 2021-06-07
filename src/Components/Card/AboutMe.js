import "./styles.css";
import React from "react";
import TechStack from "./TechStack";
const AboutMe = () => {
  return (
    <div className="CardWrapper">
      <div className="Card">
        <div className="CardHeaderWrapper">
          <TechStack />
          <h2 className="CardHeader">My name is Mark Drewry</h2>
        </div>
        <div className="CardContent">
          <p className="CardContentText">
            I'm a Junior Software Engineer. I enjoy working with React and other
            software.
          </p>
        </div>
      </div>
      <div className="CardShadow" />
    </div>
  );
};
export default AboutMe;
