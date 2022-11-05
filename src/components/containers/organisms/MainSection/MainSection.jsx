import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Navigation, Pagination, Mousewheel } from "swiper";
import "../../../../../src/styles.css";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import StorySection from "../StorySection/StorySection";
import HomeSection from "../HomeSection/HomeSection";
import AboutSection from "../AboutSection/AboutSection";

export const SwiperSlideCustom = styled(SwiperSlide)`
  height: calc(100vh) - 50px;
  position: relative;
  overflow: hidden;
`;

const MainSection = ({ setIndex, activeIndex, setScrollIcon }) => {
  const [canSwipe, setCanSwipe] = useState(true);
  const [worldSlide, setWorldSlide] = useState(false);
  const [renderSecondSlide, setRenderSecondSlide] = useState(false);

  const swiperRef = useRef(null);
  // const renderMap = () => {
  //   // setTimeout(() => {
  //   //   setWorldSlide(true);
  //   // }, 4000);
  // };
  const changeSlide = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    // @ts-ignore
    swiperRef?.current?.swiper?.slideTo(activeIndex);
    if (activeIndex === 2) {
      setWorldSlide(true);
    }
  }, [activeIndex]);
  useEffect(() => {
    // @ts-ignore
    if (!canSwipe) {
      swiperRef?.current?.swiper?.disable();
    } else {
      swiperRef?.current?.swiper?.enable();
    }
  }, [canSwipe]);

  return (
    <Swiper
      ref={swiperRef}
      onTransitionStart={() => {
        setScrollIcon(false);
        setRenderSecondSlide(true);
      }}
      onTransitionEnd={() => {
        setScrollIcon(true);
      }}
      direction={"vertical"}
      modules={[Navigation, Mousewheel]}
      mousewheel={true}
      onSlideChange={(activeIndex) => {
        changeSlide(activeIndex.realIndex);
      }}
      longSwipesMs={1000}
      style={{ paddingTop: "50px" }}
      // onAfterInit={renderMap}
    >
      <SwiperSlideCustom>
        <HomeSection />
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <AboutSection render={renderSecondSlide}></AboutSection>
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <StorySection
          swipe={canSwipe}
          setSwipe={setCanSwipe}
          index={worldSlide}
        />
      </SwiperSlideCustom>
      <SwiperSlideCustom>Projects</SwiperSlideCustom>
      <SwiperSlideCustom>Contact</SwiperSlideCustom>
    </Swiper>
  );
};

export default MainSection;
