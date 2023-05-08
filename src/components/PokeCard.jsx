import React, { useEffect, useState } from 'react';
import { cap, typeColors } from '../helper';

const PokeCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, []);

  //   console.log(pokemon.types);
  if (!pokemon) {
    return (
      <div className='border-2 border-black flex w-[90%] rounded-2xl my-2'></div>
    );
  }

  return (
    <div className='border-2 border-black flex w-[90%] rounded-2xl my-2'>
      <img
        src={pokemon.sprites.front_default}
        alt='name'
        className='w-[150px]'
      />
      <div className='p-2'>
        <h1 className='text-2xl'>{cap(name)}</h1>
        <div className='flex'>
          {pokemon.types.map((type) => (
            <div
              key={`${name}-${type.type.name}`}
              className={`${
                typeColors[type.type.name]
              } text-white flex justify-center items-center 
              rounded-md text-[20px] px-2 mr-1`}
            >
              {cap(type.type.name)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
