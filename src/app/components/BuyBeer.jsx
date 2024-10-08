"use client";
import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const BuyBeerData = [
  {
    title: "Wine house",
    img: "./buybeer/buy1.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "Starfish Restaurant",
    img: "./buybeer/buy2.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "Coffee Shop",
    img: "./buybeer/buy3.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "The Chef House",
    img: "./buybeer/buy4.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "The Chef House",
    img: "./buybeer/buy4.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "The Chef House",
    img: "./buybeer/buy4.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "The Chef House",
    img: "./buybeer/buy4.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
  {
    title: "The Chef House",
    img: "./buybeer/buy4.png",
    location: "GoldschmidtstraBe 13, 04103 Leipzig +49387-10-387",
  },
];

gsap.registerPlugin(ScrollTrigger);
const BuyBeer = () => {

  const BuyBeerContainer = useRef()
  const TitleRef = useRef()
  const BuyBeerImg = useRef()
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1, // Ensure one slide is shown at a time for proper centering
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    centerPadding: "0px", // Ensure two slides are shown per row
  };

  useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:BuyBeerContainer.current,
            start: "top 90%",
            end: "bottom -200%",
            scrub:2,
            pin:true,
            markers:true,
        }
    })

    tl.fromTo(BuyBeerContainer.current, 
      { // Initial state
        opacity: 0,
        scale: 0.2,
        y: 50,
      }, 
      { // Final state
        duration: 2,
        opacity: 1,
        scale: 1,
        y: -550,
      }
    );

   
   
  })
  return (
    <main className="my-20" ref={BuyBeerContainer}>
    <h2 className="uppercase font-bold text-[48px] text-center mb-10" ref={TitleRef}>
        Do buy our beer from
      </h2>

      <div className="slider-container mx-20 px-10 " ref={BuyBeerImg}>
        <Slider {...settings}>
          {BuyBeerData.map((data, index) => (
            <div key={index} className="flex justify-center items-center h-full px-40 py-10 ">
              <div className="flex gap-8 items-center">
                <img src={data.img} alt="imgs" />
                <div className="grid gap-2">
                  <h2 className="font-medium text-[24px] text-secondwhite">
                    {data.title}
                  </h2>
                  <p className="w-[230px] text-thirdwhite text-[16px]">
                    {data.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="flex text-4xl items-center gap-40 absolute top-[10em] left-1/2 -translate-x-1/2">
              <button onClick={handlePrev} >
              <MdKeyboardArrowLeft />
                </button>
                <button  onClick={handleNext} >
              <MdKeyboardArrowRight />

                </button>
           </div> */}
      </div>
    </main>
  );
};

export default BuyBeer;
