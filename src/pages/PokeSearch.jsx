import SearchBar from '../components/SearchBar';
import PokeCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef, useCallback } from 'react';

const PokeSearch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  let pageLim = 20;

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
  }, []);

  function handleSearch(e) {
    setValue(e.target.value);
    setPageNumber(1);
  }

  return (
    <div>
      <Navbar isSingle={false} />
      <SearchBar value={value} handleSearch={handleSearch} />

      <div
        className='grid grid-cols-1 px-5 md:grid-cols-2 md:gap-x-5
      lg:grid-cols-4 xl:grid-cols-5 xl:px-20'
      >
        {pokemons
          .filter((pokemon) =>
            pokemon.name.startsWith(value.toLowerCase())
          )
          .slice(0, pageLim * pageNumber)
          .map((pokemon, index) => {
            if (pageLim * pageNumber === index + 1) {
              return (
                <div key={`lol-${index}`} ref={lastBookElementRef}>
                  <PokeCard key={pokemon.name} {...pokemon} />
                </div>
              );
            } else {
              return <PokeCard key={pokemon.name} {...pokemon} />;
            }
          })}
      </div>
      {pokemons.filter((pokemon) =>
        pokemon.name.startsWith(value.toLowerCase())
      ).length === 0 && (
        <div className='flex justify-center w-full mt-10'>
          <h2 className='text-3xl text-gray-600'>
            No such pokemon found!
          </h2>
        </div>
      )}
    </div>
  );
};

export default PokeSearch;
