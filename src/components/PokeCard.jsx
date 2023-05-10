import React, { useEffect, useState, memo } from 'react';
import { cap, typeColors } from '../helper';
import { Link } from 'react-router-dom';

const PokeCard = memo(({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, []);

  //   console.log(pokemon.types);
  if (!pokemon) {
    return (
      <div
        className='bg-blue-100 flex w-full rounded-2xl my-2 pr-2 h-[150px] shadow-lg
        lg:flex-col lg:h-auto lg:p-0 overflow-hidden'
      >
        <div
          className='flex justify-center items-center w-[150px]
         bg-blue-50 lg:h-[220px] lg:w-full'
        >
          <img
            src='/who.png'
            alt='loading'
            className='w-[80%] h-auto opacity-20 lg:w-auto lg:h-[80%]'
          />
        </div>
        <div className='my-auto mx-5 w-full lg:p-5'>
          <div className='w-[80px] h-[25px] bg-gray-500 opacity-10'></div>

          <div className='flex mt-3'>
            {[0, 1].map((type) => (
              <div
                key={`${name}-${type}`}
                className='text-white flex justify-center items-center 
              rounded-md text-[20px] px-2 mr-1 bg-gray-500 opacity-10 h-[30px] w-[70px]'
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/pokedex-app/${name}`}
      className='bg-blue-100 flex w-full rounded-2xl my-2 pr-2 h-[150px] shadow-lg
      lg:flex-col lg:h-auto lg:p-0 overflow-hidden'
    >
      <div
        className='h-full w-auto lg:h-auto lg:w-full bg-blue-50 
      flex justify-center items-center'
      >
        <img
          src={pokemon.sprites.front_default}
          alt='name'
          className='h-full lg:w-[220px]'
        />
      </div>

      <div className='my-auto ml-5 lg:p-4'>
        <h1 className='text-3xl lg:text-3xl xl:text-2xl'>
          {cap(name)}
        </h1>
        <div className='flex mt-3'>
          {pokemon.types.map((type) => (
            <div
              key={`${name}-${type.type.name}`}
              className={`${
                typeColors[type.type.name]
              } text-white flex justify-center items-center 
              rounded-md text-2xl px-2 mr-1 lg:text-2xl lg:px-3 lg:py-1
              xl:text-xl`}
            >
              {cap(type.type.name)}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
});

export default PokeCard;
