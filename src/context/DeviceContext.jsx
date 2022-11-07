import useWindowDimensions from "../helpers/Animations/hooks/useWindowDimensions";
import { createContext, useEffect, useState, Provider } from "react";

// Declare the context
const DeviceContext = createContext({
  isDesktop: true,
  isTablet: false,
  isSmallTablet: false,
  isMobile: false,
});

const DeviceProvider = (props) => {
  // State for desktop, tablet, and mobile breakpoints
  const [isDesktop, setDesktop] = useState(true);
  const [isTablet, setTablet] = useState(false);

  const [isMobile, setMobile] = useState(false);
  // Get the window dimensions
  const { width } = useWindowDimensions();
  // Check the window dimensions and set the breakpoints
  useEffect(() => {
    // Verify if the width is a number
    if (typeof width === "number") {
      // Check if the width is greater than the desktop breakpoint
      if (width >= 1200) {
        setDesktop(true);
        setTablet(false);

        setMobile(false);
      }
      // Check if the width is greater than the tablet breakpoint
      else if (width >= 768 && width < 1200) {
        setDesktop(false);
        setTablet(true);

        setMobile(false);
      }
      // Check if the width is greater than the mobile breakpoint
      else if (width < 768) {
        setDesktop(false);
        setTablet(false);
        setMobile(true);
      }
    }
  }, [width]);

  // Return the context provider
  return (
    <DeviceContext.Provider value={{ isDesktop, isTablet, isMobile }}>
      {props.children}
    </DeviceContext.Provider>
  );
};

export { DeviceProvider, DeviceContext };
