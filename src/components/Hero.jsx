/* eslint-disable no-unused-vars */
import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-6 md:p-10 lg:p-20 gap-4 md:gap-6 lg:gap-8 h-auto w-full bg-[#eef0fc]'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Find & Buy Your Dream Car</h2>
        <Search />
        <img src='/hero.png' className='mt-5 w-full max-w-[600px] h-auto' alt='Hero Image' />
      </div>
    </div>
  );
}

export default Hero;
