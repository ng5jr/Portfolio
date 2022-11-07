import React, { useContext } from "react";
import ProjectsSwiper from "../../../molecules/ProjectsSwiper/ProjectsSwiper";
import { PageWrapper } from "./ProjectsSection.styles";
import ProjectsBanner from "../../../atoms/Banners/ProjectsBanner/ProjectsBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageWrapper } from "./ProjectsSection.styles";
import ProjectsImage from "../../../../assets/ProjectsImages/meproject.webp";
import ProjectsImagePlaceHolder from "../../../../assets/ProjectsImages/meproject_placeholder.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DeviceContext } from "../../../../context/DeviceContext";

const ProjectsSection = ({ render }) => {
  const { isMobile } = useContext(DeviceContext);
  return (
    <PageWrapper>
      {render && (
        <>
          <ProjectsBanner />
          <ImageWrapper>
            <LazyLoadImage
              src={ProjectsImage}
              placeholderSrc={ProjectsImagePlaceHolder}
              width={isMobile ? 280 : 350}
              height={isMobile ? 223 : 278}
              alt="Nahuel working on the computer"
              className="home_image"
              effect="blur"
            />
          </ImageWrapper>
          <ProjectsSwiper />
        </>
      )}
    </PageWrapper>
  );
};

export default ProjectsSection;
