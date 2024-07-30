import React, { useRef } from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import VideoPC from "../../assets/videos/BROADCAST_LAP.mp4"
import VideoIphone from "../../assets/videos/BROADCAST_iPHONE.mp4"

export default function WebsitePortFolio() {

  const pcVideoRef = useRef(null);
  const iPhoneVideoRef = useRef(null);

  return (
    <section className='mt-12 mb-12 flex gap-8 md:gap-0 items-center justify-between flex-col-reverse md:flex-row scale-75 md:scale-100'>
      <div className="md:w-2/6 w-full">
        <h1 className='text-4xl font-bold'>Supreme website design & development</h1>
        <h3 className='mt-4 text-base font-bold'>Web Design Agency London</h3>
        <p className='mt-4 text-xl opacity-80'>Your website is the digital face of your business online. Invest in empowering and encapsulating website design and full-stack development.</p>
        <ColorButton className="mt-4">Check Our Website Portfolio</ColorButton>
      </div>
      <div className="md:w-4/6 w-full flex flex-col items-center">
        <div className='relative'>
          <video
            className='w-full md:w-[46rem]'
            ref={pcVideoRef}
            onMouseEnter={() => pcVideoRef.current.play()}
            onMouseOut={() => pcVideoRef.current.pause()}
            src={VideoPC}
          >
          </video>
          <video
            className='w-28 absolute bottom-4 -right-12'
            ref={iPhoneVideoRef}
            onMouseEnter={() => iPhoneVideoRef.current.play()}
            onMouseOut={() => iPhoneVideoRef.current.pause()}
            src={VideoIphone}
          ></video>
        </div>
        <span className='font-bold'>
          Hover over our responsive screens to see what our websites look like
        </span>
      </div>
    </section>
  )
}
