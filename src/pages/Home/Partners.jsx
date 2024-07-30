import React from 'react';

export default function Partners() {

    const images = [
        "/image/wix_partner_logo.webp",
        "/image/WordPress.webp",
        "/image/russle.svg",
        "/image/googletrusted.webp",
        "/image/CIM.webp",
        "/image/gplogo.webp"
    ]

    return (
        <section className='px-2 md:px-4 py-12 flex flex-wrap items-center justify-center gap-8 bg-[#E4F4F2]'>
            {
                images.map((imageUrl, i) => {
                    return (
                        <img
                            key={i}
                            src={imageUrl}
                            alt=".."
                            className='w-60'
                        />
                    )
                })
            }
        </section>
    )
}
