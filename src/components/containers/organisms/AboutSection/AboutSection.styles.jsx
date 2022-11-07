import styled, { css, keyframes } from "styled-components";
import {
  showTitles,
  slideRight,
  slideRightTablet,
  slideLeft,
  slideLeftTablet,
} from "../../../../helpers/Animations/textAnimations";
import COLORS from "../../../../theme/constants/colors";

const showImage = keyframes`
	0%{
		opacity: 0;
		transform: translateY(3rem);
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
`;

export const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  animation: ${showImage} 1s forwards;
  animation-delay: 0.5s;
  margin: 10px 0 0;
  opacity: 0;
  .home_image {
    filter: drop-shadow(30px 0px 4px #09090960);
  }
`;

export const AboutDataContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.secondary};
  border-radius: 25px;
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  color: ${COLORS.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 0px) {
    width: 85vw;
    padding: 1rem 1rem 1rem 3rem;
    transform: translateX(-150%);
    animation: ${slideLeft} 1s forwards;
    animation-delay: 1s;
  }
  @media (min-width: 768px) {
    width: 600px;
    padding: 1rem 1rem 1rem 1rem;
    transform: translateX(-150vw);
    animation: ${slideLeftTablet} 2s forwards;
    animation-delay: 1s;
  }
`;

export const Description = styled.h2`
  font-family: "Bungee", cursive;
  margin-bottom: 0;
  @media (min-width: 0px) {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

export const DescriptionMore = styled.div`
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  background-color: ${COLORS.white};
  border-radius: 25px;
  margin-top: 1rem;
  p {
    color: ${COLORS.primary};
    font-family: Bungee;
    font-style: italic;
  }

  @media (min-width: 0px) {
    animation: ${slideRight} 1s forwards;
    animation-delay: 2s;
    padding: 1rem 3rem 1rem 0.5rem;
    text-align: right;
    transform: translateX(150%);
    width: 85vw;
    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    animation: ${slideRightTablet} 2s forwards;
    animation-delay: 2s;
    padding: 1rem 1rem 1rem 1rem;
    text-align: center;
    transform: translateX(150vw);
    width: 500px;
    p {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }
`;
