import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

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
                <h1 className='text-4xl font-bold'>Stunning 3D Virtual Creations</h1>
                <p className='mt-4 text-xl opacity-80'>Turn your ideas into breathtaking realities with our cutting-edge 3D design services. Our advanced 3D modeling and rendering bring your concepts to life, offering a detailed preview before you invest in physical production. Refine and perfect your designs with confidence, streamlining your development process while keeping costs in check.</p>
                <Link className='block mt-4' to={"/media/virtual"}>
                <ColorButton className="mt-4">View Our Vertial Modeling</ColorButton>
                </Link>
            </div>
        </section>
    )
}
