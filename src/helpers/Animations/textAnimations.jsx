import styled, { css, keyframes } from "styled-components";
export const showTitles = keyframes`
	0%{
		opacity: 0;
		transform: translateY(3rem);
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
`;

export const slideLeft = keyframes`
	0%{
		transform: translateX(-150%);
	}
	100%{
		transform: translateX(-35px);
	}
`;

export const slideLeftTablet = keyframes`
	0%{
		transform: translateX(-150vw);
	}
	100%{
		transform: translateX(0);
	}
`;

export const slideRight = keyframes`
	0%{
		transform: translateX(150%);
	}
	100%{
		transform: translateX(35px);
	}
`;

export const slideRightTablet = keyframes`
	0%{
		transform: translateX(150vw);
	}
	100%{
		transform: translateX(0);
	}
`;

export const slideRightContactSection = keyframes`
	0%{
		transform: translateX(150%);
	}
	100%{
		transform: translateX(45%);
	}
`;

export const gelatine = keyframes`
  
  from{
	  transform: scale(1, 1);
	  opacity: 0;
  }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
  to{
	  transform: scale(1, 1);
	  opacity: 1;
  }
`;
