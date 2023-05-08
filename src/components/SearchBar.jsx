import React, { useState } from 'react';

const SearchBar = ({ value, setValue }) => {
  return (
    <div className='h-[100px] flex justify-center items-center'>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-[90%] h-[80%] text-4xl p-4'
        placeholder='Search Pokemon'
      />
    </div>
  );
};

export default SearchBar;
