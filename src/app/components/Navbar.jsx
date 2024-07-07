"use client";
import React from 'react';

const Navbar = ({ scrollDirection }) => {
  return (
    <main className={`w-full z-50 fixed h-[82px] mx-auto my-4 transition-transform duration-700 ease-in-out ${scrollDirection === 'down' ? '-translate-y-[7em]' : 'translate-y-0'}`}>
      <nav className='list-none flex justify-center w-full items-center gap-24'>
        <li className='text-primary'>Home</li>
        <li>About Us</li>
        <img src="./logo.png" alt="logo" />
        <li>Our Products</li>
        <li>Contact Us</li>
      </nav>
    </main>
  );
};

export default Navbar;
