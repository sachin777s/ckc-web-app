import React from 'react';
import Video from "../../assets/videos/herosection.mp4";

export default function HeroSection() {
    return (
        <section className="relative flex items-center h-screen justify-center overflow-hidden">
            <div className="mx-2 md:mx-4 max-w-[52rem] text-center relative z-30 p-5 text-5xl md:text-7xl text-[var(--secondary-color)] bg-opacity-50 rounded-xl font-bold">
                Welcome to <span className='text-[var(--main-color)]'> CKC Marketing </span> Company
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute object-cover z-10 h-full w-screen max-w-none brightness-50"
            >
                <source src={Video} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
            </video>
        </section>
    );
}
