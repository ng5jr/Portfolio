import styled, { keyframes } from "styled-components";
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
    opacity: 0;
		transform: translateX(-200%);

	}
	100%{
    opacity: 1;
		transform: translateX(0);

		}
`;

export const HomeSocial = styled.div`
  position: absolute;

  opacity: 0;
  display: flex;
  align-items: center;
  column-gap: 3.5rem;
  will-change: transform;
  animation: ${slideSocialContainer} 1s ease-out forwards;
  animation-delay: 2s;
  left: 1rem;
  top: -2rem;
  transform: scale(0.8);
  @media (min-width: 768px) {
    top: -1rem;
  }
`;

export const HomeSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  margin-top: 2rem;
  flex-direction: column;
`;

export const HomeSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  color: ${COLORS.secondary};
  height: 25px;
  width: 25px;
  font-size: 18px;
  transform: translateY(0) scale(1.6);
  filter: drop-shadow(5px 0px 3px #09090994);
  will-change: transform;
  .social-1 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 2.7s;
  }
  .social-2 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 3s;
  }
  .social-3 {
    animation: ${showLinks} 1s ease-out forwards;
    animation-delay: 3.3s;
  }

  img {
    height: 25px;
    width: 25px;
  }
  /* &:hover {
    transform: scale(1.3) translateY(0.25rem);
  } */

  margin-bottom: 1.5rem;
  /* &:hover {
    transform: scale(1.3) translateY(0);
  } */
  &:hover {
    transform: scale(1.3) translateY(0.25rem);
  }
`;
