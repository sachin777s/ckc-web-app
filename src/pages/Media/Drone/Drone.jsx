import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import { IoIosArrowDown } from "react-icons/io"


export default function Drone() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/car-eice-rane.jpg)', backgroundSize: 'cover', paddingTop: '250px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 mt-5 ms-5 fw-bold'>Majestic drone <br /> promotions.</h1>
              <p className='fs-4 ms-5 mt-4'>Enliven customers with a new perspective on their experience with your company through aerial visual imagery and films.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">View our video portfolio</ColorButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>

        <div onClick={()=>window.scrollBy(0,600)}
         className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='text-warning'>Scroll Down</span>
          <span className='mt-4 self-center fs-3 text-warning'><IoIosArrowDown /></span>
        </div>
      </section>
        
      <section>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-6 mt-5">
                <iframe className='ms-5 mt-5' src="https://player.vimeo.com/video/731809333?h=fd304d0b3b" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <p><a href="https://vimeo.com/731809333"></a><a href="https://vimeo.com/user180559931"></a><a href="https://vimeo.com"></a></p>
              </div>
              <div className="col-md-6 mt-5">
                <h1 className='mt-5 fs-1 fw-bold mx-5'>London's Drone Marketing Experts.</h1>
                <p className='fs-4 ms-5 mt-4'>In today's online world, visually demonstrating your business's actions is essential to reaching your target customers. Enhance brand prestige and market value with our professional Grade-A drone promotions.</p>
                <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Explore our full photography portfolio</ColorButton>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <img src="/image/dark-car.jpg" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/mumbai-city.jpg" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/beautiful.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
