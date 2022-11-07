import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";
import { showImage } from "../../../helpers/Animations/objectAnimations";
export const CvContainer = styled.div`
  animation: ${showImage} 1s forwards;
  animation-delay: 3s;
  margin: 1rem;
  opacity: 0;
  transform: translateY(3rem);
  a {
    text-decoration: none;
  }
  div {
    width: 150px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: ${COLORS.secondary};
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 3px rgb(0, 0, 0);
    background: ${COLORS.secondary};
    /* filter: drop-shadow(0px 0px 20px rgb(219, 155, 7)); */
  }

  div,
  div span {
    transition: 200ms;
  }

  div .text {
    transform: translateX(25px);
    color: ${COLORS.primary};
    font-weight: bold;
    font-family: Bungee, cursive;
  }

  div .icon {
    position: absolute;
    border-left: 1px solid ${COLORS.background};
    transform: translateX(110px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    svg {
      transform: scale(1.1);
    }
  }

  div:hover {
    svg {
      transform: scale(1.5);
      transition: all 0.2s;
    }
  }

  div svg {
    width: 15px;
    fill: #eee;
  }

  div:hover {
    background: ${COLORS.secondary};
  }

  div:hover .text {
    color: transparent;
  }

  div:hover .icon {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }

  div:focus {
    outline: none;
  }

  div:active .icon svg {
    transform: scale(1.2);
  }

  div:active {
    box-shadow: 2px 2px 1px rgb(0, 0, 0);
  }
`;
