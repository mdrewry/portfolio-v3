import React from "react";
import LinkIcon from "./LinkIcon";
const AboutMe = () => {
  const links = [
    { link: "https://github.com/mdrewry", type: "Github" },
    { link: "Resume.pdf", type: "Resume" },
    {
      link: "https://www.linkedin.com/in/mark-drewry-242850195/",
      type: "LinkedIn",
    },
  ];
  return (
    <div className="CardWrapper">
      <div className="Card">
        <div className="CardHeaderWrapper">
          <h2 className="CardHeader">My name is Mark Drewry</h2>
        </div>
        <div className="CardContent">
          <p className="CardContentText">
            I'm a Junior Software Engineer. I enjoy working with React and other
            software.
          </p>
          <div className="LinkWrapper">
            <div className="RowCenter">
              {links.map((link) => (
                <LinkIcon link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="CardShadow" />
    </div>
  );
};
export default AboutMe;
