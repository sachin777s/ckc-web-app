import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function VirtualConcept() {
    return (
        <section className='mt-16 flex gap-8 md:gap-12 flex-col md:flex-row items-center justify-center'>
            <div className="w-full md:w-2/5">
                <h1 className='text-4xl font-bold'>First-class 3D virtual modelling.</h1>
                <p className='mt-4 text-xl opacity-80'>With our 3D design services, we can take your idea from the virtual realm and bring it into reality. Our 3D product modelling and rendering permit seeing how the product design comes together before investing time or money into producing physical products.</p>
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
