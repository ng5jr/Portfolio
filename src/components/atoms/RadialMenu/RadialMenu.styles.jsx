import styled from "styled-components";
import COLORS from "../../../theme/constants/colors";
import { grow } from "../../../helpers/Animations/objectAnimations";

export const RadialMenuWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 1s;
  font-size: 1.5rem;
  transform: scale(0);
  animation: ${grow} 1s forwards;
  animation-delay: 1s;
  color: black;

  svg {
    color: black;
  }
  a {
    text-decoration: none !important;
    display: grid;
    place-items: center;
  }
`;

export const SettingsWrapper = styled.div`
  outline: 1px solid black;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${COLORS.secondary};
  border-radius: 100%;
  display: grid;
  place-items: center;
  box-shadow: 5px 5px 3px rgb(0 0 0);
  transition: all 0.5s;
  :hover {
    box-shadow: 5px 3px 1px rgb(0 0 0);
  }
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  z-index: -5;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 100%;

  transform: ${({ open, x, y }) =>
    open ? `translateX(${x}rem) rotate(360deg)` : ""};
  transition: all 1s;
`;
