import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-scroll'

export default function WebHosting() {
    return (
        <section name="hosting" className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center flex-col-reverse md:flex-row'>
            <div className="md:w-1/2 w-full">
                <h1 className='text-4xl font-bold'>
                    Lightning-Fast Website Hosting
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    n today’s fast-paced digital world, a reliable web hosting partner is essential for seamless marketing, customer acquisition, and retention. Our high-speed servers ensure your website performs flawlessly, while our top-notch email hosting guarantees smooth daily communications. We prioritize your security with daily database backups, protecting you from data loss. Our dedicated team manages both security and performance, ensuring everything operates seamless
                </p>
                <Link to='contactus' offset={-150} duration={500}>
                    <ColorButton className="mt-4">Upgrade today</ColorButton>
                </Link>
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