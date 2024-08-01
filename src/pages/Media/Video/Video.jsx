import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"
import DroneVideo from "../../../assets/videos/mountain.mp4"

export default function Video() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/woman.jpg)', backgroundSize: 'cover', paddingTop: '70px', paddingBottom: '250px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold text-white'>Rememberable video <br /> marketing.</h1>
              <p className='fs-5 mt-4 text-white'>Immerse your customers in a video to see your business from a new perspective and experience your story from beginning to end.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our photography</ColorButton>
              <br />
              <TransButton className="fs-4 rounded-pill">Get in touch</TransButton></div>
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

        <section className="text-gray-600 body-font" style={{backgroundColor: '#d0d0d0', marginTop: '70px'}}>
          <div className="container px-5 py-24 mx-auto flex items-center justify-center">
            <div className="lg:w-3/5 md:w-2/5 md:pr-16 lg:pr-0 pr-0">
              <img style={{ height: '400px', margin: '0 auto' }} src="/image/form-man-05.png" alt="form image" />
              <h1 className="title-font fs-1 fw-bold font-medium text-gray-900 mx-5">
              Have a video project?.
              </h1>
              <p className="leading-relaxed mt-4 fs-5 mx-5">Let's get to know each other and talk about your video needs!</p>
            </div>

            <div className="md:w-3/5">
              <form
                action=""
                className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                    Company
                  </label>
                  <input
                    type="company"
                    name="company"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    Talephone
                  </label>
                  <input
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    What's your budget?
                  </label>
                  <select
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Marketing</option>
                    <option>Website</option>
                    <option>Branding</option>
                    <option>Media</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    What's your email regarding?
                  </label>
                  <select
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>£0 - £1k</option>
                    <option>£1 - £5</option>
                    <option>£5 - £10</option>
                    <option>£10 - £25</option>
                    <option>£25 - £100</option>
                    <option>£100+</option>
                  </select>
                </div>

                <div className="relative mb-4 col-span-2">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    Message
                  </label> <br />
                  <textarea
                    name="message"
                    id="message"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </form>
            </div>
          </div>
        </section>
        </>
  )
}
