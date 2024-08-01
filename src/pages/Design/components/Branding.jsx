import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function Branding() {
    return (
        <section className='container-tailwind mt-12 flex items-center justify-between flex-col md:flex-row'>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img className='w-full scale-100' src="/image/assential-img.webp" alt=".." />
            </div>
            <div className="w-full md:w-1/2 pt-0">
                <h1 className='text-4xl font-bold'>
                    Encapsulating branding & delivery.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    We know that a brand is more than just what you sell, it's how customers perceive your business, it's your brand personality. Our branding and design specialists ensure your brand's perception is aligned with your most lucrative target markets.
                </p>
                <ColorButton className="mt-4">
                    Explore our professional branding
                </ColorButton>
            </div>
        </section>
    )
}
