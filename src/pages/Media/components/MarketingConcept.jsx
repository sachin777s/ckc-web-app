
import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function MarketingConcept() {
    return (
        <section className='container-tailwind mt-16 flex flex-col-reverse gap-8 md:flex-row items-center justify-center'>
            <div className="w-full md:w-2/5">
                <h1 className='text-4xl font-bold'>Innovative Video Marketing Strategies</h1>
                <p className='mt-4 text-xl opacity-80'>Using state-of-the-art equipment and expert techniques, we create cinematic videos that powerfully narrate your brand’s unique story. Our innovative approach ensures your message resonates with your audience and stands out in a crowded marketplace.</p>
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
