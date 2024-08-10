import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function SongPromotion() {
    return (
        <section className='mt-20 h-screen w-full bg-[url(/image/song-public.jpg)] bg-cover'>
            <div className='h-full w-full backdrop-brightness-50 flex items-center'>
                <span></span>
                <div className='ml-12 w-full md:w-1/3'>
                    <h1 className='text-6xl font-bold text-[var(--secondary-color)]'>Dynamic Video Campaigns.</h1>
                    <p className='mt-12 text-xl text-[var(--secondary-color)] opacity-80'>Every brand has a unique story waiting to be told. We transform your vision into captivating cinematic experiences, blending high-end production with compelling storytelling. Our vibrant video campaigns bring your brand’s essence to life, delivering visually striking narratives that resonate and engage.</p>
                    <ColorButton className="mt-12">View Our Videos</ColorButton>
                </div>
            </div>
        </section>
    )
}
