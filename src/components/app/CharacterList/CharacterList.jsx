import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import { useCharacters } from '../../../hooks/characters'

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="character-list">
      {characterElements}
    </ul>
  );
};

export default CharacterList;