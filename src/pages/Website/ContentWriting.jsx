import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function ContentWriting() {
    return (
        <section className='mt-20 pt-20 flex gap-12 items-center flex-col-reverse md:flex-row justify-between border-t-4 border-gray-200'>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <h1 className='text-4xl font-bold'>Sleek & inspirational design & branding.</h1>
                <p className='mt-4 text-xl opacity-80'>We believe in the power of branding and design to create unique personalities for our client's businesses. We work with you and your team on an individual level, tailoring everything to inspire a sense of identity and originality.</p>
                <ColorButton className="mt-4">View Our Designing and Branding</ColorButton>
            </div>
            <div className="flex items-center justify-center">
                <img className='w-full md:1/2 lg::w-2/3' src="/image/newspaper.webp" alt=".." />
            </div>
        </section>
    )
}
