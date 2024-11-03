/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import React from 'react';
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({ carDetail }) {
  const phoneNumber = "254798296390"; // WhatsApp number with country code
  const message = "Hello. I want to make an offer for this car."; // Message for WhatsApp
  const pageLink = window.location.href; // Current page link

  return (
    <div className='p-5 sm:p-10 rounded-xl border shadow-md'>
      <h2 className='font-medium text-xl sm:text-2xl mb-1'>Our Price</h2>
      <h2 className='font-bold text-lg sm:text-xl'>
        Ksh.{carDetail ? carDetail.sellingPrice : 'N/A'}
      </h2>
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`${message} ${pageLink}`)}`} 
        target="_blank" 
        rel="noreferrer"
      >
        <Button className="w-full mt-5" size="lg">
          <MdOutlineLocalOffer className='text-lg mr-2' />Make an Offer Price
        </Button>
      </a>
    </div>
  );
}

export default Pricing;
