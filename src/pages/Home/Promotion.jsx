import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function Promotion() {
  return (
    <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-between flex-col md:flex-row'>
      <div className="w-full md:w-1/2 self-start">
        <div className='w-full overflow-hidden rounded-md'>
          <img
            className='w-full h-full transition-all duration-500 hover:scale-125'
            src="/image/car.webp"
            alt=".."
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className='text-4xl font-bold'>Powerful and meaningful media promotions.</h1>
        <h3 className='mt-4 text-base font-bold'>Web Design Agency London</h3>
        <p className='mt-4 text-xl opacity-80'>Your website is the digital face of your business online. Invest in empowering and encapsulating website design and full-stack development.</p>
        <ColorButton className="mt-4">Check Our Website Portfolio</ColorButton>
      </div>
    </section>
  )
}
