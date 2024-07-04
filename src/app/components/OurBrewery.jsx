"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from 'react'
const Brewerydata = [
    {
      title: "Malt Mashing",
      img: "./BreweryProcess/mashing.png",
      desc: "Malt mashing is a pivotal stage in beer production, involving the activation of enzymes within malted barley to convert starches into fermentable sugars.",
    },
    {
      title: "Filtration & Boiling",
      img: "./BreweryProcess/boiling.png",
      desc: "Filtration and boiling enhance the beer's clarity and purity by removing solids and unwanted particles from the boiled wort, resulting in a clean liquid.",
    },
    {
      title: "fermentation & Cooling",
      img: "./BreweryProcess/fermentation.png",
      desc: "After boiling and cooling the wort, it's transferred to fermentation vessels where yeast is added to begin fermentation, crucial in shaping the final beer.",
    },
    {
      title: "Filtration & Bottling",
      img: "./BreweryProcess/fermentation.png",
      desc: "After the fermentation and maturation stages, beer typically undergoes filtration and bottling to achieve clarity, stability, and prepare it for distribution.",
    },
  ];

gsap.registerPlugin(ScrollTrigger);
const OurBrewery = () => {
  const BreweryContainer = useRef()
  const BreweryRef = useRef()
  const BreweryImgRef = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:BreweryContainer.current,
            start: "center center",
            end: "bottom -300%",
            scrub:1,
            pin:true,
            markers:true,
        }
    })

    tl.fromTo(BreweryRef.current, 
      { // Initial state
        opacity: 0,
        scale: 0.3,
        y: 550,
      }, 
      { // Final state
        duration: 2,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2.inOut"
      }
    );
    tl.to(BreweryRef.current,{
      scale:0.4,
      y:-200,
    })

    tl.fromTo(BreweryImgRef.current,{
        opacity:0,
        y:250,
    },
      {
      y:0,
      stagger:0.2,
      opacity:1,
      duration:1,
    }
  )
    tl.to(BreweryContainer.current.children,{
       y:-300,
       opacity:0,
       stagger:0.1,
    })
  })
  return (
    <main className='my-60 relative ' ref={BreweryContainer}>
        <h2 className="w-[1500px] mx-auto text-center uppercase font-bold text-[64px] opacity-0" ref={BreweryRef}> Our brewery uses classical individual beer technology.</h2>
        <div className='flex justify-center gap-[18px] my-[80px] absolute left-1/2 -top-10 -translate-x-1/2 opacity-0' ref={BreweryImgRef}>
            {Brewerydata.map((data,index) => (
                <div key={index} className='w-[325px] grid gap-8 place-items-center text-center'>
                    <img src={data.img} alt="icon" />
                    <h2 className='text-primary font-medium text-[24px]'>{data.title}</h2>
                    <p className='text-thirdwhite text-[15px] font-regular'>{data.desc}</p>
                </div>
            ))}
        </div>
    </main>
  )
}

export default OurBrewery