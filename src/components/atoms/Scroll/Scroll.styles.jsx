import styled, { css, keyframes } from "styled-components";
import COLORS from "../../../theme/constants/colors";

const Scrolling = keyframes`
	0%{
		opacity: 1;
	 top: 0.3rem;
	}
	85%{
			opacity: 1;
	 top: 0.9rem;
	}
 100%{
  	opacity: 0;
   top: 0.9rem;
 }
`;

const ScrollAppear = keyframes`
 from{
  opacity: 0;
 }
 to{
  opacity: 1;
 }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  opacity: 0;
  animation: 2s ease 5s forwards ${ScrollAppear};
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
    animation: 3s ease 0s infinite normal none running ${Scrolling};
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

export const ScrollText = styled.p`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-family: "Bungee", cursive;
  font-size: 0.9rem;
  font-weight: 100;
  line-height: 0.9rem;
  color: ${COLORS.white};
`;
