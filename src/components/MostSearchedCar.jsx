/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from '../../configs';
import { CarImages, CarListing } from '../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import Service from '@/shared/Service';

function MostSearchedCar() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db.select().from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);

    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  return (
    <div className='mx-5 md:mx-20 overflow-hidden'>
      <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Popular Picks</h2>
      <Carousel>
        <CarouselContent className='flex'>
          {carList.map((car, index) => (
            <CarouselItem 
              key={index} 
              className='basis-full md:basis-1/4 lg:basis-1/4 flex-shrink-0'
            >
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
