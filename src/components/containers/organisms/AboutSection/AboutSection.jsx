import React from "react";
import AboutImage from "../../../../assets/AboutImages/aboutme.webp";
import PlaceHolderHomeImage from "../../../../assets/HomeImages/PlaceHolder_HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper } from "./AboutSection.styles";
import AboutBanner from "../../../atoms/Banners/AboutMeBanner/AboutBanner";
const HomeSection = ({ index }) => {
  return (
    <PageWrapper>
      {index === 1 && <AboutBanner />}
      <LazyLoadImage
        src={AboutImage}
        width={240}
        height={280}
        alt="Nahuel working on the computer"
        className="home_image"
      />
    </PageWrapper>
  );
};

export default HomeSection;
