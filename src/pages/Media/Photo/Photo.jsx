import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'



export default function Photo() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/race-care-.jpg)', backgroundSize: 'cover', paddingTop: '250px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='mt-5 fs-1 fw-bold ms-5 text-white'>Grade-A <br /> photography.</h1>
              <p className='fs-4 ms-5  mt-5 text-white'>Create a lasting impression of your businss with Grade-A commercial, lifestyle, product and experiential photography</p>
              <Link to={"/media/video"}>
                <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our video promotions</ColorButton>
              </Link>
              <Link to={"/get-in-touch"}>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Contact us</TransButton>
              </Link>
            </div>
            <div className="col-md-6">
              <img src="/image/" alt="" />
            </div>
          </div>
        </div>

        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='text-white'>Scroll Down</span>
          <span className='mt-4 self-center fs-3 text-white'><IoIosArrowDown /></span>
        </div>
      </section>

      <section style={{ backgroundColor: '#efefef' }}>
        <div className="container">
          <div className="mt-5 pt-5">
            <div className='w-full overflow-hidden mt-5'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/15-1-1-1.webp" alt=".." />
            </div>
          </div>
          <div className="mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/EAT_NATURAl-Creative-1.webp" alt=".." />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/12-3-1-1.webp" alt=".." />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/3-3-1.webp" alt=".." />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/aerial-view-ca.jpg" alt=".." />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/green-car-desert.jpg" alt=".." />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className='w-full overflow-hidden'>
            <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/8-1-1-1.webp" alt=".." />
          </div>
        </div>
        <div className="mt-5">
          <div className='w-full overflow-hidden'>
            <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/Hendricks-Gin-1.webp" alt=".." />
          </div>
        </div>
        <div className="mt-5">
          <div className='w-full overflow-hidden'>
            <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/12-2-1-1.webp" alt=".." />
          </div>
        </div>
      </div>
    </>
  )
}
