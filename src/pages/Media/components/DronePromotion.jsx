import React from 'react'
import DroneVideo from "../../../assets/videos/drone.mp4"
import ColorButton from "../../../components/asssets/ColorButton"

export default function DronePromotion() {
    return (
        <section className='mt-16 w-full h-[520px] overflow-hidden relative'>
            <video
                className='w-full h-full brightness-50 object-cover'
                src={DroneVideo}
                controls={false}
                autoPlay
                muted
                loop
            ></video>
            <div className='px-2 md:px-4 w-full h-full absolute top-0 left-0 flex items-center justify-center'>
                <div className="w-full max-w-[60rem] flex items-center flex-col text-white">
                    <h1 className='text-5xl font-bold'>High-production drone promotions</h1>
                    <p className='mt-4 text-xl opacity-80'>Our highly skilled drone pilots and experienced cinematographers constantly push the boundaries on what can be achieved with dynamic drone content for our clients</p>
                    <ColorButton className="mt-4">View our drone work</ColorButton>
                </div>
            </div>
        </section>
    )
}
