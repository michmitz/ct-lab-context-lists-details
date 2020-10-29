import React from 'react';
import { useState } from 'react';

export const ColorModeContext = React.createContext();

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  const toggle = () => {
    if(colorMode === 'light') setColorMode('dark');
    if(colorMode === 'dark') setColorMode('light');
  };

  const bucket = {
    colorMode,
    toggle
  };

  return (
    <ColorModeContext.Provider value={bucket}>
      {children}
    </ColorModeContext.Provider>
  );
};