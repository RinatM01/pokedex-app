import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeSearch from './pages/PokeSearch';
import SinglePoke from './pages/SinglePoke';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PokeSearch />} />
        <Route exact path='/:pokemon' element={<SinglePoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
