import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import TopNavigation from "./Components/Navigation/TopNavigation";
import NavigationHeader from "./Components/Navigation/NavigationHeader";
import AboutMe from "./Components/Card/AboutMe/AboutMe";
import FooterInfo from "./Components/Footer/FooterInfo";
const { Header, Footer, Content } = Layout;
function App() {
  const isDesktop = useMediaQuery({ query: "(min-device-width:1224px)" });
  return (
    <Layout className="App">
      <Header className="Header">
        <NavigationHeader />
        <TopNavigation />
      </Header>
      <Content className="Content">
        <section className="PageSection">
          <AboutMe />
        </section>
        <section className="PageSection">
          <AboutMe />
        </section>
        <section className="PageSection">
          <AboutMe />
        </section>
        <section className="PageSection">
          <AboutMe />
        </section>
      </Content>
      <Footer className="Footer">
        <div className="Grow" />
        <FooterInfo />
      </Footer>
    </Layout>
  );
}

export default App;
