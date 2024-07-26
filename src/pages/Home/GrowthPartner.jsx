import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function GrowthPartner() {
  return (
    <section className='mt-20 flex gap-8 md:gap-12 items-center flex-col md:flex-row'>
      <div className="w-full md:w-1/2 self-start">
        <div className='w-full h-full overflow-hidden rounded-md'>
          <img
            className='w-full h-full transition-all duration-500 hover:scale-125'
            src="/image/london.jpeg"
            alt=".."
          />
        </div>
      </div>
      <div className="md:w-2/6 w-full">
        <h1 className='text-4xl font-bold'>The trusted business growth partner in London.</h1>
        <p className='mt-4 text-xl opacity-80'>At London Marketing Company, our experts partner with you to maximize your business to its full potential and stand out within its respected industry. We believe that anything is possible when the right people connect.</p>
        <ColorButton className="mt-4">Explore Our Marketing Specialities</ColorButton>
      </div>
    </section>
  )
}
