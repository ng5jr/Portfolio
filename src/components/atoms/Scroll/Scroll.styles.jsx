import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";

const Scrolling = keyframes`
	0%{
	 opacity: 1;
	 top: 0.3rem;
	}
	90%{
	 opacity: 1;
	 top: 0.9rem;
	}
  100%{
  	opacity: 0;
    top: 0.9rem;
 }
`;

const ScrollAppear = keyframes`
 0%{
  opacity: 0;
 }
 25% {
  opacity: 1;
 }
75% {
  opacity: 1;
 }
 100%{
  opacity: 0;
 }
`;

const Bounce = keyframes`
 0%{
  transform: translateY(0);
 }

 50%{
transform: translateY(-50%);
 }
 100%{
  transform: translateY(0);
 }

`;

export const ScrollWrapper = styled.div`
  animation: 5s ease 5s forwards ${ScrollAppear};
  align-items: center;
  bottom: 1rem;
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: 1rem;
  z-index: 15;

  @media (min-width: 1200px) {
    right: 2rem;
    width: unset;
  }
`;

export const Mouse = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: inline-block;
  width: 1rem;
  height: 1.5rem;
  vertical-align: middle;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 1rem;
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 2px 5px;
  position: relative;
  margin-right: 15px;
  & > div {
    animation: 2s ease 0s infinite normal none running ${Scrolling};
  }
`;

export const Wheel = styled.div`
  background-color: rgb(255, 255, 255);
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  top: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const ScrollText = styled.div`
  color: ${COLORS.white};
  span {
    display: inline-block;
    transform: translateY(0);
    font-family: "Bungee", cursive;
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 0.9rem;
    animation: 0.8s ease 0s forwards ${Bounce};
    vertical-align: middle;
    text-align: left;
  }
  span:nth-child(1) {
    animation-delay: 5.5s;
  }
  span:nth-child(2) {
    animation-delay: 5.7s;
  }
  span:nth-child(3) {
    animation-delay: 5.9s;
  }
  span:nth-child(4) {
    animation-delay: 6.1s;
  }
  span:nth-child(5) {
    animation-delay: 6.3s;
  }
  span:nth-child(6) {
    animation-delay: 6.5s;
  }
`;
