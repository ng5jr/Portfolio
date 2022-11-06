import React from "react";
import {
  HomeSocial,
  HomeSocialLinks,
  HomeSocialLink,
} from "./HomeSocials.styles";

import { RiLinkedinFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const HomeSocials = () => {
  return (
    <HomeSocial>
      <HomeSocialLinks>
        <h3>Follow Me </h3>
        <HomeSocialLink
          href="https://www.linkedin.com/in/nahuel-giordano/"
          target="_blank"
          title="Link to linkedin profile"
        >
          <RiLinkedinFill className="social-1" />
        </HomeSocialLink>
        <HomeSocialLink
          href="https://twitter.com/nahuegiordano"
          target="_blank"
          title="Link to twitter profile"
        >
          <RiTwitterFill className="social-2" />
        </HomeSocialLink>
        <HomeSocialLink
          href="https://www.instagram.com/nahuel.giordano/"
          target="_blank"
          title="Link to instagram profile"
        >
          <RiInstagramLine className="social-3" />
        </HomeSocialLink>
      </HomeSocialLinks>
    </HomeSocial>
  );
};

export default HomeSocials;
