import React from "react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GoUnmute, GoMute } from "react-icons/go";
import { RadialMenuWrapper } from "./RadialMenu.styles";
import FullScreenButton from "../FullScreenButton/FullScreenButton";
const RadialMenu = () => {
  return (
    <RadialMenuWrapper>
      <div>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle">
          <span className="fa fa-navicon fa-2x">
            <FiSettings />
          </span>
        </label>
        <div className="container">
          <button className="fa fa-home fa-2x deg5">
            <FullScreenButton />
          </button>
          <button className="fa fa-comments fa-2x deg40">
            <GoUnmute />
          </button>
          <button className="fa fa-heart fa-2x deg85">
            <GoMute />
          </button>
        </div>
      </div>
    </RadialMenuWrapper>
  );
};

export default RadialMenu;
