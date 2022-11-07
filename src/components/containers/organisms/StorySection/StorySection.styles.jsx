import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../../theme/constants/colors";
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CardWrapper = styled.div`
  background-color: ${COLORS.secondary};
  border-radius: 1.5rem;
  box-shadow: 5px 5px 3px rgb(0 0 0);
  position: relative;
  display: flex;
  @media (min-width: 0px) {
    height: 200px;
    padding: 1rem;
    overflow: hidden;
    width: 80vw;
  }
`;

export const InteractTitle = styled.h2`
  color: ${COLORS.primary};
  font-family: Bungee, cursive;
  font-size: 2rem;
  height: 100%;
  text-align: center;
  width: 100%;
  span {
    color: ${COLORS.background};
    font-family: "Permanent Marker", cursive;
    font-weight: 100;
    display: block;
    margin-top: 1rem;
  }
`;

export const InformationWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  @media (min-width: 0px) {
    height: 100%;
    width: 90%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: 768px) {
    height: 300px;
    padding: 2.5rem 2.5rem 4.5rem;
    width: 500px;
  }
  @media (min-width: 1200px) {
  }
`;

export const InfoTitle = styled.h2`
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  font-family: Bungee, cursive;
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 2.1rem;
  color: ${COLORS.background};
  span {
    color: red;
  }
  p {
    display: block;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4rem;
    color: rgb(51, 51, 51);
    white-space: pre-line;

    text-align: left;
  }
`;

export const ScrollUp = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  color: ${COLORS.primary};
`;
export const ScrollDown = styled.div`
  bottom: 0rem;
  font-size: 1.5rem;
  right: 0.5rem;
  position: absolute;
  cursor: pointer;
  color: ${COLORS.primary};
`;
