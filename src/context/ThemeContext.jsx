import React, { createContext, useContext, useState } from 'react';
import { sounds } from '../utils/soundEffects';

const SoundContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundEnabled(newState);
    if (newState) {
      sounds.playSuccess();
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useTheme = () => useContext(SoundContext);
