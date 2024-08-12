import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function Branding() {
  return (
    <section className='container-tailwind mt-12 flex items-center justify-center flex-col-reverse md:flex-row'>
      <div className="w-full md:w-1/2">
        <h1 className='text-4xl font-bold'>Elegant and Motivating Design & Branding</h1>
        <p className='mt-4 text-xl opacity-80'>We harness the potential of branding and design to craft distinct identities for our clients’ businesses. By collaborating closely with you and your team, we tailor each element to evoke a unique sense of identity and originality.</p>
        <Link className='mt-4 block' to={"/design/branding"}>
          <ColorButton>View Our Designing and Branding</ColorButton>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className='w-full md:w-3/4' src="/image/assential-img.webp" alt=".." />
      </div>
    </section>
  )
}
