import styled, { css, keyframes } from "styled-components";
import {
  showTitles,
  slideRightContactSection,
  slideLeft,
  slideLeftTablet,
  slideRightTablet,
} from "../../../../helpers/Animations/textAnimations";
import { grow, bounce } from "../../../../helpers/Animations/objectAnimations";
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
  animation-delay: 1s;
  margin: 10px 0 0;
  opacity: 0;
  display: grid;
  place-items: center;
  .home_image {
    filter: drop-shadow(30px 0px 4px #09090960);
  }
  @media (min-width: 0px) {
    width: 400px;
  }
`;

export const AboutDataContainer = styled.div`
  align-items: center;
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  background-color: ${COLORS.secondary};
  border-radius: 25px;
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
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

export const DescriptionMore = styled.div`
  background-color: ${COLORS.white};
  border-radius: 25px;
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  margin-top: 1rem;
  p {
    font-family: Bungee;
    color: ${COLORS.primary};
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.2rem;
  }

  @media (min-width: 0px) {
    animation: ${slideRightContactSection} 1s forwards;
    animation-delay: 2s;
    padding: 1rem 3rem 1rem 1rem;
    transform: translateX(150%);
    text-align: right;
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
    width: 300px;
    p {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }
`;

export const ContactImagesContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  transform: scale(0);
  animation: ${grow} 0.3s forwards;
  animation-delay: ${(props) => props.delay};
  top: ${(props) => props.positionX};
  left: ${(props) => props.positionY};
  @media (max-width: 1024px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContactImages = styled.img`
  cursor: pointer;
  width: 2.5rem;
  height: auto;
  animation: ${bounce} 2s ease infinite;
  animation-delay: ${(props) => props.delay};
  filter: drop-shadow(10px 0px 4px #09090960);
`;
