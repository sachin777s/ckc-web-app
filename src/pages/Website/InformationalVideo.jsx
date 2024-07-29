import React, { useRef } from 'react';
import LeftVideo from "../../assets/videos/SELECTVISA_LAP.mp4";
import RightVideo from "../../assets/videos/BROADCAST_LAP.mp4";
import ColorButton from "../../components/asssets/ColorButton"

export default function InformationalVideo() {

    const leftVideoRef = useRef(null);
    const rightVideoRef = useRef(null);

    return (
        <section>
            <div>
                <h1 className='text-center text-6xl font-semibold'>
                    Informational websites
                </h1>
                <p className='mt-6 text-center text-2xl font-semibold'>
                    Powerful and professional informational website development.
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                <video
                    className='w-full md:w-2/5'
                    src={LeftVideo}
                    muted
                    ref={leftVideoRef}
                    onMouseEnter={() => leftVideoRef.current.play()}
                    onMouseLeave={() => leftVideoRef.current.pause()}
                >
                </video>
                <video
                    className='w-full md:w-2/5'
                    src={RightVideo}
                    muted
                    ref={rightVideoRef}
                    onMouseEnter={() => rightVideoRef.current.play()}
                    onMouseLeave={() => rightVideoRef.current.pause()}
                ></video>
            </div>
            <div className='w-full flex flex-col items-center'>
                <p className='text-center opacity-80 text-xl'>
                    Hover over the laptops above to see what our websites look like.
                </p>
                <ColorButton className="mt-4" >Enquire now</ColorButton>
            </div>
        </section>
    )
}
