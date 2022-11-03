import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";
import "../../../../../src/styles.css";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import StorySection from "../StorySection/StorySection";

const MainSection = ({ setIndex, activeIndex }) => {
  const [canSwipe, setCanSwipe] = useState(true);
  const [worldSlide, setWorldSlide] = useState(false);
  const swiperRef = useRef(null);
  const changeSlide = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    // @ts-ignore
    swiperRef?.current?.swiper?.slideTo(activeIndex);
    if (activeIndex === 1) {
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
      direction={"vertical"}
      modules={[Navigation, Pagination, Mousewheel]}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      onSlideChange={(activeIndex) => changeSlide(activeIndex.realIndex)}
      longSwipesMs={1000}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>
        <StorySection
          swipe={canSwipe}
          setSwipe={setCanSwipe}
          index={worldSlide}
        />
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      ...
    </Swiper>
  );
};

export default MainSection;
