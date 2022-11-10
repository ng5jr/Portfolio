import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";
import {
  gelatine,
  showSwiperProjects,
} from "../../../helpers/Animations/objectAnimations";

export const StackInfoWrapper = styled.div`
  animation: ${showSwiperProjects} 1s forwards;
  animation-delay: 1.5s;
  opacity: 0;
`;
export const InfoIconsWrapper = styled.div`
  align-items: center;
  background-color: ${COLORS.secondary};
  border-radius: 2rem;
  box-shadow: 5px 5px 3px rgb(0 0 0);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;

  svg {
    color: ${COLORS.background};
    font-size: 2.5rem;
  }
  svg:hover {
    animation: ${gelatine} 1s;
    color: ${COLORS.white};
    transition: all 0.5s;
    cursor: crosshair;
  }
  @media (min-width: 0px) {
    width: 90vw;
  }
  @media (min-width: 768px) {
    gap: 20px;
    width: 70vw;
    svg {
      font-size: 3rem;
    }
  }
  @media (min-width: 1200px) {
    gap: 30px;
    width: 600px;
  }
`;

export const InfoTitle = styled.h2`
  color: ${COLORS.white};
  font-family: Bungee, cursive;
  filter: drop-shadow(10px 0px 4px #09090960);
  text-align: center;
  line-height: 2rem;
  width: 100%;
  margin: 0.3rem;
  span {
    color: ${COLORS.secondary};
    font-family: "Poppins", sans-serif;
    display: block;
    margin-top: 0.5rem;
  }
  @media (min-width: 0px) {
    font-size: 1.5rem;
    max-width: 90vw;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
  }
`;
