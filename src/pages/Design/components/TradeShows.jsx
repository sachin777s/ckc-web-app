import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function TradeShows() {
    return (
        <section className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="w-full md:w-11/12 h-full max-h-[44rem]"
                        src="/image/EXHIBITION-DESIGN-removebg.webp"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Trade shows.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Enter the exhibition hall with confidence and stand out with our distinctive, all-inclusive trade show designs.
                </p>
                <Link className="mt-4 block" to="/design/trade">
                    <ColorButton>See our trade show designs</ColorButton>
                </Link>
            </div>
        </section>
    )
}