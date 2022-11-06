import styled, { css } from "styled-components";
import { showSwiperProjects } from "../../../helpers/Animations/objectAnimations";
import COLORS from "../../../theme/constants/colors";

export const SwiperWrapper = styled.div`
  .projects_swiper {
    animation: ${showSwiperProjects} 1s forwards;
    animation-delay: 1.5s;
    height: 300px;
    margin-top: 1rem;
    opacity: 0;
  }
  .projects_slide {
    width: 300px;
    height: 300px;
  }
  .swiper-slide-shadow-right {
    border-radius: 25px;
  }
  .swiper-slide-shadow-left {
    border-radius: 25px;
  }
  .swiper-slide-visible {
    transition: all 3s;
    span {
      filter: blur(5px);
    }
  }
  .swiper-slide-active {
    span {
      filter: blur(0);
    }
  }
`;
