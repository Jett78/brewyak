"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from 'react'
const Aboutdata = [
  {
    title: "Best Price Guarenteed",
    img: "./about/dollar.png",
    desc: "Enjoy our beers knowing you're getting the best value every time.",
  },
  {
    title: "Innovation in Brewing",
    img: "./about/bulb.png",
    desc: "Embracing cutting-edge techniques to push the boundaries of beer flavor.",
  },
  {
    title: "Customer Satisfaction",
    img: "./about/like.png",
    desc: "Your satisfaction is our priority, reflected in every beer we brew.",
  },
];

gsap.registerPlugin(ScrollTrigger);
const WhoWeAre = () => {
  const AboutContainer = useRef()
  const AboutRef = useRef()
  const AboutDescRef = useRef()
  const AboutImgRef = useRef()

   useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:AboutContainer.current,
                start: "top 90%",
                end: "bottom -200%",
                scrub:1,
                pin:true,
            }
        })

        tl.fromTo(AboutRef.current, 
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
        tl.to(AboutRef.current,{
          scale:0.3,
          y:-560,
        })

        tl.fromTo(AboutDescRef.current,{
            opacity:0,
            y:120,
        },
          {
          y:-400,
          opacity:1,
          duration:1,
        },"<"
      )
        tl.fromTo(AboutImgRef.current,{
            opacity:0,
            y:150,
        },
          {
          y:-450,
          stagger:0.2,
          opacity:1,
          duration:1,
        },"<"
      )

       
        // tl.to(AboutContainer.current.children,{
        //    y:-300,
        //    opacity:0,
        //    stagger:0.1,
        // })
      })
  return (
    <main className="relative" ref={AboutContainer} >
      <div className="text-center">
        <h2 className="uppercase font-bold text-[90px] opacity-0" ref={AboutRef} >
          who are we <span className="text-primary">?</span>
        </h2>
        <p className="absolute left-1/2 -top-10 -translate-x-1/2  w-[1350px] mx-auto font-medium text-[20px] leading-10 text-light opacity-0" ref={AboutDescRef}>
          We are the best beer brewing company, dedicated to crafting
          exceptional brews that bring people together and create unforgettable
          experiences. At BrewYak, we combine tradition and innovation to craft
          diverse, top-quality beers for every taste.
        </p>
      </div>

      <div className="flex justify-center gap-8 my-8 text-center opacity-0" ref={AboutImgRef} >
        {Aboutdata.map((data,index) => (
            <div key={index} className="border-2 rounded-lg w-[360px] h-[230px] px-4 grid justify-center place-items-center">
                <h2 className="font-medium text-[24px] text-secondwhite">{data.title}</h2>
                    <figure className="bg-[#272361] w-[80px] h-[80px] rounded-full flex items-center justify-center">
                       <img src={data.img} alt="icons" />
                    </figure>
                <p className="text-thirdwhite text-[16px]" id="about">{data.desc}</p>
            </div>
        ))}
      </div>
    </main>
  );
};

export default WhoWeAre;
