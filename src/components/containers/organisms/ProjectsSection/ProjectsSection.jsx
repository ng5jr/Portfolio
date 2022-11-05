import React, { Suspense } from "react";
import ProjectsSwiper from "../../../molecules/ProjectsSwiper/ProjectsSwiper";
import { PageWrapper } from "./ProjectsSection.styles";
import ProjectsBanner from "../../../atoms/Banners/ProjectsBanner/ProjectsBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageWrapper } from "./ProjectsSection.styles";
import ProjectsImage from "../../../../assets/ProjectsImages/meproject.webp";

const ProjectsSection = ({ render }) => {
  return (
    <PageWrapper>
      {render && (
        <>
          <ProjectsBanner />
          <ImageWrapper>
            <LazyLoadImage
              src={ProjectsImage}
              // placeholderSrc={PlaceHolderHomeImage}
              width={280}
              height={223}
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
