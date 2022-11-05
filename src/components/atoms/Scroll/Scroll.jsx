import React from "react";
import { ScrollWrapper, Mouse, Wheel, ScrollText } from "./Scroll.styles";

const Scroll = () => {
  return (
    <ScrollWrapper>
      <Mouse>
        <Wheel />
      </Mouse>
      <ScrollText>
        <span>S</span>
        <span>c</span>
        <span>r</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
      </ScrollText>
    </ScrollWrapper>
  );
};

export default Scroll;
