import React from "react";
import { Element } from "react-scroll";
import { Divider } from "antd";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import ContactMe from "../ContactMe/ContactMe";
import { Layout } from "antd";
import { experience, projects } from "../../List";
const { Content } = Layout;
const AppContent = () => {
  return (
    <Content className="Content">
      <Element name="about" />
      <section className="PageSection">
        <AboutMe />
      </section>
      <Divider className="AppContent-divider">Experience</Divider>
      <Element name="experience" />
      <section className="PageListSection">
        {experience.map((item, index) => (
          <Experience key={index} item={item} />
        ))}
      </section>
      <Divider className="AppContent-divider">Projects</Divider>
      <Element name="projects" />
      <section className="PageListSection">
        {projects.map((item, index) => (
          <Experience key={index} item={item} />
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
