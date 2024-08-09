import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function SongPromotion() {
    return (
        <section className='mt-20 h-screen w-full bg-[url(/image/song-public.jpg)] bg-cover'>
            <div className='h-full w-full backdrop-brightness-50 flex items-center'>
                <span></span>
                <div className='ml-12 w-full md:w-1/3'>
                    <h1 className='text-6xl font-bold text-[var(--secondary-color)]'>Energizing Video Campaigns..</h1>
                    <p className='mt-12 text-xl text-[var(--secondary-color)] opacity-80'>Each brand has a distinct story to tell. We craft your videography to embody your brand’s core values through high-end, cinematic production, delivering visually stunning and engaging brand narratives.</p>
                    <ColorButton className="mt-12">View Our Videos</ColorButton>
                </div>
            </div>
        </section>
    )
}
