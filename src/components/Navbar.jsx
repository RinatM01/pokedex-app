import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isSingle }) => {
  return (
    <nav
      className={`bg-sky-500 h-[70px] w-full flex 
    items-center px-10 justify-between lg:h-[80px] lg:px-20
    ${isSingle ? 'lg:px-20 xl:px-60' : ''}`}
    >
      <div>
        {isSingle && (
          <Link
            to='/pokedex-app/'
            className='text-white text-2xl lg:text-4xl xl:text-2xl'
          >
            <FontAwesomeIcon icon={faBackward} />{' '}
          </Link>
        )}
      </div>
      <div className='flex items-center'>
        <img
          className='h-[30px] w-auto invert'
          src='/ball-icon.svg'
          alt=''
        />
        <h1 className='text-white text-2xl ml-2 xl:text-3xl'>
          PokeSearch
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
