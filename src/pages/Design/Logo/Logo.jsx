import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"

export default function Logo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className='fs-1 fw-bold mt-5'>Logo design .</h1>
            <p className='fs-5 mt-4'>Creating distinctive, memorable logos that capture and convey your brand’s unique identity.</p>
            <div className='mt-4 flex items-center gap-2 flex-col md:flex-row'>
              <ColorButton className="fs-4 rounded-pill ">Explore logo design</ColorButton>
              <TransButton className="fs-4 rounded-pill ">Get in touch</TransButton>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/image/Arete.png" alt="logo-image" />
          </div>
        </div>
      </div>

      <div onClick={() => window.scrollBy(0, 600)}
        className='absolute bottom-20 left-1/2 text-center flex flex-col'>
        <span className='text-danger'>Scroll Down</span>
        <span className='mt-4 self-center text-danger fs-4'><IoIosArrowDown /></span>
      </div>

      <section>
        <div className="mt-5">
          <img src="/image/PHOTO.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/image/final-logo-colour-2.webp" alt="" />
            </div>
            <div className="col-md-6">
              <img src="/image/SOMERSET-LOGO-TRANS-BLUE-1.webp" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/image/JS_3.webp" alt="" />
            </div>
            <div className="col-md-6">
              <img src="/image/CS-PhotoRoom.webp" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/image/BJC-FINAL-LOGO-1-e.png" alt="" />
            </div>
            <div className="col-md-6">
              <img src="/image/STACKED-LOGO-removebg.webp" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/image/LOGO-2-FINAL-1-PhotoRoom.webp" alt="" />
            </div>
            <div className="col-md-6">
              <img src="/image/LOGO-2-FROZEN-FINAL-1-PhotoRoom.webp" alt="" />
            </div>
            <img src="/image/LOGO-BADGES.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
