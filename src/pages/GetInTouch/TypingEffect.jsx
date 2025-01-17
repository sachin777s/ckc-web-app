import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

export default function TypingEffect() {
    return (
        <section className='mt-20 w-full h-[410px] bg-[url(/image/buildings.jpg)] bg-center backdrop:brightness-50'>
            <div className='w-full h-full flex flex-col gap-4 items-center justify-center backdrop-brightness-75'>
                <span className='text-4xl font-semibold text-[var(--secondary-color)]'>India loves our...</span>
                <ReactTypingEffect
                    className='text-6xl backdrop:opacity-50 text-center text-[var(--secondary-color)] font-semibold'
                    typingDelay={10}
                    eraseSpeed={100}
                    speed={100}
                    eraseDelay={2000}
                    text={[
                        "Branding",
                        "Commercial Photography",
                        "Video Promotion",
                        "Google 360 Vertual Tour",
                        "Professional Marketing",
                        "Website Design",
                        "Search Engine Optimization"
                    ]}
                />
            </div>
        </section>
    )
}
