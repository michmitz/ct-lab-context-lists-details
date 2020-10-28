const fetch = require('node-fetch');

export const getCharacters = async() => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.map(character => ({
    id: character._id,
    name: character.name,
    imageUrl: character.image
  }))
}