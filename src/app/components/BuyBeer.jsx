"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
];

const BuyBeer = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1, // Ensure one slide is shown at a time for proper centering
    speed: 500,
    rows: 2,
    slidesPerRow: 2, // Ensure two slides are shown per row
  };

  return (
    <main className="my-20">
      <h2 className="uppercase font-bold text-[48px] text-center mb-10">
        Do buy our beer from
      </h2>

      <div className="slider-container mx-60">
        <Slider {...settings}>
          {BuyBeerData.map((data, index) => (
            <div key={index} className="flex justify-center items-center h-full px-4">
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
      </div>
    </main>
  );
};

export default BuyBeer;
