import { createContext, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  return (
    <AudioContext.Provider value={{ audioEnabled, setAudioEnabled }}>
      {children}
    </AudioContext.Provider>
  );
};
