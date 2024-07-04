"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ProductsData = [
    {
        title:"Ales",
        img:"./products/ales.png",
        desc:"Brewed with top-fermenting yeast at warmer temperatures, resulting in fruity and complex flavors. Common ale styles include Pale Ale, IPA (India Pale Ale), Stout, Porter, and Belgian Ale."
    },
    {
        title:"Lager",
        img:"./products/lager.png",
        desc:"Brewed with top-fermenting yeast at warmer temperatures, resulting in fruity and complex flavors. Common ale styles include Pale Ale, IPA (India Pale Ale), Stout, Porter, and Belgian Ale."
    },
    {
        title:"Hybrid",
        img:"./products/Hybrid.png",
        desc:"Brewed with top-fermenting yeast at warmer temperatures, resulting in fruity and complex flavors. Common ale styles include Pale Ale, IPA (India Pale Ale), Stout, Porter, and Belgian Ale."
    },
]
const Products = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:false,
      };
  return (
   <main className='my-40'>
    <h2 className='uppercase text-center text-[40px] font-bold'>our products</h2>
    <div className='mt-[60px]'>
       <div className='slider-container'>
        <Slider {...settings}>
        {ProductsData.map((data,index) => (
            <div key={index} className='grid place-items-center gap-4 text-center'>
                <h2 className='text-[40px] font-bold'>{data.title}</h2>
                <p className='w-[960px] mx-auto text-[18px] font-regular text-secondwhite'>{data.desc}</p>
                   <div className='relative'>
                       <figure className=''>
                          <img src="./Group.png" alt="stand" className='mt-80 mx-auto' />
                       </figure>
                       <figure className='absolute bottom-40 left-1/2 -translate-x-1/2'>
                        <img src={data.img} alt="" />
                       </figure>
                    </div>            
            </div>
        ))}
            </Slider>

       </div>
    </div>
   </main>
)
}

export default Products