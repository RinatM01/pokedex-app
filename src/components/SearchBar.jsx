import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ value, handleSearch }) => {
  return (
    <div className='h-[100px] flex justify-center items-center'>
      <div
        className='bg-sky-50 w-[90%] h-[80%] rounded-xl flex 
      overflow-hidden lg:w-[50%]'
      >
        <input
          type='text'
          value={value}
          onChange={handleSearch}
          className='rounded-lg w-[80%] h-full text-2xl px-5 outline-0 bg-sky-50
          xl:w-[90%]'
          placeholder='Search Pokemon'
        />
        <div
          className='w-[20%] bg-sky-500 text-white flex justify-center 
        items-center xl:w-[10%]'
        >
          <FontAwesomeIcon
            className='text-2xl'
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
