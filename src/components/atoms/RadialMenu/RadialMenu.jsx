import React from "react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GoUnmute, GoMute } from "react-icons/go";
import { FaFileDownload } from "react-icons/fa";
import { useContext } from "react";
import { AudioContext } from "../../../context/AudioContext";
import { RadialMenuWrapper, SettingsWrapper, OptionsWrapper } from "./RadialMenu.styles";
import audio from "../../../assets/Sounds/mixkit-video-game-retro-click-237.wav";
import FullScreenButton from "../FullScreenButton/FullScreenButton";
const RadialMenu = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { setAudioEnabled, audioEnabled } = useContext(AudioContext);
	let settingsAudio = new Audio(audio);

	const start = () => {
		if (audioEnabled) {
			settingsAudio.play();
		}
	};
	const handleAudio = () => {
		setAudioEnabled(!audioEnabled);
	};
	return (
		<RadialMenuWrapper>
			<SettingsWrapper
				onClick={() => {
					setOpenMenu(!openMenu);
					start();
				}}
			>
				<FiSettings />
			</SettingsWrapper>
			<OptionsWrapper x={3} open={openMenu}>
				<FullScreenButton />
			</OptionsWrapper>
			<OptionsWrapper x={9} open={openMenu}>
				<a title="Link to Geronimo Nahuel Giordano Resume" target="_blank" href="https://drive.google.com/drive/folders/1GMqNGuBT6bWPkm4t0HSjaUSSzIj-Pj_8?usp=share_link">
					<FaFileDownload />
				</a>
			</OptionsWrapper>

			<OptionsWrapper x={6} onClick={handleAudio} open={openMenu}>
				{audioEnabled ? <GoUnmute /> : <GoMute />}
			</OptionsWrapper>
		</RadialMenuWrapper>
	);
};

export default RadialMenu;
