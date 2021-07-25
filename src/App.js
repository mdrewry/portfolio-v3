import React from "react";
import "./App.css";
// import { useMediaQuery } from "react-responsive";
import AppHeader from "./Components/Header/AppHeader";
import AppFooter from "./Components/Footer/AppFooter";
import AppContent from "./Components/Content/AppContent";

function App() {
  // const isDesktop = useMediaQuery({ query: "(min-device-width:1224px)" });
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
