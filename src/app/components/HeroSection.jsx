"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const process = [
  {
    img: "./herosection/img1.png",
    title: "Selected Malts",
    desc: "Brewers aim to achieve a unique and balanced flavor profile.",
  },
  {
    img: "./herosection/img2.png",
    title: "Quality Hops",
    desc: "Quality hops are a critical ingredient in the final product.",
  },
  {
    img: "./herosection/img3.png",
    title: "Special Water",
    desc: "Special water is a crucial element in beer brewing impacting the taste.",
  },
];
const process2 = [
  {
    img: "./herosection/img4.png",
    title: "Unique Yeast",
    desc: "Unique yeast strains play a distinctive role in beer brewing, contributing significantly to the flavor.",
  },
  {
    img: "./herosection/img5.png",
    title: "Perennial Recipes",
    desc: "Perennial recipes in beer brewing refer to enduring and timeless formulations that remain consistent over time.",
  },
  {
    img: "./herosection/img6.png",
    title: "Modern Equipments",
    desc: "Modern equipment plays crucial role in enhancing efficiency and consistency throughout the brewing process.",
  },
];

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const maincontainerref = useRef();
  const bigtitle = useRef();
  const centerText = useRef();
  const mainref = useRef();
  const beergoodText = useRef();
  const leftbeerimg = useRef();
  const rightbeerimg = useRef();
  const whyText = useRef();
  const stepsRef = useRef();
  const stepsRef2 = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainref.current,
        start: "center center",
        end: "bottom -300%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(leftbeerimg.current, {
      rotateZ: -10,
      x: -550,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.to(
      rightbeerimg.current,
      {
        rotateZ: 10,
        x: 550,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.to(
      bigtitle.current,
      {
        x: -1750,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.to(
      centerText.current,
      {
        opacity: 1,
        delay: 0.2,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    //second animation
    //   tl.to(leftbeerimg.current, {
    //     x: -1550,
    //     duration: 1,
    //     ease: "power2.inOut",
    //    },)
    //  tl.to(centerText.current, {
    //     x:-1500,
    //     duration: 1,
    //     ease:"power2.inOut",
    //    },"<");
    //   tl.to(rightbeerimg.current, {
    //     x: -1550,
    //     duration: 1,
    //     ease:"power2.inOut",
    //   },"<");

    tl.to(maincontainerref.current, {
      x: -1550,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.fromTo(
      beergoodText.current,{
        opacity:0,
        x: 1250,

      },
      {
        x:0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.from(whyText.current, {
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
    });
    tl.to(
      beergoodText.current,
      {
        y: -200,
        opacity: 1,
        scale: 0.3,
        delay: 0.8,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.fromTo(
      stepsRef.current.children,
      {
        y: 350,
        opacity:0,
      },
      {
        y:0,
        opacity: 1,
        stagger:0.2,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.to(stepsRef.current, {
      x: -1250,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.fromTo(
      stepsRef2.current,
      {
        opacity:0,
        x:1550,
      },
      {
        x:0,
        opacity:1,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    // tl.to(beergoodText.current, {
    //   y: -600,
    //   opacity: 0,
    //   scale: 0.3,
    //   duration: 1,
    //   ease: "power2.inOut",
    // });

    // tl.to(
    //   stepsRef2.current.children,
    //   {
    //     y: -100,
    //     duration: 0.5,
    //     stagger: 0.2,
    //     opacity: 0,
    //     scale: 0.5,
    //     ease: "power2.inOut",
    //   },
    //   "<"
    // );
  });
  return (
    <main className="relative w-full h-[80vh]" ref={mainref}>
      <div ref={maincontainerref} className="pt-[40em]">
        <h2
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[240px] font-bold text-center text-bigText"
          ref={bigtitle}
        >
          REFRESHING
        </h2>
        <div className="absolute flex  gap-[-60px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <figure className="rotate-[7deg]">
            <img src="./beers/mainleftbeer.png" alt="beer" ref={leftbeerimg} />
          </figure>
          <figure className="-rotate-[7deg]">
            <img
              src="./beers/mainrightbeer.png"
              alt="beer"
              ref={rightbeerimg}
            />
          </figure>
        </div>
        <div
          className="whitespace-nowrap text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 scale-0"
          ref={centerText}
        >
          <h2 className="uppercase  font-bold text-[50px] ">
            Let’s get fizz-ical with some beer
          </h2>
          <button className="mt-8 text-thirdwhite font-bold text-[18px] border border-primary rounded-xl px-6 py-4">
            EXPLORE NOW
          </button>
        </div>
      </div>

      <div>
        <h2
          className="uppercase absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  font-bold text-[90px] whitespace-nowrap opacity-0"
          ref={beergoodText}
        >
          <span ref={whyText}>Why</span> Our beer is so good
        </h2>
      </div>

      {/* process container */}
      <div
        className="flex justify-center gap-[60px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        ref={stepsRef}
      >
        {process.map((data, index) => (
          <div
            key={index}
            className="py-8 w-[250px] h-[290px] border rounded-lg grid gap-2 place-items-center text-center opacity-0"
          >
            <figure className="bg-[#272361] w-[80px] h-[80px] rounded-full flex items-center justify-center">
              <img src={data.img} alt="icons" />
            </figure>
            <h2 className="font-medium text-[22px] text-secondwhite">
              {data.title}
            </h2>
            <p className="w-[210px] font-regular text-[16px] text-thirdwhite">
              {data.desc}
            </p>
          </div>
        ))}
      </div>

      {/* process container-2 */}
      <div
        className="flex justify-center gap-[60px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0"
        ref={stepsRef2}
      >
        {process2.map((data, index) => (
          <div
            key={index}
            className="py-8 w-[250px] h-[290px] border rounded-lg grid gap-2 place-items-center text-center"
          >
            <figure className="bg-[#272361] w-[80px] h-[80px] rounded-full flex items-center justify-center">
              <img src={data.img} alt="icons" />
            </figure>
            <h2 className="font-medium text-[22px] text-secondwhite">
              {data.title}
            </h2>
            <p className="w-[210px] font-regular text-[16px] text-thirdwhite">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HeroSection;
