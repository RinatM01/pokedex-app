import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PokeCard from './components/PokeCard';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState('');
  let pageLim = 10;

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
  }, []);

  return (
    <div>
      <SearchBar value={value} setValue={setValue} />
      <div className='flex flex-col items-center'>
        {pokemons
          .filter((pokemon) =>
            pokemon.name.startsWith(value.toLowerCase())
          )
          .slice(0, pageLim)
          .map((pokemon) => (
            <PokeCard key={pokemon.name} {...pokemon} />
          ))}
      </div>
    </div>
  );
}

export default App;
