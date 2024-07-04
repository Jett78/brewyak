import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from "./pages/About/page"
import Products from './components/Products'

const page = () => {
  return (
    <div className=''>
      <Navbar/> 
     <HeroSection/> 
      <About/>
      <Products/>
    </div>
  )
}

export default page