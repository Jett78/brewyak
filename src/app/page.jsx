"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About/page';
import Products from './components/Products';
import BuyBeer from './components/BuyBeer';
import Customers from './components/Customers';
import GetInTouch from './components/GetInTouch';

const Page = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className='overflow-hidden'>
      <Navbar scrollDirection={scrollDirection} />
      <HeroSection />
      <About />
      <Products />
      {/* <BuyBeer /> */}
      <Customers />
      <GetInTouch />
    </div>
  );
};

export default Page;
