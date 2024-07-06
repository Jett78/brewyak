import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from "./pages/About/page"
import Products from './components/Products'
import BuyBeer from './components/BuyBeer'
import Customers from './components/Customers'
import GetInTouch from './components/GetInTouch'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/> 
     <HeroSection/> 
      <About/>
      <Products/>
      <BuyBeer/>
      <Customers/>
      <GetInTouch/>
    </div>
  )
}

export default page