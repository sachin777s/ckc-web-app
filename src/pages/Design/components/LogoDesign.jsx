import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function LogoDesign() {
    return (
        <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-between flex-col-reverse md:flex-row'>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Logo design & illustrations.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Graphic design elements on a website, including the logo, are essential in conveying professionalism and quality. We believe in simple, compelling designs as a great way of helping a business stand out from its competitors.
                </p>
                <ColorButton className="mt-4">Explore our logo designs</ColorButton>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="h-full max-h-[44rem]"
                        src="/image/PHOTO-2022-08-13-12-17-23.webp"
                        alt=".."
                    />
                </div>
            </div>
        </section>
    )
}