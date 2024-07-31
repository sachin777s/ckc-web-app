import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"


export default function ThreeD() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/STD_C2-V3.5-scaled.webp)', backgroundSize: 'cover', paddingTop: '200px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='mt-5 fs-1 fw-bold'>3D modelling & <br /> rendering.</h1>
              <p className='fs-4 mt-4'>With our 3D Product renderings, you can take your ideas from a drawing board to reality. No matter what stage of development, we've got 3D solutions to utilise.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill">View our marketing</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
            </div>
          </div>
        </div>

        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='fs-5'>Scroll Down</span>
          <span className='mt-4 self-center fs-3'><IoIosArrowDown /></span>
        </div>
      </section>

      <section style={{backgroundColor: '#d4d4d4', marginTop: '60px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125 mt-5' src="/image/STD_C2-V3.2.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h1 className='mt-5 fs-1 fw-bold mx-5'>Innovative 3D modelling for products and businesses.</h1>
              <p className='mt-4 fs-5 mx-5'>3D product models have become an invaluable asset for brands to utilize in their marketing campaigns. With the ability to be packaged and deployed across multiple platforms, these versatile catches can be used effectively by companies.</p>
            </div>
          </div>
          <h1 className='mt-5 fs-1 fw-bold'>Develop ideas, concepts and prototypes cost<br /> efficiently</h1>
          <div className="fs-5 mt-5">
            <p>Manufacturing product ideas and concepts can be costly in terms of materials, resources and labour when developing physical prototypes. Once the prototype is created, making small changes and alterations is also time and cost-intensive.</p>
            <br />
            <p>3D product modelling and rendering eliminate many physical manufacturing costs and the turnaround time of development and changes once the prototype is developed.</p>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/technoorganic.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/envision.jpg" alt=".." />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/rendering-smart-home-device.jpg" alt=".." />
            </div>
          </div>
          <div className="mt-5">
            <div className='w-full overflow-hidden'>
              <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/folklore.jpg" alt=".." />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/plant-table.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/background-with.jpg" alt=".." />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='mt-5 fs-1 fw-bold'>3D modelling & rendering: perfect for all industries.</h1>
              <p className='fs-5 mt-4'>3D modelling and rendering have grown exponentially in the rise and prevalence of experiential marketing and digital promotions. Industries are particularly benefitting from 3D modelling and rendering include architecture, automotive, jewellery, fashion, homewares, design, antiques and interiors.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill">Contact us today</ColorButton>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/Soil_visualisation-scaled.webp" alt=".." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


