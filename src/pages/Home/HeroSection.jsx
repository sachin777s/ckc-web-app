import React from 'react'
import Video from "../../assets/videos/world.mp4"

export default function HeroSection() {
    return (
        <header
            class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
        >
            <div
                class="relative z-30 p-5 text-7xl text-[var(--secondary-color)] bg-opacity-50 rounded-xl font-bold"
            >
                Welcome to <span className='text-[var(--main-color)]'>Chandra <br /> Krishna</span> Creative
            </div>
            <video
                autoplay
                loop
                muted={false}
                controls={false}
                class="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
            >
                <source
                    src={Video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </header>
    )
}
