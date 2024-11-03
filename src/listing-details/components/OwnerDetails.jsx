/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import React from 'react';

function OwnerDetails({ carDetail }) {
  const phoneNumber = "254798296390"; // WhatsApp number with country code

  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
      <h2 className='font-medium text-2xl mb-3'>Owner / Dealer</h2>
      <img src={carDetail?.userImageUrl} className='w-[100px] h-[100px] rounded-full' alt="Owner" />
      <h2 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>{carDetail?.userName}</h2>
      <h2 className='text-sm text-gray-500 dark:text-gray-400'>{carDetail?.createdBy}</h2>

      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noreferrer" 
        className='w-full mt-6'>
        <Button className='w-full mt-5'>Contact Owner</Button>
      </a>
    </div>
  );
}

export default OwnerDetails;
