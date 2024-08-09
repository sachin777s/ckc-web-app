import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import TransButton from "../../components/asssets/TransButton"

export default function HeroSection() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold mt-5'>Comprehensive Marketing <br/> Services</h1>
              <p className='fs-4 mt-4'>At <b>CHANDRAKRISHNA CREATIVE</b> Marketing Company, we specialize in designing custom and cohesive marketing strategies tailored to businesses across all industries and situations. Our approach ensures that each strategy is uniquely crafted to meet your specific needs and drive success.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our team</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
  )
}
