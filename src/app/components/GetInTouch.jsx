"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
const GetInTouch = () => {
    const maincontainerRef = useRef()
    const titlecontainerRef = useRef();
    const maintitleRef=useRef();
    const secondarytitleRef = useRef()
    const formRef = useRef()
    const rightbeercontainerRef = useRef()
    const leftbeercontainerRef = useRef()
    const rightbeerRef = useRef()
    const leftbeerRef = useRef()
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:maincontainerRef.current,
                start: "top 90%",
                end: "bottom -300%",
                scrub:1,
                pin:true,
            }
    })
    tl.fromTo(titlecontainerRef.current, 
        { // Initial state
          opacity: 0,
          scale: 0.3,
          y: 50,
        }, 
        { // Final state
          duration: 2,
          opacity: 1,
          scale: 1,
          y: -370,
          ease: "power2.inOut"
        }
      );
      tl.to(maintitleRef.current,{
        opacity:0,
        y:-400,
        ease: "power2.inOut"
      })
      tl.to(secondarytitleRef.current,{
        scale:0.5,
        delay:0.2,
        y:-350,
      },"<")
      tl.from(formRef.current,{
        y:600,
      },"<")
      tl.from(leftbeercontainerRef.current,{
        x:-600,
      },"<")
      tl.from(rightbeercontainerRef.current,{
        x:600,
      },"<")
      tl.to(leftbeerRef.current,{
        y:1150,
        rotateZ:-9.5,
      },)
      tl.to(rightbeerRef.current,{
        y:1150,
        rotateZ:9.5,
      },)
    
})

  return (
   <main className='my-60 h-screen relative ' ref={maincontainerRef}>
       <div className='font-bold text-[64px] uppercase text-center' ref={titlecontainerRef}>
         <h2 ref={maintitleRef}>Curious to taste our brews</h2>
         <h2 ref={secondarytitleRef}>get in <span className='text-primary'>touch</span></h2>
       </div>

      <div className="relative -mt-40">
      <form action="#" className="grid place-items-center absolute left-1/2 -translate-x-1/2 -top-[35em]" ref={formRef}>
         <input type="text" placeholder="Full name"     className="p-4 w-[22em] border-b-2 border-white bg-transparent focus:outline-none " />
         <input type="text" placeholder="Email"     className="p-4 w-[22em] border-b-2 border-white bg-transparent focus:outline-none " />
         <input type="text" placeholder="Subject"     className="p-4 w-[22em] border-b-2 border-white bg-transparent focus:outline-none " />
         <textarea name="text" placeholder="Message" rows={6} className="p-4 mt-8 w-[22em] border-b-2 border-white bg-transparent focus:outline-none "></textarea>
         <button className="bg-primary rounded-lg px-4 py-2 text-black my-6">Send Message</button>
       </form>
       <section className="flex justify-center items-center gap-[25em] absolute -bottom-[1em] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative" ref={leftbeercontainerRef}>
          <img src="./beers/mainleftbeer.png" alt="leftbeer" className="absolute -top-[20em] left-10" ref={leftbeerRef} />
          <img src="./Group.png" alt="stand" className=" " />
       </div>
       <div className="relative" ref={rightbeercontainerRef}>
          <img src="./beers/mainrightbeer.png" alt="leftbeer" className="absolute -top-[19em] right-8 " ref={rightbeerRef}/>
          <img src="./Group.png" alt="stand" className="" />
       </div>
      </section>
      </div>


      <footer className="bg-[url('/footerbackground.png')] bg-cover bg-center w-full h-screen mt-60">
           <figure className="relative">
               <img src="./beers/centerfooter.png" alt="center beer"  className="absolute top-[14em] left-1/2 -translate-x-1/2 "/>
           </figure>
     </footer>
   </main>
  )
}

export default GetInTouch