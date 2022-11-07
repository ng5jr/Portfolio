import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  // Initialize state with undefined to indicate loading.
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // Handle the event of the window being resized.
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Add event listener.
    window.addEventListener("resize", handleResize);
    // Call handler function on mount.
    handleResize();
    // Remove event listener on unmount.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return state.
  return windowSize;
};

export default useWindowDimensions;
