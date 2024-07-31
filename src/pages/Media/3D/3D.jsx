import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"


export default function ThreeD() {
  return (
    <>
    <section style={{backgroundImage: 'url(/image/STD_C2-V3.5-scaled.webp)', backgroundSize: 'cover', paddingTop: '200px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className='mt-5 fs-1 fw-bold ms-5'>3D modelling & <br/> rendering.</h1>
            <p className='fs-4 ms-5 mt-4'>With our 3D Product renderings, you can take your ideas from a drawing board to reality. No matter what stage of development, we've got 3D solutions to utilise.</p>
            <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ms-5">View our marketing</ColorButton>
            <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
          </div>
        </div>
      </div>

      <div onClick={()=>window.scrollBy(0,600)}
         className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='fs-5'>Scroll Down</span>
          <span className='mt-4 self-center fs-3'><IoIosArrowDown /></span>
        </div>
    </section>

    <section>
      <div className="row">
        <div className="col-md-6">

        </div> 
        <div className="col-md-6 mt-5 fs-1 fw-bold">
          <h1>Innovative 3D modelling for products and businesses.</h1>
        </div>
      </div> 
    </section>
    </>
  )
}
