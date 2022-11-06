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
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const ProjectSlide = ({ project }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <SlideWrapper showDesc={showDesc}>
      <LazyLoadImage
        src={project.imgSrc}
        placeholderSrc={project.placeholderImg}
        alt={"Image of " + project.title + " project"}
        className={showDesc ? "gray" : ""}
      />

      <CaptionContainer>
        <ButtonMore
          onClick={() => {
            setShowDesc(!showDesc);
          }}
        >
          {showDesc ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
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
