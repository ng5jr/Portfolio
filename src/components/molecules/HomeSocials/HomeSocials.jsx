import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HomeSocial,
  HomeSocialLinks,
  HomeSocialLink,
} from "./HomeSocials.styles";

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
          <FontAwesomeIcon
            className="social-1"
            icon="fa-brands fa-linkedin-in"
          />
        </HomeSocialLink>
        <HomeSocialLink
          href="https://twitter.com/nahuegiordano"
          target="_blank"
          title="Link to twitter profile"
        >
          <FontAwesomeIcon className="social-2" icon="fa-brands fa-twitter" />
        </HomeSocialLink>
        <HomeSocialLink
          href="https://www.instagram.com/nahuel.giordano/"
          target="_blank"
          title="Link to instagram profile"
        >
          <FontAwesomeIcon className="social-3" icon="fa-brands fa-instagram" />
        </HomeSocialLink>
      </HomeSocialLinks>
    </HomeSocial>
  );
};

export default HomeSocials;
