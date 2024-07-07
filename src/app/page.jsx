"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About/page';
import Products from './components/Products';
import BuyBeer from './components/BuyBeer';
import Customers from './components/Customers';
import GetInTouch from './components/GetInTouch';
import Lenis from 'lenis'

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



useEffect(() => {
  if (typeof window !== 'undefined') {
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}, []);

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
