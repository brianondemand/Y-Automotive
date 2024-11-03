/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from './ui/button';
import { UserButton, useUser, useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
    const { user, isSignedIn } = useUser();
    const clerk = useClerk(); // Use the Clerk instance
    console.log('Is Signed In:', isSignedIn);

    const handleLogin = async () => {
        // Opens the Clerk sign-in modal
        clerk.openSignIn();
    };

    return (
        <div className='flex justify-between items-center shadow-sm p-4 max-w-screen-xl mx-auto'>
            <Link to='/' className='flex items-center gap-2'>
                <img src='/logo.png' className='h-10 w-10 sm:h-12 sm:w-12' alt='Logo' />
                <span className='font-bold text-xl sm:text-2xl text-primary'>Y Automotive</span>
            </Link>
            
            <div className='flex items-center gap-5'>
                {isSignedIn ? (
                    <>
                        <Link to='/profile'>
                            <Button className='hidden sm:block'>My Listings</Button>           
                        </Link>
                        <Link to='/add-listing'>
                            <Button className='hidden sm:block'>Add New Listing</Button>           
                        </Link>
                        
                    </>
                ) : (
                    <Button onClick={handleLogin}>Log In</Button> // Trigger sign-in modal on click
                )}

                {/* Dropdown menu for small screens, shown only if user is signed in */}
                {isSignedIn && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className='sm:hidden p-2 focus:outline-none'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                </svg>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="sm:hidden">
                            <DropdownMenuItem asChild>
                                <Link to='/listings'>
                                    My Listings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to='/add-listing'>
                                    Add New Listing
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
                <UserButton />
            </div>
            
        </div>
    );
}

export default Header;
