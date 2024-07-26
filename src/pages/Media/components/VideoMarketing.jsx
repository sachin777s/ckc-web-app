import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function VideoMarketing() {
    return (
        <section className='mt-16 flex flex-col gap-8 md:flex-row items-center justify-center'>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <iframe
                    className=''
                    height={432}
                    width={768}
                    src="https://www.youtube.com/embed/dsdHl0ufxfw?autoplay=1&mute=1"
                    title="revit + 3d max (construction simulation sample)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
            </div>
            <div className="w-full md:w-1/2">
                <h1 className='text-4xl font-bold'>Ultra-realistic 3D product modelling .</h1>
                <p className='mt-4 text-xl opacity-80'>Our team of 3D design specialists have a wealth of experience in 3-dimensional modelling, rendering and creation. We can harness your breathtaking ideas and concepts and bring them into reality!</p>
                <ColorButton className="mt-4">Explore our 3D product modelling</ColorButton>
            </div>
        </section>
    )
}
