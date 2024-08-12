import React from 'react';
import ColorButton from "../../../components/asssets/ColorButton";
import { FaAngleDown } from "react-icons/fa"
import TransButton from '../../../components/asssets/TransButton';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className='pb-8 sm:pb-0 relative h-[100vh] overflow-hidden flex justify-between'>
            <div className="mt-8 sm:mt-0 w-[90%] xl:w-1/3 self-start md:self-center">
                <h1 className='text-6xl font-bold'>Premium 3D Virtual Modeling Excellence</h1>
                <p className='mt-4 text-xl opacity-80'>Turn your ideas into reality with our premier 3D design services. Our cutting-edge product modeling and rendering provide a detailed visualization of your designs, allowing you to perfect every detail before committing to physical production. Enjoy unmatched precision and clarity in every concept.</p>
                <div className='mt-4 flex gap-2 md:gap-4 flex-col md:flex-row'>
                    <Link to='/media/virtual'>
                        <ColorButton>View Our Vertial Modeling</ColorButton>
                    </Link>
                    <ScrollLink to='contactus' offset={-150} duration={500}>
                        <TransButton>Get in Touch</TransButton>
                    </ScrollLink>
                </div>
            </div>
            <img style={{
                clipPath: "ellipse(60% 90% at 70% 0%)",
                webkitClipPath: "ellipse(60% 90% at 70% 0%)"
            }}
                className='opacity-20 xl:opacity-100 w-full xl:w-3/4 2xl:w-2/3 xl:h-[90%] 2xl:h-full absolute right-0 top-0'
                src="/image/person-tusing.jpg"
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
