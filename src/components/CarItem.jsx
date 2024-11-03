/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Separator } from './ui/separator';
import { LuFuel } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";
import { GiGearStick } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';

function CarItem({ car }) {
    
    
    return (
        <Link to={'/listing-details/'+car?.id}>

        <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer flex flex-col h-full'>
            <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>{car?.condition}</h2>
            <img 
                src={car?.images && car.images.length > 0 ? car.images[0].imageUrl : ''} 
                className='w-full h-[180px] object-cover rounded-t-lg' 
                alt={car?.listingTitle}
            />
            <div className='p-4 flex-grow'> {/* This will stretch to fill remaining space */}
                <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
                <Separator />
                <div className='grid grid-cols-3 mt-4'>

                    <div className='flex flex-col items-center'>
                        <SiSpeedtest className='text-lg mb-2 items-center' />
                        <h2 className='text-center'>{car?.mileage} Mileage</h2>
                    </div>

                    <div className='flex flex-col items-center'>
                        < LuFuel className='text-lg mb-2' />
                        <h2 className='text-center'>{car?.fuelType}</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGearStick className='text-lg mb-2' />
                        <h2 className='text-center'>{car?.transmission}</h2>
                    </div>

                </div>
                <Separator className='my-2' />
                <div className='flex items-center justify-between mt-5'>
                    <h2 className='font-bold text-xl'>Ksh.{car?.sellingPrice}</h2>
                    <h2 className='text-primary text-sm flex gap-2 items-center'>
                        View Details
                        <MdOpenInNew />
                    </h2>
                </div>
            </div>
        </div>

        </Link>
    );
}


export default CarItem;
