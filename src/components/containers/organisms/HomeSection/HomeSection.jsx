import React from "react";
import HomeImage from "../../../../assets/HomeImages/HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper } from "./HomeSection.styles";
import AnimatedTitle from "../../../atoms/AnimatedTitle/AnimatedTitle";
import HomeSocials from "../../../molecules/HomeSocials/HomeSocials";

const HomeSection = () => {
  return (
    <PageWrapper>
      <HomeSocials />
      <LazyLoadImage
        src={HomeImage}
        width={240}
        height={250}
        alt="Nahuel working on the computer"
        className="home_image"
      />

      <AnimatedTitle />
    </PageWrapper>
  );
};

export default HomeSection;
