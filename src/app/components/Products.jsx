"use client"
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductsData = [
  {
    title: "Ales",
    img: "./products/ales.png",
    desc: "Brewed with top-fermenting yeast at warmer temperatures, resulting in fruity and complex flavors. Common ale styles include Pale Ale, IPA (India Pale Ale), Stout, Porter, and Belgian Ale.",
    color: "#5146D5"
  },
  {
    title: "Lager",
    img: "./products/lager.png",
    desc: "Brewed with top-fermenting yeast at warmer temperatures, resulting in fruity and complex flavors. Common ale styles include Pale Ale, IPA (India Pale Ale), Stout, Porter, and Belgian Ale.",
    color: "#D96D8F" // Example color for Lager
  },
  {
    title: "Hybrid",
    img: "./products/Hybrid.png",
    desc: "They blend characteristics of both ales and lagers, often through fermentation techniques or temperature control. Examples include Kölsch, California Common, and Cream Ale.",
    color: "#48C576" // Example color for Hybrid
  },
];

const Products = () => {
  const [slider, setSlider] = useState(null);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    slider?.slickNext();
    setNextButtonClicked(true);
    setTimeout(() => setNextButtonClicked(false), 200);
  };

  const handlePrev = () => {
    slider?.slickPrev();
    setPrevButtonClicked(true);
    setTimeout(() => setPrevButtonClicked(false), 200);
  };

  return (
    <main className='my-40 relative'>
      <h2 className='uppercase text-center text-[40px] font-bold'>our products</h2>
      <div className='mt-[60px]'>
        <div className='slider-container'>
          <Slider ref={setSlider} {...settings}>
            {ProductsData.map((data, index) => (
              <div key={index} className='grid place-items-center gap-4 text-center'>
                <h2 className='text-[40px] font-bold' style={{ color: data.color }}>
                  {data.title}
                </h2>
                <p className='w-[960px] mx-auto text-[18px] font-regular text-secondwhite'>{data.desc}</p>
                <div className='relative'>
                  <figure>
                    <img src="./Group.png" alt="stand" className='mt-80 mx-auto' />
                  </figure>
                  <figure className='absolute bottom-40 left-1/2 -translate-x-1/2'>
                    <img src={data.img} alt={data.title} />
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl'>
            <div className='flex gap-60'>
              <div onClick={handlePrev} className={`${prevButtonClicked ? "scale-90" : "scale-100"} cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100">
                  <path fill="currentColor" d="M49.132 21.984L12.714 48.039a2.516 2.516 0 0 0-1.051 2.043v.006a2.52 2.52 0 0 0 1.059 2.048L49.14 78.023a2.513 2.513 0 0 0 2.612.183a2.508 2.508 0 0 0 1.361-2.236V63.787l32.709.001a2.514 2.514 0 0 0 2.515-2.516l-.001-22.541a2.515 2.515 0 0 0-2.516-2.516H53.114V24.029c0-.94-.53-1.803-1.367-2.237a2.51 2.51 0 0 0-2.615.192"/>
                </svg>
              </div>
              <div onClick={handleNext} className={`${nextButtonClicked ? "scale-90" : "scale-100"} cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100">
                  <path fill="currentColor" d="m50.868 78.016l36.418-26.055a2.516 2.516 0 0 0 1.051-2.043v-.006a2.52 2.52 0 0 0-1.059-2.048L50.86 21.977a2.513 2.513 0 0 0-2.612-.183a2.509 2.509 0 0 0-1.361 2.236v12.183l-32.709-.001a2.514 2.514 0 0 0-2.515 2.516l.001 22.541a2.515 2.515 0 0 0 2.516 2.516h32.706v12.187c0 .94.53 1.803 1.366 2.237a2.512 2.512 0 0 0 2.616-.193"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
