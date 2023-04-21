import React from "react";
import { CvContainer } from "./ButtonCv.styles";
import { GrDocumentUser } from "react-icons/gr";

const ButtonCv = () => {
	return (
		<CvContainer>
			<a target="_blank" href="https://drive.google.com/drive/folders/1GMqNGuBT6bWPkm4t0HSjaUSSzIj-Pj_8?usp=share_link">
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
