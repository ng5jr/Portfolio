import styled, { css, keyframes } from "styled-components";
import {
  showImage,
  showSwiperProjects,
} from "../../../../helpers/Animations/objectAnimations";

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
