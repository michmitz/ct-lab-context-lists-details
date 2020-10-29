import React from 'react';
import { ColorModeProvider } from '../../../context/ColorModeContext';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../Header/Header';
import './ColorMode.css'

const ColorModeContainer = () => {
  return (
      <ColorModeProvider>
        <Header />
        <CharacterList />
      </ColorModeProvider>
  )
};

export default ColorModeContainer;