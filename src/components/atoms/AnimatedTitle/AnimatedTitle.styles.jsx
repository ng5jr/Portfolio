import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";
import { showTitles } from "../../../helpers/Animations/textAnimations";
const gelatine = keyframes`
  
  from{
	  transform: scale(1, 1);
	  opacity: 0;
  }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
  to{
	  transform: scale(1, 1);
	  opacity: 1;
  }
`;

export const TitleContainer = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  transition: all 0.5s;
  filter: drop-shadow(15px 0px 3px #09090994);
  div {
    opacity: 0;
    display: inline-block;
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
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.5s;
  filter: drop-shadow(15px 0px 3px #09090994);

  span {
    opacity: 0;
    display: inline-block;
    animation: ${gelatine} 1s forwards;
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
  /* font-family: "Poppins", sans-serif; */
  font-family: "Permanent Marker", cursive;
  opacity: 0;
  animation: ${showTitles} 1s forwards;
  animation-delay: 3s;
  font-size: 1.2rem;
  line-height: 1.9rem;
  max-width: 450px;
  font-style: italic;
  background-color: ${COLORS.secondary};
  color: ${COLORS.background};
  border-radius: 20px;
  @media (max-width: 900px) {
    max-width: 300px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    text-align: center;
    width: fit-content;
    filter: drop-shadow(15px 0px 3px #09090994);
    padding: 10px;
    max-width: 85vw;
  }
  /* &::before {
    content: "{ ";
    color: var(--secondaryColor);
  }
  &::after {
    content: " }";
    color: var(--secondaryColor);
  } */
`;
