import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-scroll'

export default function PlayPerClick() {
    return (
        <section name="ppc" className='container-tailwind mt-12 flex gap-8 md:gap-12 items-center flex-col md:flex-row'>
            <div className="w-full md:w-1/2 self-start">
                <div className='w-full h-full overflow-hidden rounded-md'>
                    <img
                        className='w-full h-full transition-all duration-500 hover:scale-125'
                        src="/image/close-up-young.jpg"
                        alt=".."
                    />
                </div>
            </div>
            <div className="md:w-2/6 w-full">
                <h1 className='text-4xl font-bold'>
                    Pay-Per-Click (PPC) Advertising
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    Boost your visibility and drive targeted traffic with our expert PPC services. Leveraging years of experience with platforms like Google Ads and Facebook Ads Manager, we strategically allocate your budget to maximize your business objectives. Partner with us to achieve your marketing goals with precision and expertise.                </p>
                <Link className="block mt-4" to='contactus' offset={-150} duration={500}>
                    <ColorButton>Request a free audit</ColorButton>
                </Link>
            </div>
        </section>
    )
}
