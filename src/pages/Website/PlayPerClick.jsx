import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function PlayPerClick() {
    return (
        <section name="ppc" className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className='w-full h-full transition-all duration-500 hover:scale-125'
                        src="/image/car.webp"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/6 w-full">
                <h1 className='text-4xl font-bold'>
                    Pay-Per-Click (PPC).
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Pay-per-click advertising could be the perfect solution if you’re looking for a way to increase your visibility in search engine results. We have years of experience running successful PPC campaigns on various platforms, including Google Adwords and Facebook Ads Manager. Our PPC experts know how best to allocate the budget wisely while achieving the outlined business targets.
                </p>
                <ColorButton className="mt-4">Request a free audit</ColorButton>
            </div>
        </section>
    )
}
