import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function PrintDesign() {
    return (
        <section className='container-tailwind mt-12 flex items-center justify-between flex-col-reverse md:flex-row'>
            <div className="w-full md:w-1/2">
                <h1 className='text-4xl font-bold'>
                    Expertly Crafted Print Design
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Our talented design team brings years of experience in creating standout brochures and annual reports. We craft visually compelling materials that present your content with elegance and sophistication, ensuring your company makes a memorable impression.
                </p>
                <ColorButton className="mt-4">Explore our print design</ColorButton>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img className='w-full md:w-3/4' src="/image/Rolling_Green_Report.webp" alt=".." />
            </div>
        </section>
    )
}
