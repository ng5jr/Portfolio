import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperWrapper } from "./ProjectsSwiper.styles";
import ProjectSlide from "../SlideWrapper/ProjectSlide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useRef } from "react";

export default function ProjectsSwiper() {
  const [projectsData, setProjectsData] = useState([]);

  async function loadData() {
    const result = await import(`../../../data/projectsData`);
    setProjectsData(result.ProjectsInfo);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SwiperWrapper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper projects_swiper"
      >
        {projectsData.map((project) => {
          return (
            <SwiperSlide key={project.id} className="projects_slide">
              <ProjectSlide project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
}
