import styled, { css, keyframes } from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  & > span {
    margin: 30px 0;
  }
  .home_image {
    opacity: 0;
    filter: drop-shadow(30px 0px 4px #09090960);
    /* margin: 30px 0; */
    will-change: transform opacity;
    animation: ${showImage} 1s forwards;
    animation-delay: 0.5s;
  }
`;
