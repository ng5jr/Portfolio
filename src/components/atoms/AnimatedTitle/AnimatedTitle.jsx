import { useState } from "react";
import React from "react";
import {
  TitleContainer,
  SubtitleContainer,
  DescContainer,
} from "./AnimatedTitle.styles";

const AnimatedTitle = () => {
  const [letters, setLetters] = useState([
    "H",
    "i",
    ",",
    ".",
    "I",
    "'",
    "m",
    ".",
    "N",
    "a",
    "h",
    "u",
    "e",
    "l",
  ]);
  const [subtitle, setSubtitle] = useState([
    "-",
    "W",
    "e",
    "b",
    ".",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "-",
  ]);
  return (
    <>
      <TitleContainer>
        {letters.map((letter, i) => {
          return letter !== "." ? (
            <div key={letter + i} className={"span-" + i++}>
              {letter}
            </div>
          ) : (
            <a key={"emtpy" + i}> </a>
          );
        })}
      </TitleContainer>
      <SubtitleContainer>
        {subtitle.map((letter, i) => {
          return letter !== "." ? (
            <span key={letter + i} className={"span-" + i++}>
              {letter}
            </span>
          ) : (
            <b key={"emtpy" + i}> </b>
          );
        })}
      </SubtitleContainer>
      <DescContainer>
        I love to create useful stuff to make people's lifes easier
      </DescContainer>
    </>
  );
};

export default AnimatedTitle;
