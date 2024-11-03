/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='flex justify-between items-center shadow-sm p-4 max-w-screen-xl mx-auto'>
            <Link to='/' className='flex items-center gap-2'>
                <img src='/logo.png' className='h-10 w-10 sm:h-12 sm:w-12' alt='Logo' />
                <span className='font-bold text-xl sm:text-2xl text-primary'>Y Automotive</span>
            </Link>
            <div className='flex items-center gap-5'>
                {isSignedIn ? (
                    <>
                        <UserButton />
                        <Link to='/profile'>
                            <Button className='hidden sm:block'>Submit Listing</Button>           
                        </Link>
                    </>
                ) : (
                    <Button className='hidden sm:block'>Submit Listing</Button>
                )}
                {/* Mobile button for submitting listings */}
                <Button className='sm:hidden'>Submit</Button>
            </div>
        </div>
    );
}

export default Header;
