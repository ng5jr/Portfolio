import React from "react";
import {
  InfoIconsWrapper,
  InfoTitle,
  StackInfoWrapper,
} from "./StackInfo.styles";
import {
  DiCss3,
  DiJavascript,
  DiReact,
  DiSass,
  DiNpm,
  DiDrupal,
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiBootstrap,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiWebgl,
  SiSwiper,
  SiFigma,
  SiJira,
  SiTrello,
  SiFirebase,
  SiContentful,
} from "react-icons/si";

const StackInfo = () => {
  return (
    <StackInfoWrapper>
      <InfoTitle>
        <span>I usually code using:</span>
      </InfoTitle>
      <InfoIconsWrapper>
        <AiFillHtml5 />
        <DiCss3 />
        <DiSass />
        <DiJavascript />
        <SiTypescript />
        <SiNodedotjs />
        <DiReact />
        <SiStyledcomponents />
        <SiNextdotjs />
        <SiWebgl />
        <SiGraphql />
        <SiBootstrap />
        <SiSwiper />
        <DiNpm />
        <FaGitAlt />
        <SiContentful />
        <DiDrupal />
        <SiFirebase />
        <SiFigma />
        <SiJira />
        <SiTrello />
      </InfoIconsWrapper>
      <InfoTitle>
        <span>But I'm always learning more!</span>
      </InfoTitle>
    </StackInfoWrapper>
  );
};

export default StackInfo;
