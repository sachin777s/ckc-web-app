import React, { useRef } from 'react';
import ColorButton from "../../components/asssets/ColorButton";
import videoIPad from "../../assets/videos/BROADCAST_iPAD.mp4";
import videoIPhone from "../../assets/videos/BROADCAST_iPHONE.mp4"
import { Link } from 'react-scroll';

export default function Responsive() {

    const iPadRef = useRef(null);
    const iPhoneRef = useRef(null);

    return (
        <section className="mt-20 flex items-center justify-center flex-col-reverse lg:flex-row gap-8">
            <div className="w-full lg:w-2/5 pr-0 md:pr-48 flex flex-col">
                <h1 className='text-4xl md:text-5xl font-semibold'>Seamlessly Responsive Websites for Every Device.</h1>
                <p className='mt-8 text-xl opacity-80'>
                    In today’s multi-device world, a fully responsive website is essential for connecting with your audience across desktops, tablets, and mobiles. Our web experts create high-performance, elegant sites that ensure a flawless experience and make a memorable impact, regardless of the device used.
                </p>
                <p className='mt-6 font-bold'>
                    Keywords: India web design, web design agency in India, web design company India, website design and development India, India website design experts.
                </p>
                <Link className="block mt-6 self-center" to='contactus' offset={-150} duration={500}>
                    <ColorButton>Enquire Now</ColorButton>
                </Link>
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
