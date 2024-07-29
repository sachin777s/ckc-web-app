import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function Corporate() {
    return (
        <section className='mt-12 flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="w-full md:w-11/12 h-full max-h-[44rem]"
                        src="/image/logo-1.webp"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Corporate & outdoor.
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Over the years, we have exceeded client expectations many times over. We don’t like to overcomplicate designs as we know that the simplest of logos can be the best!
                </p>
                <ColorButton className="mt-4">View our corporate range</ColorButton>
            </div>
        </section>
    )
}