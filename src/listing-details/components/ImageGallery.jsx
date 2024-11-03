/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ImageGallery({ carDetail }) {
  return (
    <div>
      <img
        src={carDetail?.images[0]?.imageUrl}
        className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl'
        alt={carDetail?.listingTitle}
      />
    </div>
  );
}

export default ImageGallery;
