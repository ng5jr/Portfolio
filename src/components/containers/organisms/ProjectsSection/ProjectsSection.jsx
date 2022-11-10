import React, { useContext, useState } from "react";
import ProjectsSwiper from "../../../molecules/ProjectsSwiper/ProjectsSwiper";
import { PageWrapper, InfoIconWrapper } from "./ProjectsSection.styles";
import ProjectsBanner from "../../../atoms/Banners/ProjectsBanner/ProjectsBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageWrapper } from "./ProjectsSection.styles";
import ProjectsImage from "../../../../assets/ProjectsImages/meproject.webp";
import ProjectsImagePlaceHolder from "../../../../assets/ProjectsImages/meproject_placeholder.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DeviceContext } from "../../../../context/DeviceContext";
import Info from "../../../../assets/ProjectsImages/info.webp";
import ProjectImg from "../../../../assets/ProjectsImages/project.webp";
import StackInfo from "../../../molecules/StackInfo/StackInfo";

const ProjectsSection = ({ render }) => {
  const { isMobile } = useContext(DeviceContext);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <PageWrapper>
      {render && (
        <>
          <ProjectsBanner />
          <ImageWrapper>
            <InfoIconWrapper
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            >
              <LazyLoadImage
                src={showInfo ? ProjectImg : Info}
                width={isMobile ? 50 : 70}
                height={isMobile ? 50 : 70}
                alt="Info Icon"
                className="home_image"
                effect="blur"
              />
            </InfoIconWrapper>

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
          {showInfo ? <StackInfo /> : <ProjectsSwiper />}
        </>
      )}
    </PageWrapper>
  );
};

export default ProjectsSection;
