import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import TransButton from "../../components/asssets/TransButton"

export default function HeroSection() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 text-white">
              <h1 className='fs-1 fw-bold mt-5'>Tailored Marketing <br/> Excellence</h1>
              <p className='fs-4 mt-4'>At <b>CHANDRAKRISHNA CREATIVE</b> Marketing Company, we deliver bespoke marketing strategies that are as unique as your business. Our expertise spans across industries, crafting cohesive and impactful solutions designed to address your specific needs and fuel your success.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our team</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
  )
}
