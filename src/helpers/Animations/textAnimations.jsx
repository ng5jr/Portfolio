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
