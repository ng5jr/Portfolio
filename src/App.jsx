import { useState } from "react";
import Header from "./components/molecules/Header/Header";
import MainSection from "./components/containers/organisms/MainSection/MainSection";
import "./App.css";
import Scroll from "./components/atoms/Scroll/Scroll";
import { DeviceProvider } from "./context/DeviceContext";
import RadialMenu from "./components/atoms/RadialMenu/RadialMenu";
import { AudioContext, AudioProvider } from "./context/AudioContext";
import Cursor from "./components/atoms/Cursor/Cursor";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollIcon, setScrollIcon] = useState(true);

  return (
    <div className="App">
      <DeviceProvider>
        <AudioProvider>
          <Header setIndex={setActiveIndex} activeIndex={activeIndex} />
          <MainSection
            setIndex={setActiveIndex}
            activeIndex={activeIndex}
            scrollIcon={scrollIcon}
            setScrollIcon={setScrollIcon}
          />
          {scrollIcon && <Scroll />}
          <RadialMenu />
          <Cursor />
        </AudioProvider>
      </DeviceProvider>
    </div>
  );
}

export default App;
