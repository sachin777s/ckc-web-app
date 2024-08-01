import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import TransButton from "../../components/asssets/TransButton"

export default function HeroSection() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold mt-5'>Professional Marketing <br />Services.</h1>
              <p className='fs-4 mt-4'>Londontra Marketing Company strategically crafts bespoke and integrated marketing strategies for businesses operating in all industries or circumstances.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our team</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
  )
}
