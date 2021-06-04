import "./App.css";
import NavButton from "./Components/NavButton/NavButton";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 className="Title"> Mark Drewry </h1>
        <div className="Grow" />
        <NavButton text="About" />
        <NavButton text="Projects" />
        <NavButton text="Experience" />
        <NavButton text="Contact" />
      </div>
    </div>
  );
}

export default App;
