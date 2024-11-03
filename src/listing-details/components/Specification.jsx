/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import IconField from '@/add-listing/components/IconField'
import CarSpecification from '@/shared/CarSpecification'
import React from 'react'

function Specification({ carDetail }) {
    //console.log(carDetail);
    
    return (
        <div className='mt-10 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h2 className='font-medium text-2xl'>Specifications</h2>
            {carDetail?CarSpecification.map((item, index) => (
                <div className='mt-5 flex items-center justify-between'>
                    <h2 className='flex gap-2'>
                        <IconField icon={item.icon} />
                        {item.label}
                    </h2>
                    <h2>{carDetail?.[item?.name]}</h2>
                </div>
            ))
            :
            <div className='w-full h-[500px] rounded-xl bg-slate-200 animate-pulse'> </div>
        }

        </div>
    )
}

export default Specification
