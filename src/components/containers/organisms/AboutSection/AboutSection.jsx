import React from "react";
import AboutImage from "../../../../assets/AboutImages/aboutme.webp";
import PlaceHolderHomeImage from "../../../../assets/HomeImages/PlaceHolder_HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  PageWrapper,
  AboutDataContainer,
  ImageWrapper,
  Description,
  DescriptionMore,
} from "./AboutSection.styles";
import AboutBanner from "../../../atoms/Banners/AboutMeBanner/AboutBanner";
const AboutSection = ({ render }) => {
  return (
    <PageWrapper>
      {render && (
        <>
          <AboutBanner />
          <ImageWrapper>
            <LazyLoadImage
              src={AboutImage}
              // placeholderSrc={PlaceHolderHomeImage}
              width={230}
              height={270}
              alt="Nahuel working on the computer"
              className="home_image"
              effect="blur"
            />
          </ImageWrapper>
          {/* <AboutTitle>
            My name is...
            <span className="myname">
              <span className="capital">N</span>ahuel{" "}
              <span className="capital"> G</span>iordano
            </span>
          </AboutTitle> */}
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
