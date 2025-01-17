import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function LogoDesign() {
    return (
        <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-between flex-col-reverse md:flex-row'>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Logo Design and Artistic Illustrations
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Graphic design elements, especially your logo, are crucial in showcasing professionalism and quality on your website. We specialize in creating simple yet powerful designs that help your business stand out from the competition.                </p>
                <Link className="mt-4 block" to="/design/logo">
                    <ColorButton>Explore our logo designs</ColorButton>
                </Link>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="h-full max-h-[44rem]"
                        src="/image/logo-designer-working-computer-desktop.jpg"
                        alt=".."
                    />
                </div>
            </div>
        </section>
    )
}