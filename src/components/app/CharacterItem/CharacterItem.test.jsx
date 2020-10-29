import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { ColorModeProvider } from '../../../context/ColorModeContext'

describe('CharacterItem component', () => {
  afterEach(() => cleanup());

  it('renders single character', () => {
    const { asFragment } = render(
    <ColorModeProvider>
    <CharacterItem
      name='Michelle' 
      imageUrl='url@url.com'
    />
    </ColorModeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});