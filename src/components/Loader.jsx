import React from 'react';

const Loader = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <img
        className='h-[150px] animate-spin'
        src='/ball.svg'
        alt=''
      />
    </div>
  );
};

export default Loader;
