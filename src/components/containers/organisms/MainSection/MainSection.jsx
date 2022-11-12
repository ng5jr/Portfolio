import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Navigation, Mousewheel } from "swiper";
import "../../../../../src/styles.css";
import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import StorySection from "../StorySection/StorySection";
import HomeSection from "../HomeSection/HomeSection";
// import AboutSection from "../AboutSection/AboutSection";
// import ProjectsSection from "../ProjectsSection/ProjectsSection";
// import ContactSection from "../ContactSection/ContactSection";

const StorySection = lazy(() => import("../StorySection/StorySection"));
const AboutSection = lazy(() => import("../AboutSection/AboutSection"));
const ProjectsSection = lazy(() =>
  import("../ProjectsSection/ProjectsSection")
);
const ContactSection = lazy(() => import("../ContactSection/ContactSection"));

export const SwiperSlideCustom = styled(SwiperSlide)`
  height: calc(100vh) - 50px;
  position: relative;
  overflow: hidden;
`;

const MainSection = ({ setIndex, activeIndex, setScrollIcon }) => {
  const [canSwipe, setCanSwipe] = useState(true);

  const [worldSlide, setWorldSlide] = useState(false);
  const [renderAbout, setRenderAbout] = useState(false);
  const [renderProjects, setRenderProjects] = useState(false);
  const [renderContact, setRenderContact] = useState(false);
  const swiperRef = useRef(null);

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
      }}
      onTransitionEnd={() => {
        setScrollIcon(true);
      }}
      direction={"vertical"}
      modules={[Navigation, Mousewheel]}
      mousewheel={true}
      onSlideChange={(activeIndex) => {
        changeSlide(activeIndex.realIndex);
        if (activeIndex.realIndex === 1) {
          setRenderAbout(true);
        }
        if (activeIndex.realIndex === 3) {
          setRenderProjects(true);
        }
        if (activeIndex.realIndex === 4) {
          setRenderContact(true);
        }
      }}
      longSwipesMs={1000}
      style={{ paddingTop: "50px" }}
      edgeSwipeDetection={true}
    >
      <SwiperSlideCustom>
        <HomeSection />
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutSection render={renderAbout} />
        </Suspense>
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <Suspense fallback={<div>Loading...</div>}>
          <StorySection
            swipe={canSwipe}
            setSwipe={setCanSwipe}
            index={worldSlide}
          />
        </Suspense>
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection render={renderProjects} />
        </Suspense>
      </SwiperSlideCustom>
      <SwiperSlideCustom>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactSection
            setScrollIcon={setScrollIcon}
            render={renderContact}
          />
        </Suspense>
      </SwiperSlideCustom>
    </Swiper>
  );
};

export default MainSection;
