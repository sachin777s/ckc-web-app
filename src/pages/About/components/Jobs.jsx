import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function Jobs() {
    return (
        <section name="job-opportunities" className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className='w-full h-full transition-all duration-500 hover:scale-125'
                        src="/image/RES06265.webp"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/6 w-full">
                <h1 className='text-4xl font-bold'>
                Committed, determined & pivotal.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                We aren't stopping at London. We are dedicated to becoming the South of England’s leading marketing company, offering a complete success solution to clients all over the country. Contact us today to learn more about our job opportunities.
                </p>
                <ColorButton className="mt-4">Contact for job opportunities</ColorButton>
            </div>
        </section>
    )
}
