import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function WebHosting() {
    return (
        <section name="hosting" className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center flex-col-reverse md:flex-row'>
            <div className="md:w-1/2 w-full">
                <h1 className='text-4xl font-bold'>
                    Lightning-Speed Website Hosting
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    In today's digital age, businesses rely heavily on the internet for marketing, customer acquisition, and retention. That's why you need a reliable web hosting partner like us! Our high-speed email servers ensure daily communications run smoothly without affecting your site’s performance. We prioritize security with daily backups of all databases, so you never have to worry about data loss. Our dedicated team manages both security and performance, ensuring everything runs seamlessly.
                </p>
                <ColorButton className="mt-4">Upgrade today</ColorButton>
            </div>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <video
                        className='w-full h-full'
                        src="/image/data-centers.mp4"
                        alt=".."
                        controls={false}
                        muted
                        loop
                        autoPlay
                    />
                </div>
            </div>
        </section>
    )
}