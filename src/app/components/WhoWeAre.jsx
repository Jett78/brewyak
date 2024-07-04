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
  return (
    <main className="my-40">
      <div className="text-center">
        <h2 className="uppercase font-bold text-[32px]">
          who are we <span className="text-primary">?</span>
        </h2>
        <p className="w-[1350px] mx-auto font-medium text-[20px] leading-10 text-light py-8">
          We are the best beer brewing company, dedicated to crafting
          exceptional brews that bring people together and create unforgettable
          experiences. At BrewYak, we combine tradition and innovation to craft
          diverse, top-quality beers for every taste.
        </p>
      </div>

      <div className="flex justify-center gap-8 my-8 text-center">
        {Aboutdata.map((data,index) => (
            <div key={index} className="border-2 rounded-lg w-[360px] h-[230px] px-4 grid justify-center place-items-center">
                <h2 className="font-medium text-[24px] text-secondwhite">{data.title}</h2>
                    <figure className="bg-[#272361] w-[80px] h-[80px] rounded-full flex items-center justify-center">
                       <img src={data.img} alt="icons" />
                    </figure>
                <p className="text-thirdwhite text-[16px]">{data.desc}</p>
            </div>
        ))}
      </div>
    </main>
  );
};

export default WhoWeAre;
