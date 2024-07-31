import React from 'react'

export default function ImagesGallery() {
  return (
    <section>
        <img src="/image/Nathan_Hemming_Brown_Portfolio-2__1_-removebg.webp" alt="" />
        <img src="/image/Nathan_Hemming_Brown_Portfolio-39-1-1-scaled.webp" alt="" />
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
            <img className='w-full md:w-1/2' src="/image/Nathan_Hemming_Brown_Portfolio-3__1_-removebg.webp" alt="" />
            <img className='w-full md:w-1/2' src="/image/Nathan_Hemming_Brown_Portfolio-5__1_-removebg.webp" alt="" />
        </div>
        <div className='flex items-center justify-center gap-8'>
            <img className='w-full md:w-1/3' src="/image/Nathan_Hemming_Brown_Portfolio-5__1_-removebg.webp" alt="" />
            <img className='w-full md:w-1/3' src="/image/Nathan_Hemming_Brown_Portfolio-32__1_-removebg.webp" alt="" />
            <img className='w-full md:w-1/3' src="/image/Nathan_Hemming_Brown_Portfolio-31__1_-removebg.webp" alt="" />
        </div>
    </section>
  )
}
