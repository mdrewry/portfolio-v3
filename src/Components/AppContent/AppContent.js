import React from "react";
import { Layout } from "antd";
import { Element } from "react-scroll";
import AboutMe from "../Card/AboutMe/AboutMe";
import Experience from "../Card/Experience/Experience";
import Project from "../Card/Project/Project";
import ContactMe from "../Card/ContactMe/ContactMe";
import { experience, projects } from "../../List";
const { Content } = Layout;
const AppContent = () => {
  return (
    <Content className="Content">
      <Element name="about" />
      <section className="PageSection">
        <AboutMe />
      </section>
      <Element name="experience" />
      <section className="PageSection">
        {experience.map((item) => (
          <Experience item={item} />
        ))}
      </section>
      <Element name="projects" />
      <section className="PageSection">
        {projects.map((item) => (
          <Project item={item} />
        ))}
      </section>
      <Element name="contact" />
      <section className="PageSection">
        <ContactMe />
      </section>
    </Content>
  );
};

export default AppContent;
