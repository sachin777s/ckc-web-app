import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function VirtualConcept() {
    return (
        <section className='container-tailwind mt-16 flex gap-8 md:gap-12 flex-col md:flex-row items-center justify-center'>
            <div className="w-full md:w-2/5">
                <h1 className='text-4xl font-bold'>Fully Immersive 3D & 360° Virtual Experiences</h1>
                <p className='mt-4 text-xl opacity-80'>Elevate visitor engagement and showcase your unique offerings with London Marketing Company’s cutting-edge 3D and 360° virtual tours. Our immersive virtual concepts transform your space into an engaging, interactive journey, setting your brand apart with a standout marketing tool.</p>
                <ColorButton className="mt-4">View Our Vertial Modeling</ColorButton>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <iframe
                    className=''
                    height={432}
                    width={768}
                    src="https://www.youtube.com/embed/dsdHl0ufxfw"
                    title="revit + 3d max (construction simulation sample)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
            </div>
        </section>
    )
}
