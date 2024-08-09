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
                    Dedicated, Driven, and Essential
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    We’re not just focused on London; our goal is to become the leading marketing agency across the South of England, providing comprehensive success solutions nationwide. Reach out today to explore our opportunities and see how we can help you achieve your goals
                </p>
                <ColorButton className="mt-4">Contact for job opportunities</ColorButton>
            </div>
        </section>
    )
}
