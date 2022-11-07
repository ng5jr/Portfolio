import React from "react";
import { useState } from "react";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";
import { FullScreenButtonWrapper } from "./FullScreenButton.styles";

const FullScreenButton = () => {
  const [fullScreen, setFullScreen] = useState(false);
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  }

  return (
    <FullScreenButtonWrapper onClick={toggleFullScreen}>
      {fullScreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
    </FullScreenButtonWrapper>
  );
};

export default FullScreenButton;
