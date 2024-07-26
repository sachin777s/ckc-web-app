
import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function MarketingConcept() {
    return (
        <section className='mt-16 flex flex-col-reverse gap-8 md:flex-row items-center justify-center'>
            <div className="w-full md:w-2/5">
                <h1 className='text-4xl font-bold'>Exciting video marketing concepts.</h1>
                <p className='mt-4 text-xl opacity-80'>With our high-quality equipment and expertise, we create cinematic videos that tell a brand's unique story.</p>
                <ColorButton className="mt-4">Explore our video promotions</ColorButton>
            </div>
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
        </section>
    )
}
