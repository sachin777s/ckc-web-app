import React from 'react';
import Video from "../../assets/videos/world.mp4";

export default function HeroSection() {
    return (
        <section className="relative flex items-center h-screen justify-center overflow-hidden">
            <div className="relative z-30 p-5 text-7xl text-[var(--secondary-color)] bg-opacity-50 rounded-xl font-bold">
                Welcome to <span className='text-[var(--main-color)]'>Chandra <br /> Krishna</span> Creative
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute object-cover z-10 h-full w-screen max-w-none brightness-75"
            >
                <source src={Video} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
            </video>
        </section>
    );
}
