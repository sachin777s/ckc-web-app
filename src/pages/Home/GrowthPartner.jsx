import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

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
        <h1 className='text-4xl font-bold'>Your Premier Partner for Unleashing Business Success in Noida</h1>
        <p className='mt-4 text-xl opacity-80'>At India Marketing Company, we work hand-in-hand with you to propel your business to new heights and set it apart in its industry. We believe that extraordinary success is within reach when expertise and vision align seamlessly. Let’s make remarkable achievements together..</p>
        <Link className='block mt-4' to={"/marketing"}>
          <ColorButton>Explore Our Marketing Specialities</ColorButton>
        </Link>
      </div>
    </section>
  )
}
