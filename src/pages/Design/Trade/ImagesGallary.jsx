import React from 'react'

export default function ImagesGallary() {
  return (
    <section className='flex items-center flex-col gap-16'>
        <img className='w-11/12' src="/image/EXHIBITION-DESIGN-removebg.webp" alt="" />
        <img className='w-11/12' src="/image/Banner_Mockup_300x125_2-removebg-1.webp" alt="" />
        <img className='w-11/12' src="/image/coldtone-branding-scaled.webp" alt="" />
        <div className='flex items-center justify-center gap-16 flex-col md:flex-row'>
            <img className='w-full md:w-2/5' src="/image/SIGN-removebg.webp" alt="" />
            <img className='w-full md:w-2/5' src="/image/TRAILER-GRAPHICS-removebg.webp" alt="" />
        </div>
        <div className='flex items-center justify-center gap-16 flex-col md:flex-row'>
            <img className='w-full md:w-2/5' src="/image/wine-branding-2-scaled.webp" alt="" />
            <img className='w-full md:w-2/5' src="/image/wine-branding-scaled.webp" alt="" />
        </div>
        <img className='w-11/12' src="/image/Vertex-Display-Stand-scaled.webp" alt="" />
        <div className='flex items-center justify-center gap-16 flex-col md:flex-row'>
            <img className='w-full md:w-2/5' src="/image/exhibition.webp" alt="" />
            <img className='w-full md:w-2/5' src="/image/vertical-banner-mockup-at-a-convention-center-during-an-expo-a10739-2.webp" alt="" />
        </div>
    </section>
  )
}
