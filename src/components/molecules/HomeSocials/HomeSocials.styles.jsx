import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";

const showLinks = keyframes`
	0%{
		transform: translateY(0) scale(1);
	}
	50%{
		transform: translateY(0) scale(1.3);
	}
	100%{
		transform: translateY(0) scale(1);
	}
`;

const slideSocialContainer = keyframes`
	0%{
		transform: translateX(-200%);
		z-index: -5;
	}
	100%{
		transform: translateX(0);
		z-index: 1;
		}
`;

export const HomeSocial = styled.div`
  position: absolute;
  top: 3rem;

  display: flex;
  align-items: center;
  column-gap: 3.5rem;

  animation: ${slideSocialContainer} 1s ease-out forwards;

  @media (max-width: 768px) {
    left: 1rem;
    top: -1rem;
    transform: scale(0.8);
    animation: ${slideSocialContainer} 0.8s ease-out forwards;
  }
`;

export const HomeSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  h3 {
    display: inline;
    margin-right: 20px;
    font-weight: 400;
  }
  h3::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: white;
    top: 50%;
    right: 50%;
    margin-left: 5px;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    h3 {
      display: none;
    }
  }
`;

export const HomeSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  color: ${COLORS.secondary};
  height: 25px;
  width: 25px;
  transform: translateY(0) scale(1.3);
  filter: drop-shadow(5px 0px 3px #09090994);
  .social-1 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 0.7s;
  }
  .social-2 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 1s;
  }
  .social-3 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 1.3s;
  }

  img {
    height: 25px;
    width: 25px;
  }
  &:hover {
    transform: scale(1.3) translateY(0.25rem);
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    &:hover {
      transform: scale(1.3) translateY(0);
    }
    &:active {
      transform: scale(1.3) translateY(0.25rem);
    }
  }
`;
