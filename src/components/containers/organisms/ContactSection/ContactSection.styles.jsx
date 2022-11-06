import styled, { css, keyframes } from "styled-components";
import {
  showTitles,
  slideRightContactSection,
  slideLeft,
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
  animation-delay: 0.5s;
  margin: 10px 0 0;
  opacity: 0;
  width: 95vw;
  display: grid;
  place-items: center;
  .home_image {
    filter: drop-shadow(30px 0px 4px #09090960);
  }
`;

export const AboutDataContainer = styled.div`
  align-items: center;
  animation: ${slideLeft} 1s forwards;
  animation-delay: 1s;
  background-color: ${COLORS.secondary};
  border-radius: 25px;
  color: ${COLORS.background};
  display: flex;
  filter: drop-shadow(30px 0px 4px #09090960);
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 3rem;
  transform: translateX(-150%);
  width: 85vw;
`;

export const Description = styled.h2`
  animation-delay: 1.5s;
  font-family: "Bungee", cursive;
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin-bottom: 0;
`;

export const DescriptionMore = styled.div`
  padding: 1rem 3rem 1rem 1rem;
  transform: translateX(150%);
  animation: ${slideRightContactSection} 1s forwards;
  animation-delay: 2s;
  background-color: ${COLORS.white};
  border-radius: 25px;
  filter: drop-shadow(30px 0px 4px #09090960);
  margin-top: 1rem;
  p {
    font-family: Bungee;
    /* animation: ${showTitles} 1s forwards; */
    animation-delay: 1.8s;
    color: ${COLORS.primary};
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.2rem;
    /* opacity: 0; */

    text-align: right;
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
