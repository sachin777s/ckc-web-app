import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function SongPromotion() {
    return (
        <section className='h-screen w-full bg-[url(/image/song-public.jpg)] bg-cover'>
            <div className='h-full w-full backdrop-brightness-50 flex items-center'>
                <span></span>
                <div className='ml-12 w-full md:w-1/3'>
                    <h1 className='text-6xl font-bold text-[var(--secondary-color)]'>Galvanising video promotions..</h1>
                    <p className='mt-12 text-xl text-[var(--secondary-color)] opacity-80'>A brand is unique, and so is the story. We plan your videography production to reflect the true brand ethos with cinematic high-class production videos, encapsulating an entirely visually engaging branded storytelling.</p>
                    <ColorButton className="mt-12">View Our Videos</ColorButton>
                </div>
            </div>
        </section>
    )
}
