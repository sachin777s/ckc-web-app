import React from 'react';
import ColorButton from "../../../components/asssets/ColorButton";
import { FaAngleDown } from "react-icons/fa"
import TransButton from '../../../components/asssets/TransButton';

export default function HeroSection() {
    return (
        <section className='bg-white relative h-screen overflow-hidden flex justify-between'>
            <div className="mt-8 sm:mt-0 w-[90%] xl:w-1/3 self-start md:self-center">
                <h1 className='text-4xl md:text-6xl font-bold'>
                    Print and Corporate Design Excellence
                </h1>
                <p className='mt-4 text-xl opacity-80'>
                    "Your brand distinguishes you from the competition. Our designers specialize in creating tailored corporate and print designs that elevate your brand reputation and resonate with your target audience.
                </p>
                <div className='mt-4 flex gap-2 md:gap-4 flex-col md:flex-row'>
                    <ColorButton>About Us</ColorButton>
                    <TransButton>Get in touch</TransButton>
                </div>
            </div>
            <img style={{
                clipPath: "ellipse(60% 90% at 70% 0%)",
                webkitClipPath: "ellipse(60% 90% at 70% 0%)"
            }}
                className='opacity-20 xl:opacity-100 w-full xl:w-3/4 2xl:w-2/3 xl:h-[90%] 2xl:h-full absolute right-0 top-0'
                src="/image/Nathan_Hemming_Brown_Portfolio-39-1-1-scaled.webp"
                alt=".."
            />
            <div
                onClick={() => window.scrollTo(0, 800)}
                className='absolute bottom-28 left-1/2 hidden sm:flex items-center flex-col gap-2 transition-all duration-300 hover:gap-1'
            >
                <span className=''>Scroll Down</span>
                <FaAngleDown />
            </div>
        </section>
    )
}
