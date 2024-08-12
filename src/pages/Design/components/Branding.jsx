import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function Branding() {
    return (
        <section className='container-tailwind mt-12 flex items-center justify-between flex-col md:flex-row'>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img className='w-full scale-100' src="/image/assential-img.webp" alt=".." />
            </div>
            <div className="w-full md:w-1/2 pt-0">
                <h1 className='text-4xl font-bold'>
                    Seamless Branding and Execution
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Your brand is more than just what you offer; it’s the essence of how customers perceive your business—your brand’s personality. Our branding and design experts meticulously craft and refine your brand’s image to resonate powerfully with your most profitable target audiences.                </p>
                <Link className="mt-4 block" to="/design/branding">
                    <ColorButton>Explore our professional branding</ColorButton>
                </Link>
            </div>
        </section>
    )
}
