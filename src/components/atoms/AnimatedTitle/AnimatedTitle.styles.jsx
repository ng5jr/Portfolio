import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";
import {
  showTitles,
  gelatine,
} from "../../../helpers/Animations/textAnimations";

export const TitleContainer = styled.div`
  filter: drop-shadow(15px 0px 3px #09090994);
  font-weight: bold;
  transition: all 0.5s;
  @media (min-width: 0px) {
    font-size: 2.8rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  div {
    opacity: 0;
    display: inline-block;
    will-change: transform opacity;
    animation: ${gelatine} 1s forwards;
  }

  .span-0 {
    animation-delay: 1s;
  }
  .span-1 {
    animation-delay: 1.2s;
  }
  .span-2 {
    animation-delay: 1.3s;
  }
  .span-3 {
    animation-delay: 1.4s;
  }
  .span-4 {
    animation-delay: 1.5s;
  }
  .span-5 {
    animation-delay: 1.6s;
  }
  .span-6 {
    animation-delay: 1.7s;
  }
  .span-7 {
    animation-delay: 1.8s;
  }
  .span-8 {
    animation-delay: 1.9s;
    color: ${COLORS.secondary};
  }
  .span-9 {
    animation-delay: 2s;
    color: ${COLORS.secondary};
  }
  .span-10 {
    animation-delay: 2.1s;
    color: ${COLORS.secondary};
  }
  .span-11 {
    animation-delay: 2.2s;
    color: ${COLORS.secondary};
  }
  .span-12 {
    animation-delay: 2.3s;
    color: ${COLORS.secondary};
  }
  .span-13 {
    animation-delay: 2.4s;
    color: ${COLORS.secondary};
  }
  .span-14 {
    animation-delay: 2.5s;
    color: ${COLORS.secondary};
  }
  .span-15 {
    animation-delay: 2.6s;
    color: ${COLORS.secondary};
  }
  .span-16 {
    animation-delay: 2.7s;
    color: ${COLORS.secondary};
  }
  .span-17 {
    animation-delay: 2.8s;
    color: ${COLORS.secondary};
  }
`;

export const SubtitleContainer = styled.div`
  filter: drop-shadow(15px 0px 3px #09090994);
  font-weight: bold;

  transition: all 0.5s;
  @media (min-width: 0px) {
    font-size: 2rem;
    margin: 1rem 0;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
    margin: unset;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }

  span {
    opacity: 0;
    display: inline-block;
    animation: ${gelatine} 1s forwards;
    will-change: transform opacity;
  }

  .span-0 {
    animation-delay: 1.5s;
    color: ${COLORS.secondary};
    margin-right: 0.5rem;
  }
  .span-1 {
    animation-delay: 1.7s;
  }
  .span-2 {
    animation-delay: 1.8s;
  }
  .span-3 {
    animation-delay: 1.9s;
  }
  .span-4 {
    animation-delay: 2s;
  }
  .span-5 {
    animation-delay: 2.1s;
  }
  .span-6 {
    animation-delay: 2.2s;
  }
  .span-7 {
    animation-delay: 2.3s;
  }
  .span-8 {
    animation-delay: 2.4s;
  }
  .span-9 {
    animation-delay: 2.5s;
  }
  .span-10 {
    animation-delay: 2.6s;
  }
  .span-11 {
    animation-delay: 2.7s;
  }
  .span-12 {
    animation-delay: 2.8s;
  }
  .span-13 {
    animation-delay: 2.9s;
  }
  .span-14 {
    animation-delay: 3s;
    color: ${COLORS.secondary};
    margin-left: 0.5rem;
  }
`;

export const DescContainer = styled.p`
  animation: ${showTitles} 1s forwards;
  animation-delay: 3s;
  background-color: ${COLORS.secondary};
  border-radius: 20px;
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  color: ${COLORS.background};
  font-family: "Bungee";
  font-style: italic;
  opacity: 0;
  text-align: center;
  will-change: transform opacity;

  @media (min-width: 0px) {
    font-size: 1.2rem;
    line-height: 1.9rem;
    padding: 0.5rem;
    max-width: 450px;
    width: 85vw;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.3rem;
    padding: 0.8rem;
    margin-top: 1rem;
    max-width: 500px;
  }
  @media (min-width: 1200px) {
    padding: 1rem;
    max-width: 650px;
  }
`;
