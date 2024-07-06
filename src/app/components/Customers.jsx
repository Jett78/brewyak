"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = [
    {
        title:"Best beer i have ever had in my entire life",
        desc:"BrewYak is a standout in the craft beer world. Their beers are always top-notch, with unique flavors and high-quality ingredients. Every sip is a delight! Plus, their commitment to sustainability makes them a brand I’m proud to support. Cheers to BrewYak for consistently delivering excellent brews.",
        name:"John Doe",
        role:"CEO",
        company:"ABC Company",
    },
    {
        title:"Best beer i have ever had in my entire life",
        desc:"BrewYak is a standout in the craft beer world. Their beers are always top-notch, with unique flavors and high-quality ingredients. Every sip is a delight! Plus, their commitment to sustainability makes them a brand I’m proud to support. Cheers to BrewYak for consistently delivering excellent brews.",
        name:"Albert Einsten",
        role:"Scientist",
        company:"WebX Company",
    },
    {
        title:"Best beer i have ever had in my entire life",
        desc:"BrewYak is a standout in the craft beer world. Their beers are always top-notch, with unique flavors and high-quality ingredients. Every sip is a delight! Plus, their commitment to sustainability makes them a brand I’m proud to support. Cheers to BrewYak for consistently delivering excellent brews.",
        name:"Nima Rumba",
        role:"Performer",
        company:"ABC Company",
    },
    {
        title:"Best beer i have ever had in my entire life",
        desc:"BrewYak is a standout in the craft beer world. Their beers are always top-notch, with unique flavors and high-quality ingredients. Every sip is a delight! Plus, their commitment to sustainability makes them a brand I’m proud to support. Cheers to BrewYak for consistently delivering excellent brews.",
        name:"John Lenon",
        role:"Songwriter",
        company:"ABC Company",
    },
]

gsap.registerPlugin(ScrollTrigger);
const Customers = () => {
    const customercontainer = useRef();
    const customertitleRef = useRef();
    const customerRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dotts:true,
        centerPadding: "0px",
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      };

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:customercontainer.current,
                start: "top 90%",
                end: "bottom -200%",
                scrub:1,
                pin:true,
            }
    })

    tl.fromTo(customertitleRef.current, 
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
      tl.to(customertitleRef.current,{
        scale:0.3,
        y:-560,
      })
      tl.fromTo(customerRef.current,{
        opacity:0,
        y:150,
    },
      {
      y:-450,
      stagger:0.2,
      opacity:1,
      duration:1,
    },"<")
        })

  return (
   <main className="my-60 h-screen relative " ref={customercontainer}>
    <h2 className='uppercase font-bold text-[60px] text-center' ref={customertitleRef}>our customers are in love with our beer</h2>
      <div className='slider-container absolute inset-0' ref={customerRef}>
        <Slider {...settings} >
           {Reviews.map((data,index) => (
            <div key={index}  className={`${index === currentSlide ? "scale-110 " : "  scale-75" } bg-[#0a073ca7] border-[#0a073ca7] rounded-2xl my-5 py-10 px-4  transition-transform duration-500 ease-in-out border `}>
                 <div className="flex justify-between items-center"> 
                    <section className="flex items-center gap-6">
                        <img src="./avatar.png" alt="avatar" className="w-14 h-14"/>
                        <div>
                            <h2 className="font-bold text-[16px]">{data.name}</h2>
                            <p className="font-egular text-[14px] text-thirdwhite">{data.role},<span className="text-thirdwhite">{data.company}</span></p>
                        </div>
                    </section>

                    <section className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                           <img key={index} src="./star.png" alt={`star-${index}`} />
                     ))}
                    </section>
                 </div>
                 <p className="text-thirdwhite font-regular text-[14px] py-4">{data.desc}</p>

            </div>
           ))}
        </Slider>
      </div>
   </main>
  )
}

export default Customers