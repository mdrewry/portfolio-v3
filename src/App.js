import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import { useSpring, animated, config } from "react-spring";
import TopNavigation from "./Components/Navigation/TopNavigation";
const { Header, Footer, Content } = Layout;

function App() {
  const isDesktop = useMediaQuery({ query: "(min-device-width:1224px)" });
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  return (
    <Layout className="App">
      <Header className="Header">
        {isDesktop && (
          <animated.div style={props}>
            <h1 className="Title"> Mark Drewry </h1>
          </animated.div>
        )}
        <div className="Grow" />
        <TopNavigation />
      </Header>
      <Content className="Content">
        <h1 className="Title"> Content </h1>
      </Content>
      <Footer className="Footer">Footer</Footer>
    </Layout>
  );
}

export default App;
