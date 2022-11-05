import styled, { css, keyframes } from "styled-components";
import {
  showTitles,
  slideRight,
  slideLeft,
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
  margin: 10px 0 0;
  .home_image {
    animation: ${showImage} 1s forwards;
    animation-delay: 0.5s;
    filter: drop-shadow(30px 0px 4px #09090960);
    opacity: 0;
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
  padding: 1rem 3rem 1rem 0.5rem;
  transform: translateX(150%);
  width: 85vw;
  animation: ${slideRight} 1s forwards;
  animation-delay: 2s;
  background-color: ${COLORS.primary};
  border-radius: 25px;
  filter: drop-shadow(30px 0px 4px #09090960);
  margin-top: 1rem;
  p {
    font-family: Bungee;
    /* animation: ${showTitles} 1s forwards; */
    animation-delay: 1.8s;
    color: ${COLORS.secondary};
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.2rem;
    /* opacity: 0; */

    text-align: right;
  }
`;
