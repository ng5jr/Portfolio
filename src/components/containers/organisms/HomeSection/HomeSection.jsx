import React from "react";
import HomeImage from "../../../../assets/HomeImages/HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper } from "./HomeSection.styles";
import AnimatedTitle from "../../../atoms/AnimatedTitle/AnimatedTitle";
import HomeSocials from "../../../molecules/HomeSocials/HomeSocials";
import HomeImagePlaceholder from "../../../../assets/HomeImages/HomeImage_placeholder.webp";

const HomeSection = () => {
  return (
    <PageWrapper>
      <HomeSocials />
      <LazyLoadImage
        src={HomeImage}
        width={230}
        height={250}
        alt="Nahuel working on the computer"
        placeholderSrc={HomeImagePlaceholder}
        className="home_image"
      />

      <AnimatedTitle />
    </PageWrapper>
  );
};

export default HomeSection;
