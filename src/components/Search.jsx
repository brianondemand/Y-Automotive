/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from '@/shared/Data';
import { Link } from 'react-router-dom';

function Search() {
    const [cars, setCars] = useState();
    const [make, setMake] = useState();
    const [price, setPrice] = useState();

    return (
        <div className="p-3 md:p-5 bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-center w-full md:w-[80%] lg:w-[60%] mx-auto">
            <Select onValueChange={(value) => setCars(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-lg">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Used">Used</SelectItem>
                    <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="horizontal" className="block md:hidden w-full my-2" />
            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => setMake(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-lg">
                    <SelectValue placeholder="Car Brand" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarBrand.map((maker, index) => (
                        <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Separator orientation="horizontal" className="block md:hidden w-full my-2" />
            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => setPrice(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-lg">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {Data.PriceRange.map((price, index) => (
                        <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Link to={'/search?cars=' + cars + "&make=" + make + "&price=" + price} className="mt-2 md:mt-0">
                <CiSearch className="text-3xl md:text-4xl lg:text-5xl bg-primary rounded-full p-2 md:p-3 lg:p-4 text-white hover:scale-105 transition-all cursor-pointer" />
            </Link>
        </div>
    );
}

export default Search;
