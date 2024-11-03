/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { HiCalendarDays } from "react-icons/hi2";
import { SiSpeedtest } from "react-icons/si";
import { GiGearStick } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";

function DetailHeader({ carDetail }) {
  return (
    <div>
      {carDetail?.listingTitle ? (
        <div>
          <h2 className='font-bold text-2xl sm:text-3xl'>{carDetail?.listingTitle}</h2>
          <p className='text-xs sm:text-sm mt-3'>{carDetail?.tagline}</p>

          <div className='flex flex-wrap gap-2 mt-3'>
            <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 text-xs sm:text-sm'>
              <HiCalendarDays className='h-5 w-5 text-primary' />
              <h2 className='text-primary'>{carDetail?.year}</h2>
            </div>

            <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 text-xs sm:text-sm'>
              <SiSpeedtest className='h-5 w-5 text-primary' />
              <h2 className='text-primary'>{carDetail?.mileage}</h2>
            </div>

            <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 text-xs sm:text-sm'>
              <GiGearStick className='h-5 w-5 text-primary' />
              <h2 className='text-primary'>{carDetail?.transmission}</h2>
            </div>

            <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 text-xs sm:text-sm'>
              <LuFuel className='h-5 w-5 text-primary' />
              <h2 className='text-primary'>{carDetail?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse mt-5'></div>
      )}
    </div>
  );
}

export default DetailHeader;
