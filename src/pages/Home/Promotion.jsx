import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function Promotion() {
  return (
    <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-between flex-col md:flex-row'>
      <div className="w-full md:w-1/2 self-start">
        <div className='w-full overflow-hidden rounded-md'>
          <img
            className='w-full h-full transition-all duration-500 hover:scale-125'
            src="/image/social-3408791_640.webp"
            alt=".."
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className='text-4xl font-bold'>Impactful and Purposeful Media Promotion</h1>
        <h3 className='mt-4 text-base font-bold'>Web Design Agency Noida</h3>
        <p className='mt-4 text-xl opacity-80'>Your online presence starts with your website. Invest in exceptional design and thorough full-stack development to truly represent your business.</p>
        <ColorButton className="mt-4">Check Our Website Portfolio</ColorButton>
      </div>
    </section>
  )
}
 