import React from "react";
import "./App.css";
import { Layout } from "antd";
// import { useMediaQuery } from "react-responsive";
import TopNavigation from "./Components/Navigation/TopNavigation";
import NavigationHeader from "./Components/Navigation/NavigationHeader";
import FooterInfo from "./Components/Footer/FooterInfo";
import AppContent from "./Components/AppContent/AppContent";
const { Header, Footer } = Layout;
function App() {
  // const isDesktop = useMediaQuery({ query: "(min-device-width:1224px)" });
  return (
    <Layout className="App">
      <Header className="Header">
        <NavigationHeader />
        <TopNavigation />
      </Header>
      <AppContent />
      <Footer className="Footer">
        <div className="Grow" />
        <FooterInfo />
      </Footer>
    </Layout>
  );
}

export default App;
