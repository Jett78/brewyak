"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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
  const [slider, setSlider] = useState(null);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  
    const customercontainer = useRef();
    const customertitleRef = useRef();
    const customerRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(0);
     
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

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        dots:true,
        centerPadding: "0px",
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        appendDots: dots => (
          <div style={{ bottom: '-50px' }}>
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: currentSlide === i ? "white" : "rgba(255, 255, 255, 0.5)",
              display: "inline-block",
              margin: "0 5px",
            }}
          />
        ),
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
        scale:0.5,
        y:-520,
      })
      tl.fromTo(customerRef.current,{
        opacity:0,
        y:50,
    },
      {
      y:-400,
      stagger:0.2,
      opacity:1,
      duration:0.5,
    },"<")

    tl.to(customercontainer.current,{
      y:-800,
      opacity:0,
      scale:0.5,
    })
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

           <div className="flex text-4xl items-center gap-60 absolute top-[10em] left-1/2 -translate-x-1/2">
              <button onClick={handlePrev} className={`${prevButtonClicked ? "scale-90" : "scale-100"} cursor-pointer`}>
              <MdKeyboardArrowLeft />
                </button>
                <button  onClick={handleNext} className={`${nextButtonClicked ? "scale-90" : "scale-100"} cursor-pointer`}>
              <MdKeyboardArrowRight />

                </button>
           </div>
      </div>
   </main>
  )
}

export default Customers