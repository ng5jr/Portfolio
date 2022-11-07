import { useState } from "react";
import Header from "./components/molecules/Header/Header";
import MainSection from "./components/containers/organisms/MainSection/MainSection";
import "./App.css";
import Scroll from "./components/atoms/Scroll/Scroll";
import { DeviceProvider } from "./context/DeviceContext";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollIcon, setScrollIcon] = useState(true);

  return (
    <div className="App">
      <DeviceProvider>
        <Header setIndex={setActiveIndex} activeIndex={activeIndex} />
        <MainSection
          setIndex={setActiveIndex}
          activeIndex={activeIndex}
          scrollIcon={scrollIcon}
          setScrollIcon={setScrollIcon}
        />
        {scrollIcon && <Scroll />}
      </DeviceProvider>
    </div>
  );
}

export default App;
