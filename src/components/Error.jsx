import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-60 flex-col'>
      <h1 className='text-5xl text-gray-600'>Pokemon not found!</h1>
      <Link to='/' className='text-3xl text-blue-300'>
        Go Back
      </Link>
    </div>
  );
};

export default Error;
