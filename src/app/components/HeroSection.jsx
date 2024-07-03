"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
    const bigtitle = useRef()
    const centerText = useRef()
    const leftbeerimg = useRef()
    const rightbeerimg = useRef()


    useGSAP(()=>{
        const tl = gsap.timeline({
            // scrollTrigger:{
            //     trigger:bigtitle.current,
            //     start:"top 30%",
            //     scrub:2,
            //     pin:true,
            //     markers:true,
            // }
        })
        tl.to(leftbeerimg.current, {
            x: -550, 
            duration: 2.5,
            ease:"power2.inOut",
           
          },"<");
        tl.to(rightbeerimg.current, {
            x: 550,
            duration: 2.5,
            ease:"power2.inOut",
            
          },"<");
        tl.to(bigtitle.current, {
            x: -1750,
            duration: 2,
            ease:"power2.inOut",
    
          },"<");
        tl.from(centerText.current, {
            opacity:0,
            scale:0,
            delay:0.8,
            duration: 2.5,
            ease:"power2.inOut",
           
          },"<");
    })
  return (
   <main className='relative mt-[8em]'>
      <h2 className='text-[240px] font-bold text-center text-bigText' ref={bigtitle}>REFRESHING</h2>
      <div className='absolute flex left-[30em] -top-10'>
          <img src="./beers/mainleftbeer.png" alt="beer" ref={leftbeerimg}/>
          <img src="./beers/mainrightbeer.png" alt="beer" ref={rightbeerimg}/>
      </div>
      <div className='whitespace-nowrap text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' ref={centerText}>
        <h2 className='uppercase  font-bold text-[50px] '>Let’s get fizz-ical with some beer</h2>
        <button className='mt-8 text-light font-bold text-[18px] border border-primary rounded-xl px-6 py-4'>EXPLORE NOW</button>
      </div>

      {/* <div>
        <h2 className='uppercase  font-bold text-[50px] '>Our beer is so good</h2>
      </div> */}
   </main>
  )
}

export default HeroSection