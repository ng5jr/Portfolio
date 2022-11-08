import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CursorWrapper } from "./Cursor.styles";
const Cursor = () => {
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
    console.log(mousePosition);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mousePosition]);

  return (
    <CursorWrapper
      left={mousePosition.x}
      top={mousePosition.y}
      className="cursor"
    ></CursorWrapper>
  );
};

export default Cursor;
