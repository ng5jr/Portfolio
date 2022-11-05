import styled, { css, keyframes } from "styled-components";
export const showImage = keyframes`
	0%{
		opacity: 0;
		transform: translateY(3rem);
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
`;

export const showSwiperProjects = keyframes`
		from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;

export const showDescProject = keyframes`
	from{
		transform: translateY(110%);
	}
		to{
		transform: translateY(0);
	}

`;
