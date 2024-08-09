import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function VirtualModeling() {
    return (
        <section className='container-tailwind mt-16 flex gap-8 md:gap-12 flex-col md:flex-row items-center justify-center'>
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
            <div className="w-full md:w-1/2">
                <h1 className='text-4xl font-bold'>Exceptional 3D Virtual Creations</h1>
                <p className='mt-4 text-xl opacity-80'>Our 3D design services transform your concepts from virtual ideas into tangible realities. With advanced 3D product modeling and rendering, you can visualize your design in detail before committing resources to physical production. This allows you to refine and perfect your product with confidence, ensuring an efficient and cost-effective development process.</p>
                <ColorButton className="mt-4">View Our Vertial Modeling</ColorButton>
            </div>
        </section>
    )
}
