import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../../services/heyArnold-api';
import { ColorModeProvider } from '../../../context/ColorModeContext'

jest.mock('../../../services/heyArnold-api.jsx');

describe('CharacterList component', () => {
  it('displays a list of characters', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Arnold', imageUrl: 'arnold.png' }
    ])
    
    render(
      <ColorModeProvider>
      <CharacterList />
      </ColorModeProvider> 
    );

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('character-list');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});