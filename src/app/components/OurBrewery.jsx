import React from 'react'

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
const OurBrewery = () => {
  return (
    <main className='my-40'>
        <h2 className="w-[750px] mx-auto text-center uppercase font-bold text-[32px]"> Our brewery uses classical individual beer technology.</h2>
        <div className='flex justify-center gap-[18px] my-[80px]'>
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