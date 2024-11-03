/* eslint-disable no-unused-vars */
import Data from '@/shared/Data';
import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Model</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 px-4 md:px-10 lg:px-20'>
        {Data.Category.map((category, index) => (
          <Link key={index} to={'search/' + category.name}>
            <div className='border border-gray-300 rounded-xl p-6 flex flex-col items-center hover:shadow-md transition-shadow duration-300 cursor-pointer'>
              <img src={category.icon} className='w-10 h-10' alt={category.name} />
              <h2 className='mt-2 text-center text-sm md:text-base'>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
