/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCheck } from "react-icons/fa6";

function Features({ features = {} }) { // Fallback to an empty object if features is undefined
  return (
    <div className='p-10 border shadow-md rounded-xl my-7'>
      <h2 className='font-medium text-2xl'>Features</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 mt-5 gap-8 lg:grid-cols-4'>
        {Object.entries(features).map(([feature, value]) => (
            <div className='flex gap-2 items-center'>
              <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
              <h2>{feature}</h2>
            </div>
        ))}          
      </div>
    </div>
  );
}

export default Features;
