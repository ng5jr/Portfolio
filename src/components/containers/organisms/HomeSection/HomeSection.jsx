import React from "react";
import HomeImage from "../../../../assets/HomeImages/HomeImage.webp";
import PlaceHolderHomeImage from "../../../../assets/HomeImages/PlaceHolder_HomeImage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageWrapper } from "./HomeSection.styles";
import AnimatedTitle from "../../../atoms/AnimatedTitle/AnimatedTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeSocials from "../../../molecules/HomeSocials/HomeSocials";
import Scroll from "../../../atoms/Scroll/Scroll";

const HomeSection = () => {
  return (
    <PageWrapper>
      <HomeSocials />
      <LazyLoadImage
        src={HomeImage}
        width={240}
        height={250}
        alt="Nahuel working on the computer"
        style={{
          filter: "drop-shadow(30px 0px 4px #09090960)",
          margin: "30px 0",
        }}
      />
      <AnimatedTitle />
    </PageWrapper>
  );
};

export default HomeSection;
