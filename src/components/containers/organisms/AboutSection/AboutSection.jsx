import React, { useContext } from "react";
import AboutImage from "../../../../assets/AboutImages/aboutme.webp";
import AboutImagePlaceHolder from "../../../../assets/AboutImages/aboutme_placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  PageWrapper,
  AboutDataContainer,
  ImageWrapper,
  Description,
  DescriptionMore,
} from "./AboutSection.styles";
import AboutBanner from "../../../atoms/Banners/AboutMeBanner/AboutBanner";
import { DeviceContext } from "../../../../context/DeviceContext";

const AboutSection = ({ render }) => {
  const { isMobile, isTablet, isDesktop } = useContext(DeviceContext);
  return (
    <PageWrapper>
      {render && (
        <>
          <AboutBanner />
          <ImageWrapper>
            <LazyLoadImage
              src={AboutImage}
              placeholderSrc={AboutImagePlaceHolder}
              width={isMobile ? 230 : 300}
              height={isMobile ? 270 : 352}
              alt="Nahuel working on the computer"
              className="home_image"
              effect="blur"
            />
          </ImageWrapper>

          <AboutDataContainer>
            <Description>
              I am a 27 years old Frontend Developer, former Merchant Marine
              Officer from Argentina. After a couple of years at sea driving big
              ships, I decided to re-invent myself and follow my passion:
              computers, thus I began studying web development and programming
              languages. I am constantly learning, trying to improve my skills
              and always looking for new challenges.
            </Description>
          </AboutDataContainer>
          <DescriptionMore>
            <p>Wanna know more? Drop a message and let's have a coffee!</p>
          </DescriptionMore>
        </>
      )}
    </PageWrapper>
  );
};

export default AboutSection;
