import React, { useRef } from 'react';
import ColorButton from "../../components/asssets/ColorButton";
import videoIPad from "../../assets/videos/BROADCAST_iPAD.mp4";
import videoIPhone from "../../assets/videos/BROADCAST_iPHONE.mp4"

export default function Responsive() {

    const iPadRef = useRef(null);
    const iPhoneRef = useRef(null);

    return (
        <section className="mt-20 flex items-center justify-center flex-col-reverse lg:flex-row gap-8">
            <div className="w-full lg:w-2/5 pr-0 md:pr-48 flex flex-col">
                <h1 className='text-4xl md:text-5xl font-semibold'>Websites that are responsive to all devices.</h1>
                <p className='mt-8 text-xl opacity-80'>
                    Your website must be fully responsive for all devices, desktop, tablet and mobile, or you can lose customers. Our web enthusiasts will ensure your new site is high performing, sleek and stylish with a sophisticated design that impresses people on any device!
                </p>
                <p className='mt-6 font-bold'>
                    Tags: London web design, London web design agency, London web design company, Web design agency London, Web design company London, Web design London, Website Design London, Website Development London
                </p>
                <ColorButton className="mt-6 self-center" >Enquire Now</ColorButton>
                <div className=''></div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className='w-full flex items-end gap-12 md:gap-24'>
                    <video
                        className='w-1/2 md:w-2/5'
                        src={videoIPad}
                        muted
                        ref={iPadRef}
                        onMouseEnter={() => iPadRef.current.play()}
                        onMouseLeave={() => iPadRef.current.pause()}
                    > </video>
                    <video
                        className='w-1/5'
                        src={videoIPhone}
                        muted
                        ref={iPhoneRef}
                        onMouseEnter={() => iPhoneRef.current.play()}
                        onMouseLeave={() => iPhoneRef.current.pause()}
                    > </video>
                </div>
            </div>
        </section>
    )
}
