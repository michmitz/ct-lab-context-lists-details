import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import { useCharacters } from '../../../hooks/characters'
import { useColorMode } from '../../../hooks/colormode';
import styles from './CharacterList.css'
import colorModes from '../ColorMode/ColorMode.css'

const CharacterList = () => {
  const { colorMode } = useColorMode();
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="character-list" className={`${styles.CharacterList} ${colorMode === 'dark' ? colorModes.dark : colorModes.light}`}>
      {characterElements}
    </ul>
  );
};

export default CharacterList;