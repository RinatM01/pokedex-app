import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cap, typeColors } from '../helper';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

const SinglePoke = () => {
  const { pokemon } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const urlSpec = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
  const [poke, setPoke] = useState(null);
  const [pokeSpec, setPokespec] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPoke(json));
    fetch(urlSpec)
      .then((response) => response.json())
      .then((json) => setPokespec(json));
  }, []);
  if (!poke || !pokeSpec) {
    return (
      <div>
        <Navbar isSingle={true} />
        <Loader />
      </div>
    );
  }
  //   console.log(poke);
  //   console.log(pokeSpec);
  return (
    <div>
      <Navbar isSingle={true} />
      <div
        className='mx-5 flex flex-col items-center lg:flex-row 
      lg:justify-between lg:mt-20 lg:mx-20 xl:mx-72'
      >
        <div
          className='w-full flex justify-center md:w-[70%] lg:w-[40%]
         xl:w-[30%] bg-blue-50 rounded-2xl my-5'
        >
          <img
            className='w-[70%] h-auto md:w-full'
            src={poke.sprites.front_default}
            alt=''
          />
        </div>

        <div className='w-[90&] bg-blue-100 p-5 rounded-xl shadow-lg lg:w-[50%] xl:w-[40%]'>
          <h1 className='font-semibold text-4xl text-center lg:text-4xl'>
            {cap(poke.name)}
            <span className='text-gray-400 text-3xl ml-3 lg:text-2xl'>
              {poke.base_experience}xp
            </span>
          </h1>
          <p className='text-xl mt-3 leading-6 lg:text-2xl'>
            {pokeSpec.flavor_text_entries.length != 0
              ? pokeSpec.flavor_text_entries.filter(
                  (text) => text.language.name == 'en'
                )[0].flavor_text
              : 'No description found.'}
          </p>

          <div className='border-b-2 border-gray-400 opacity-20 my-5'></div>

          <div className='flex justify-between mb-2'>
            <h1 className='font-semibold text-2xl lg:text-2xl'>
              Type:
            </h1>
            <span className='flex'>
              {poke.types.map((type) => (
                <div
                  key={`${poke.name}-${type.type.name}`}
                  className={`${
                    typeColors[type.type.name]
                  } text-white flex justify-center items-center 
              rounded-md text-xl px-2 mr-1 lg:text-xl`}
                >
                  {cap(type.type.name)}
                </div>
              ))}
            </span>
          </div>

          <div className='flex justify-between mb-2'>
            <h1 className='font-semibold text-2xl lg:text-2xl'>
              Habitat:
            </h1>
            <span
              className='bg-slate-500 text-white flex justify-center items-center 
              rounded-md text-xl px-2 mr-1 lg:text-xl'
            >
              {pokeSpec.habitat
                ? cap(pokeSpec.habitat.name)
                : 'Unknown'}
            </span>
          </div>
          <div className='flex justify-between mb-2'>
            <h1 className='font-semibold text-2xl mr-4 lg:text-2xl'>
              Moves:
            </h1>
            <span className='flex flex-wrap justify-end'>
              {poke.abilities.map((abil) => (
                <div
                  key={`${poke.name}-${abil.ability.name}`}
                  className={`${
                    typeColors[poke.types[0].type.name]
                  } text-white flex justify-center items-center 
              rounded-md text-xl px-2 mr-1 mb-1 lg:text-xl`}
                >
                  {cap(abil.ability.name)}
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePoke;
