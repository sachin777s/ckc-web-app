import React from 'react';
import ColorButton from "../../../components/asssets/ColorButton";
import { FaAngleDown } from "react-icons/fa"
import TransButton from '../../../components/asssets/TransButton';

export default function HeroSection() {
    return (
        <section className='pb-8 sm:pb-0 relative h-[100vh] overflow-hidden flex justify-between'>
            <div className="mt-8 sm:mt-0 w-[90%] xl:w-1/3 self-start md:self-center">
                <h1 className='text-6xl font-bold'>First-class 3D virtual modelling.</h1>
                <p className='mt-4 text-xl opacity-80'>With our 3D design services, we can take your idea from the virtual realm and bring it into reality. Our 3D product modelling and rendering permit seeing how the product design comes together before investing time or money into producing physical products.</p>
               <div className='mt-4 flex gap-2 md:gap-4'>
               <ColorButton>View Our Vertial Modeling</ColorButton>
               <TransButton>Get in Touch</TransButton>
               </div>
            </div>
            <img style={{
                clipPath: "ellipse(60% 90% at 70% 0%)",
                webkitClipPath: "ellipse(60% 90% at 70% 0%)"
            }}
                className='opacity-20 xl:opacity-100 w-full xl:w-3/4 2xl:w-2/3 xl:h-[90%] 2xl:h-full absolute right-0 top-0'
                src="/image/Canary-Wharf-Still.webp"
                alt=".."
            />
            <div 
             onClick={()=>window.scrollTo(0,800)}
            className='absolute bottom-28 left-1/2 flex items-center flex-col gap-2 transition-all duration-300 hover:gap-1'
            >
                <span className=''>Scroll Down</span>
                <FaAngleDown />
                </div>
        </section>
    )
}
