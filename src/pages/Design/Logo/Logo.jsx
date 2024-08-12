import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <>
      <section className='bg-white relative h-screen overflow-hidden flex justify-between'>
        <div className="mt-8 sm:mt-0 w-[90%] xl:w-1/3 self-start md:self-center">
          <h1 className='text-4xl md:text-6xl font-bold'>
            Logo design
          </h1>
          <p className='mt-4 text-xl opacity-80'>
            Creating distinctive, memorable logos that capture and convey your brand’s unique identity.
          </p>
          <div className='mt-4 flex gap-2 md:gap-4 flex-col md:flex-row'>
            <Link to={"/design/trade"}>
              <ColorButton>Explore Trade design</ColorButton>
            </Link>
            <Link to={"/get-in-touch"}>
              <TransButton>Get in touch</TransButton>
            </Link>
          </div>
        </div>
        <img style={{
          clipPath: "ellipse(60% 90% at 70% 0%)",
          webkitClipPath: "ellipse(60% 90% at 70% 0%)"
        }}
          className='opacity-20 xl:opacity-100 w-full xl:w-3/4 2xl:w-2/3 xl:h-[90%] 2xl:h-full absolute right-0 top-0'
          src="/image/logo-hero.jpg"
          alt=".."
        />
        <div
          onClick={() => window.scrollTo(0, 800)}
          className='absolute bottom-28 left-1/2 hidden sm:flex items-center flex-col gap-2 transition-all duration-300 hover:gap-1'
        >
          <span className=''>Scroll Down</span>
          <FaAngleDown />
        </div>
      </section>

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
