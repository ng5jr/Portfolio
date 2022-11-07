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
  @media screen and (min-height: 1000px) {
    justify-content: center;
    margin-top: -50px;
  }
`;

export const ImageWrapper = styled.div`
  will-change: transform opacity;
  animation: ${showImage} 1s forwards;
  animation-delay: 0.5s;
  opacity: 0;
  width: 100vw;
  display: grid;
  place-items: center;
  @media (min-width: 768px) {
    width: 400px;
  }
  .home_image {
    filter: drop-shadow(30px 0px 4px #09090960);
    /* margin: 30px 0; */
  }
  @media (min-width: 0px) {
    margin: 30px 0;
  }
  @media (min-width: 768px) {
    margin: 30px 0 0 0;
  }
  @media (min-width: 1200px) {
    margin: 10px 0 0 0;
  }
`;
