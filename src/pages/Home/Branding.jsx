import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function Branding() {
  return (
    <section className='container-tailwind mt-12 flex items-center justify-center flex-col-reverse md:flex-row'>
      <div className="w-full md:w-1/2">
        <h1 className='text-4xl font-bold'>Sleek & inspirational design & branding.</h1>
        <p className='mt-4 text-xl opacity-80'>We believe in the power of branding and design to create unique personalities for our client's businesses. We work with you and your team on an individual level, tailoring everything to inspire a sense of identity and originality.</p>
        <ColorButton className="mt-4">View Our Designing and Branding</ColorButton>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className='w-full md:w-3/4' src="/image/assential-img.webp" alt=".." />
      </div>
    </section>
  )
}
