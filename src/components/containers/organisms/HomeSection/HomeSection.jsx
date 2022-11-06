import React from "react";
import HomeImage from "../../../../assets/HomeImages/HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper, ImageWrapper } from "./HomeSection.styles";
import AnimatedTitle from "../../../atoms/AnimatedTitle/AnimatedTitle";
import HomeSocials from "../../../molecules/HomeSocials/HomeSocials";
import HomeImagePlaceholder from "../../../../assets/HomeImages/HomeImage_placeholder.webp";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomeSection = () => {
  return (
    <PageWrapper>
      <HomeSocials />
      <ImageWrapper>
        <LazyLoadImage
          src={HomeImage}
          width={230}
          height={250}
          alt="Nahuel working on the computer"
          placeholderSrc={HomeImagePlaceholder}
          className="home_image"
          effect="blur"
        />
      </ImageWrapper>

      <AnimatedTitle />
    </PageWrapper>
  );
};

export default HomeSection;
