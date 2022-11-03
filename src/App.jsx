import { useState, useRef } from "react";
import Header from "./components/molecules/Header/Header";
import World from "./components/TestSpline";
import MainSection from "./components/containers/organisms/MainSection/MainSection";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <Header setIndex={setActiveIndex} activeIndex={activeIndex} />
      <MainSection
        setIndex={setActiveIndex}
        activeIndex={activeIndex}
      ></MainSection>
    </div>
  );
}

export default App;
