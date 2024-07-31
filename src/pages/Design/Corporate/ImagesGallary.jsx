import React from 'react'

export default function ImagesGallary() {
    return (
        <section className='w-full grid grid-col-1'>
            <img className='w-full col-span-2' src="/image/logo-1.webp" alt=".." />
            <div className='col-span-2 flex items-center justify-center'>
                <img className='w-full md:w-1/2' src="/image/Rolling_Green_Report_1__1_-removebg-preview.webp" alt=".." />
                <img className='w-full md:w-1/2' src="/image/Rolling_Green_Report_2__2_-removebg.webp" alt=".." />
            </div>
            <img className='w-full col-span-2' src="/image/HIBBOTT-BILLBOARD-2.webp" alt=".." />
        </section>
    )
}
