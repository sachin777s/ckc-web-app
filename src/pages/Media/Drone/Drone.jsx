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
              <h1 className='fs-1 mt-5 ms-5 fw-bold text-white'>Stunning Drone <br/> Promotions</h1>
              <p className='fs-4 ms-5 mt-4 text-white'>Give your customers a fresh perspective on their experience with your company through captivating aerial imagery and films. Our drone promotions offer a dynamic and engaging view that brings.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">View our video portfolio</ColorButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>

        <div onClick={() => window.scrollBy(0, 600)}
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
              <iframe width="560" height="315" className='mt-5' src="https://www.youtube.com/embed/Pe1w7q7TkV8?si=MR8no_n0NQgzgaIj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p><a href="https://vimeo.com/731809333"></a><a href="https://vimeo.com/user180559931"></a><a href="https://vimeo.com"></a></p>
              </div>
              <div className="col-md-6 mt-5">
                <h1 className='mt-5 fs-1 fw-bold mx-5'>Experts in Drone Marketing for India</h1>
                <p className='fs-4 ms-5 mt-4'>In today's digital landscape, showcasing your business through striking visuals is crucial for engaging your target audience. Elevate your brand's prestige and market value with our top-tier drone promotions, designed to capture and highlight your company's unique strengths.</p>
                <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Explore our full photography portfolio</ColorButton>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/dark-car.jpg" alt=".." />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/mumbai-city.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/beautiful.jpg" alt=".." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
