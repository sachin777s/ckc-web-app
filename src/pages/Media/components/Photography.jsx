import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function Photography() {
    return (
        <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center flex-col-reverse md:flex-row'>
            <div className="md:w-1/2 w-full">
                <h1 className='text-4xl font-bold'>Top-Tier Publication Photography</h1>
                <p className='mt-4 text-xl opacity-80'>Our expert photographers at London Marketing Company capture the essence and distinctiveness of your business with top-tier publication photography, showcasing its true beauty and unique qualities.</p>
                <ColorButton className="mt-4">Explore our professional photography</ColorButton>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className='w-full h-full transition-all duration-500 hover:scale-125'
                        src="/image/yellow-car.webp"
                        alt=".."
                    />
                </div>
            </div>
        </section>
    )
}
