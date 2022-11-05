import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  SlideWrapper,
  CaptionContainer,
  DescriptionContainer,
  ButtonMore,
  LinkTo,
} from "./ProjectSlide.styles";
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineGithub } from "react-icons/ai";
const ProjectSlide = ({ project }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <SlideWrapper showDesc={showDesc}>
      <LazyLoadImage
        src={project.imgSrc}
        // placeholderSrc={PlaceHolderHomeImage}
        alt="Nahuel working on the computer"
        effect="blur"
        className={showDesc ? "gray" : ""}
      />
      <CaptionContainer>
        <ButtonMore
          onClick={() => {
            setShowDesc(!showDesc);
          }}
        >
          +
        </ButtonMore>
        <LinkTo
          title={"Link to the " + project.title + " project code"}
          target="_blank"
          href={project.linkgithub}
        >
          <AiOutlineGithub />
        </LinkTo>
        <p>{project.title}</p>
        <LinkTo
          target="_blank"
          title={"Link to the " + project.title + " deploy website"}
          href={project.linkpage}
        >
          <GoLinkExternal />
        </LinkTo>
      </CaptionContainer>
      <DescriptionContainer showDesc={showDesc}>
        <p>{project.description}</p>
      </DescriptionContainer>
    </SlideWrapper>
  );
};

export default ProjectSlide;
