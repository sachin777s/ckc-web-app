import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function PrintDesign() {
    return (
        <section className='container-tailwind mt-12 flex items-center justify-between flex-col-reverse md:flex-row'>
            <div className="w-full md:w-1/2">
                <h1 className='text-4xl font-bold'>
                    Masterly executed print design
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Our creative team is made up of designers with years' worth of experience in design, brochures and the Annual Report industry. We create compelling visuals in our reports and brochures that make your company stand out and deliver your content in an elegant, sophisticated and engaging manner.
                </p>
                <ColorButton className="mt-4">Explore our print design</ColorButton>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img className='w-full md:w-3/4' src="/image/Rolling_Green_Report.webp" alt=".." />
            </div>
        </section>
    )
}
