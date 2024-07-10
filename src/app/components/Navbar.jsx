"use client";
import React from 'react';
import { Link, useLocation } from "react-router-dom";


const navdata = [
  {
    name:"Home",
    path:"#",

  },
  {
    name:"About Us",
    path:"#about",
  },
  {
    name:"Our Products",
    path:"#products",

  },
  {
    name:"Contact Us",
    path:"#contact",

  },
]

const Navbar = ({ scrollDirection }) => {
  const location = useLocation();
  return (
    <main className={`w-full z-50 fixed h-[82px] mx-auto my-4 transition-transform duration-700 ease-in-out ${scrollDirection === 'down' ? '-translate-y-[7em]' : 'translate-y-0'}`}>
      <div className='list-none flex justify-center w-full items-center gap-24'>
      {navdata.slice(0, 2).map((data, index) => ( // Map only the first two items
          <nav key={index}>
            <Link href={data.path} className={`${location.pathname === data.path?"text-primary":"text-white"}`}>{data.name}</Link>
          </nav>
        ))}
        <img src="./logo.png" alt="logo" /> {/* Image after the first two mapped items */}
        {navdata.slice(2).map((data, index) => ( // Map the remaining items
          <nav key={index + 2}>
            <Link href={data.path}>{data.name}</Link>
            </nav>
        ))}
      </div>
    </main>
  );
};

export default Navbar;

{/* <li className='text-primary'>Home</li>
        <li>About Us</li>
        <li>Our Products</li>
        <li>Contact Us</li> */}
