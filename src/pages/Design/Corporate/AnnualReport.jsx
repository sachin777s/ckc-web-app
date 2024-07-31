import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"

export default function AnnualReport() {
    return (
        <section className='mt-12 flex gap-8 md:gap-12 items-center justify-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className="w-full md:w-11/12 h-full max-h-[44rem]"
                        src="/image/Nathan_Hemming_Brown_Portfolio-58-removebg.webp"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/5 w-full">
                <h1 className='text-4xl font-bold'>
                    Annual Reports & Professional Documentation .
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    London Marketing Company specialises in creating engaging and captivating corporate reports. All reports and professional documentation are created to encompass the core brand identity whilst delivering the desired information effectively.
                </p>
                <ColorButton className="mt-4">Contact Us Today</ColorButton>
            </div>
        </section>
    )
}