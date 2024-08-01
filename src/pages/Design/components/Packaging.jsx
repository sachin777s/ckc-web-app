import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function Packaging() {
    return (
        <section className='container-tailwind w-full mt-12 flex gap-8 md:gap-12 items-center justify-around flex-col-reverse md:flex-row'>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Targeted product packaging .
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    With a focus on creativity, our packaging designers are committed to delivering innovative and stylish solutions for every project. We care about making sure that you have an eye-catching product packaging design.
                </p>
                <ColorButton className="mt-4">View our packaging designs</ColorButton>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="h-full w-[20rem] md:w-auto max-w-[28rem]"
                        src="/image/NHB_Creative_KK_A-removebg.webp"
                        alt=".."
                    />
                </div>
            </div>
        </section>
    )
}