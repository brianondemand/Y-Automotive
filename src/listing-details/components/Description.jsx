/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Description({ carDetail }) {
  return (
    <div>
      {carDetail?.listingDescription ? (
        <div className='p-5 sm:p-6 md:p-8 rounded-xl bg-white shadow-md mt-10 border'>
          <h2 className='my-2 font-medium text-2xl sm:text-3xl'>Description</h2>
          <p className='text-sm sm:text-base'>{carDetail?.listingDescription}</p>
        </div>
      ) : (
        <div className='w-full h-[100px] mt-7 bg-slate-200 animate-pulse rounded-xl'></div>
      )}
    </div>
  );
}

export default Description;
