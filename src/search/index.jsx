/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { CarImages, CarListing } from './../../configs/schema';
import { db } from './../../configs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Service from '@/shared/Service';
import CarItem from '@/components/CarItem';
import Header from '@/components/Header';
import Search from '@/components/Search';


function SearchByOptions() {
    const [searchParam] = useSearchParams();
    const [carList, setCarList] = useState([]);
    const condition = searchParam.get('cars');
    const make = searchParam.get('make');
    const price = searchParam.get('price');

    useEffect(() => {
        GetCarList();
    }, []);

    const GetCarList = async () => {
        const result = await db.select()
            .from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(condition !== undefined && eq(CarListing.condition, condition))
            .where(make !== undefined && eq(CarListing.make, make));

        const resp = Service.FormatResult(result);
        console.log(resp);
        setCarList(resp);
    };

    return (
        <div>
            <Header />
            <div className='p-16 bg-black flex justify-center'>
                <Search />
            </div>
            <div className='p-10 md:px-20'>
                <h2 className='font-bold text-sm'>
                    Search Result
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                        {carList?.length > 0 ? carList.map((item, index) => (
                            <div key={index}>
                                <CarItem car={item} />
                            </div>
                        )) : [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='h-[350px] rounded-xl bg-slate-200 animate-pulse'></div>
                        ))}
                    </div>
                </h2>
            </div>
        </div>
    );
}

export default SearchByOptions;
