import React, { useState, useEffect } from "react";
import ContactMeImage from "../../../../assets/ContactImages/meimg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ButtonCv from "../../../atoms/ButtonCv/ButtonCv";

import {
  PageWrapper,
  AboutDataContainer,
  ImageWrapper,
  Description,
  DescriptionMore,
  ContactImages,
  ContactImagesContainer,
} from "./ContactSection.styles";
import ContactBanner from "../../../atoms/Banners/ContactBanner/ContactBanner";

const ContactSection = ({ render, setScrollIcon }) => {
  if (render) {
    setTimeout(() => {
      setScrollIcon(false);
    }, 1500);
  }

  const [contactData, setContactData] = useState([]);

  async function loadData() {
    const result = await import(`../../../../data/contactData`);
    setContactData(result.ContactData);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageWrapper>
      {render && (
        <>
          <ContactBanner />
          <ImageWrapper>
            <LazyLoadImage
              src={ContactMeImage}
              // placeholderSrc={PlaceHolderHomeImage}
              width={189}
              height={370}
              alt="Nahuel holding a phone"
              className="home_image"
              effect="blur"
            />
            {contactData.map((contact) => {
              return (
                <ContactImagesContainer
                  delay={contact.containerDelay}
                  positionX={contact.positionX}
                  positionY={contact.positionY}
                  key={contact.name}
                >
                  <a
                    title={"Link to " + contact.name + " profile"}
                    href={contact.href}
                    target="_blank"
                  >
                    <ContactImages
                      delay={contact.delay}
                      src={contact.src}
                      alt={contact.alt}
                    />
                  </a>
                </ContactImagesContainer>
              );
            })}
          </ImageWrapper>

          <AboutDataContainer>
            <Description>
              Feel free to get in touch at any time to discuss our next project
              or just to have a coffee!
            </Description>
          </AboutDataContainer>
          <DescriptionMore>
            <p>Thanks for passing by!</p>
          </DescriptionMore>
          <ButtonCv />
        </>
      )}
    </PageWrapper>
  );
};

export default ContactSection;
