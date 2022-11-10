import styled, { css, keyframes } from "styled-components";
import {
  showImage,
  showSwiperProjects,
} from "../../../../helpers/Animations/objectAnimations";
import { Pulse } from "../../../../helpers/Animations/objectAnimations";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  .home_image {
    opacity: 0;
    filter: drop-shadow(30px 0px 4px #09090960);
    animation: ${showImage} 1s forwards;
    animation-delay: 0.5s;
  }
`;

export const ImageWrapper = styled.div`
  animation: ${showImage} 1s forwards;
  animation-delay: 1s;
  margin: 10px 0 0;
  opacity: 0;
  > .home_image {
    filter: drop-shadow(30px 0px 4px #09090960);
  }
`;

export const InfoIconWrapper = styled.div`
  animation: ${Pulse} 1.5s infinite;
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 20%;
  transform: scale(1);
  z-index: 4;
  > span {
    animation: ${showSwiperProjects} 1s forwards;
    animation-delay: 3s;
    opacity: 0;
  }
`;
