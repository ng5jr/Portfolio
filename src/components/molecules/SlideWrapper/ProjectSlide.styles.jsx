import styled, { css } from "styled-components";
import {
  showSwiperProjects,
  showDescProject,
} from "../../../helpers/Animations/objectAnimations";
import COLORS from "../../../theme/constants/colors";

export const SlideWrapper = styled.figure`
  border-radius: 25px;
  display: grid;

  height: 100%;
  overflow: hidden;
  place-items: center;
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
    aspect-ratio: 1/1;

    width: 100%;
  }
  .gray {
    filter: grayscale(100%) blur(2px);

    transition: all 1s;
  }
  &:focus {
    div {
      border: 2px solid red;
    }
  }
`;

export const CaptionContainer = styled.figcaption`
  background-color: ${COLORS.secondary};
  bottom: 0;
  display: flex;
  place-items: center;
  justify-content: space-around;
  height: 2rem;
  position: absolute;
  width: 100%;
  z-index: 4;
  height: 2.5rem;
  color: ${COLORS.background};
  font-size: 1.5rem;
  /* ::before {
    content: "+";
    height: 20px;
    display: grid;
    place-items: center;
    top: -20px;
    position: absolute;
    width: 40px;
    background-color: ${COLORS.secondary};
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    font-weight: bold;
  } */
  p {
    color: ${COLORS.background};
    font-family: Bungee, cursive;
    font-size: 1.5rem;
    text-align: center;
  }
  svg {
    display: grid;
    place-items: center;
  }
`;

export const ButtonMore = styled.div`
  display: grid;
  place-items: center;
  top: -20px;
  position: absolute;
  width: 40px;
  font-size: 20px;
  background-color: ${COLORS.secondary};
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: bold;
  svg {
    font-size: 25px;
  }
`;

export const DescriptionContainer = styled.div`
  background-color: ${COLORS.background};
  border-radius: 25px;
  bottom: ${(props) => (props.showDesc ? 0 : "-100%")};
  display: grid;
  height: 90%;
  position: absolute;
  width: 80%;
  z-index: 3;
  place-items: center;
  transition: all 0.5s;
  transition-timing-function: ease-in;
  background: rgba(31, 31, 32, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  /* -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(31, 31, 32, 0.3); */

  p {
    color: ${COLORS.white};

    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
`;

export const LinkTo = styled.a`
  background-color: ${COLORS.secondary};
  font-size: 1.5rem;
  border-radius: 100%;
  padding: 10px;
  margin-bottom: 30px;
  color: ${COLORS.background};
`;
