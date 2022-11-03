import React from "react";
import { ScrollWrapper, Mouse, Wheel, ScrollText } from "./Scroll.styles";

const Scroll = () => {
  return (
    <ScrollWrapper>
      <Mouse>
        <Wheel />
      </Mouse>
      <ScrollText>Scroll</ScrollText>
    </ScrollWrapper>
  );
};

export default Scroll;
