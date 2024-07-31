import React from 'react'

export default function ImagesGallary() {
    return (
        <section className=''>
            <div className='flex gap-8 items-center justify-center flex-col md:flex-row'>
                <img className='w-full md:w-1/2' src="/image/NHB_Creative_KK_A-removebg.webp" alt="" />
                <img className='w-full md:w-1/2' src="/image/NHB_Creative_KK_C-removebg.webp" alt="" />
            </div>
            <div className='flex gap-8 items-center justify-center flex-col md:flex-row'>
                <img className='w-full md:w-1/2' src="/image/NHB_Creative_KK_B-1.webp" alt="" />
                <img className='w-full md:w-1/2' src="/image/NHB_Creative_KK_D-1.webp" alt="" />
            </div>
            <img src="/image/PACKAGING-1-scaled-removebg.webp" alt="" />
            <div className='flex gap-8 items-center justify-center flex-col md:flex-row'>
                <img className='w-full md:w-1/2' src="/image/ESSENTIALLY-NATURAL-BODY-TIN-1-1-removebg-e1662146889312.png" alt="" />
                <img className='w-full md:w-1/2' src="/image/Tin-Container-Packaging-MockUp-2-1-1-removebg.webp" alt="" />
            </div>
            <div className='flex gap-8 items-center justify-center flex-col md:flex-row'>
                <img className='w-full md:w-1/2' src="/image/Burger-Box-Mockup-removebg.webp" alt="" />
                <img className='w-full md:w-1/2' src="/image/noodle-box-removebg.webp" alt="" />
            </div>
            <img src="/image/Coldstone-1-removebg.webp" alt="" />
        </section>
    )
}
