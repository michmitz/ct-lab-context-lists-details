import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getCharacters } from '../../../services/heyArnold-api';
import ColorModeContainer from './ColorModeContainer';

jest.mock('../../../services/heyArnold-api.jsx');

describe('Checks for dark mode', () => {
  it('changes to dark mode', async() => {
    getCharacters.mockResolvedValue([ 
      {
        'id': '1', 
        'name': 'Arnold',
        'image': 'arnold.jpg'
      }
    ]);

    render(<ColorModeContainer />);

    const button = screen.getByTestId('button');
    const charactersList = await screen.findByTestId('character-list');

    fireEvent.click(button);

    return waitFor(() => {
      expect(charactersList).toHaveClass('dark');
    });
  });
});