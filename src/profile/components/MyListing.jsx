/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { db } from '../../../configs';
import { CarImages, CarListing } from '../../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '@/shared/Service';
import CarItem from '@/components/CarItem';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function MyListing() {
    const { user } = useUser();
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        if (user) {
            GetCarListing();
        }
    }, [user]);

    const GetCarListing = async () => {
        try {
            const result = await db.select().from(CarListing)
                .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
                .where(eq(CarListing.createdBy, user.primaryEmailAddress.emailAddress))
                .orderBy(desc(CarListing.id));

            const resp = Service.FormatResult(result);
            setCarList(resp);
        } catch (error) {
            // Handle error if necessary
        }
    };

    return (
        <div className='mt-7'>
            {/* Grid layout for large screens */}
            <div className='hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {carList.map((item, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <div className="h-[400px] flex flex-col"> {/* Set fixed height here */}
                            <CarItem car={item} />
                        </div>
                        <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-2'>
                            <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                                <Button variant='default' className='w-full'><MdEdit />Edit</Button>
                            </Link>
                            <Button variant='destructive'><FaTrash /></Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Single column layout for small screens */}
            <div className='lg:hidden'>
                {carList.map((item, index) => (
                    <div key={index} className="flex flex-col h-full mb-5">
                        <CarItem car={item} />
                        <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-2'>
                            <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                                <Button variant='default' className='w-full'><MdEdit />Edit</Button>
                            </Link>
                            <Button variant='destructive'><FaTrash /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyListing;
