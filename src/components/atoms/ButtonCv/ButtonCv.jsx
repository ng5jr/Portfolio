import React from "react";
import { CvContainer } from "./ButtonCv.styles";
import { GrDocumentUser } from "react-icons/gr";

const ButtonCv = () => {
  return (
    <CvContainer>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1pHHHyA8QXOKkxKR8YY4VCQArQCK1af6L/view?usp=share_link"
      >
        <div className="noselect">
          <span className="text">RESUME</span>
          <span className="icon">
            <GrDocumentUser />
          </span>
        </div>
      </a>
    </CvContainer>
  );
};

export default ButtonCv;
