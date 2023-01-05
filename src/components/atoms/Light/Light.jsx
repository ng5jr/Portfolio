import React, { useState, useEffect } from "react";
import { LightWrapper } from "./Ligth.styles";

const Light = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <LightWrapper style={{ top: mousePosition.y, left: mousePosition.x }} />
  );
};

export default Light;
