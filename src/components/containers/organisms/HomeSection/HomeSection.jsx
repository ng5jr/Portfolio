import React, { useContext } from "react";
import HomeImage from "../../../../assets/HomeImages/HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper, ImageWrapper } from "./HomeSection.styles";
import AnimatedTitle from "../../../atoms/AnimatedTitle/AnimatedTitle";
import HomeSocials from "../../../molecules/HomeSocials/HomeSocials";
import HomeImagePlaceholder from "../../../../assets/HomeImages/HomeImage_placeholder.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DeviceContext } from "../../../../context/DeviceContext";

const HomeSection = () => {
  const { isMobile, isTablet, isDesktop } = useContext(DeviceContext);

  return (
    <PageWrapper>
      <ImageWrapper>
        <HomeSocials />
        <LazyLoadImage
          src={HomeImage}
          width={isMobile ? 230 : 300}
          height={isMobile ? 250 : 326}
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
