import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function GrowthPartner() {
  return (
    <section className='container-tailwind mt-20 flex gap-8 md:gap-12 items-center flex-col md:flex-row'>
      <div className="w-full md:w-1/2 self-start">
        <div className='w-full h-full overflow-hidden rounded-md'>
          <img
            className='w-full h-full transition-all duration-500 hover:scale-125'
            src="/image/technology-6701406_1920.jpg"
            alt=".."
          />
        </div>
      </div>
      <div className="md:w-2/6 w-full">
        <h1 className='text-4xl font-bold'>Your Premier Partner for Business Growth in Noida</h1>
        <p className='mt-4 text-xl opacity-80'>At London Marketing Company, our team collaborates closely with you to unlock your business's full potential and distinguish it in its industry. We’re firm believers that remarkable achievements are possible when the right expertise and vision come together.</p>
        <ColorButton className="mt-4">Explore Our Marketing Specialities</ColorButton>
      </div>
    </section>
  )
}
