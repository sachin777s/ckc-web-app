import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"
import DroneVideo from "../../../assets/videos/mountain.mp4"
import ContactUs from "../../../components/Contactus"
import { Link } from 'react-router-dom'

export default function Video() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/woman.jpg)', backgroundSize: 'cover', paddingTop: '70px', paddingBottom: '250px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold text-white'>Rememberable video <br /> marketing.</h1>
              <p className='fs-5 mt-4 text-white'>Immerse your customers in a video to see your business from a new perspective and experience your story from beginning to end.</p>
              <Link to="/media/photo">
                <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our photography</ColorButton>
              </Link>
              <br />
              <Link to="/get-in-touch">
                <TransButton className="fs-4 rounded-pill">Get in touch</TransButton>
              </Link>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='text-white'>Scroll Down</span>
          <span className='mt-4 self-center fs-3 text-white'><IoIosArrowDown /></span>
        </div>
      </section>

      <section className='mt-16 w-full h-[520px] overflow-hidden relative'>
        <video className='w-full h-full brightness-50 object-cover' src={DroneVideo} controls={false} autoPlay muted loop></video>
        <div className='px-2 md:px-4 w-full h-full absolute top-0 left-0 flex items-center justify-center'>
          <div className="w-full max-w-[60rem] flex items-center flex-col text-white">
            <h1 className='text-5xl font-bold'>Rememberable video marketing.</h1>
            <p className='mt-4 text-xl opacity-80'>Immerse your customers in a video to see your business from a new perspective and experience your story from beginning to end.</p>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  )
}
