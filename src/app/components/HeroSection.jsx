"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
    const bigtitle = useRef()
    const centerText = useRef()
    const beergoodText = useRef()
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
          rotateZ: -10,
          x: -550,
          duration: 2.5,
          ease: "power2.inOut",
      })
        tl.to(rightbeerimg.current, {
            rotateZ:10,
            x: 550,
            duration: 2.5,
            ease:"power2.inOut",
            
          },"<");
        tl.to(bigtitle.current, {
            x: -1750,
            duration: 2,
            ease:"power2.inOut",
    
          },"<");
        tl.to(centerText.current, {
            opacity:1,
            scale:1,
            delay:0.8,
            duration: 2.5,
            ease:"power2.inOut",
           
          },"<");
        tl.from(beergoodText.current, {
          x:1100,
            opacity:1,
            delay:0.8,
            duration: 2.5,
            ease:"power2.inOut",
           
          },"<");
    })
  return (
   <main className='relative w-full overflow-hidden h-screen top-20'>
      <h2 className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[240px] font-bold text-center text-bigText' ref={bigtitle}>REFRESHING</h2>
      <div className='absolute flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <img src="./beers/mainleftbeer.png" alt="beer" ref={leftbeerimg}/>
          <img src="./beers/mainrightbeer.png" alt="beer" ref={rightbeerimg}/>
      </div>
      <div className='whitespace-nowrap text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-0' ref={centerText}>
        <h2 className='uppercase  font-bold text-[50px] '>Let’s get fizz-ical with some beer</h2>
        <button className='mt-8 text-thirdwhite font-bold text-[18px] border border-primary rounded-xl px-6 py-4'>EXPLORE NOW</button>
      </div>

      <div>
        <h2 className='uppercase absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  font-bold text-[50px] ' ref={beergoodText}>Our beer is so good</h2>
      </div>
   </main>
  )
}

export default HeroSection