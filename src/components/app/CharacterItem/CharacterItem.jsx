import React from 'react';
import PropTypes from 'prop-types';
import { useColorMode } from '../../../hooks/colormode'

const CharacterItem = ({ name, imageUrl }) => {
  const { colorMode } = useColorMode();

  return <figure className={colorMode}>
    <img src={imageUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
}

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CharacterItem